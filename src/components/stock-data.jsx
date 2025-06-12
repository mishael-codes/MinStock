import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { Link } from "react-router";
import visualizeStockState from "../functions/visualizeStockState";

const symbols = [
  "AAPL",
  "GOOGL",
  "AMZN",
  "MSFT",
  "TSLA",
  "META",
  "NFLX",
  "NVDA",
  "BRK.B",
  "V",
  "JPM",
  "XOM",
  "JNJ",
  "PG",
  "KO",
  "PEP",
  "WMT",
  "CSCO",
  "ADBE",
  "CRM",
];

const StockData = () => {
  const [stocks, setStocks] = useState({});
  const [showSectors, setShowSectors] = useState(false);
  const [selectedSector, setSelectedSector] = useState("All");
  const [filterType, setFilterType] = useState("All"); // All, Gainers, Losers
  const API_KEY = import.meta.env.VITE_API_KEY;
  const ws = useRef(null);

  useEffect(() => {
    if (!API_KEY) return console.error("Missing API key.");

    const fetchStockData = async () => {
      try {
        const results = await Promise.all(
          symbols.map(async (symbol) => {
            const [quoteRes, profileRes] = await Promise.all([
              fetch(
                `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
              ),
              fetch(
                `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`
              ),
            ]);

            if (!quoteRes.ok || !profileRes.ok) {
              console.error(`Failed to fetch data for ${symbol}`);
              return null;
            }

            const quoteData = await quoteRes.json();
            const profileData = await profileRes.json();

            return { symbol, ...quoteData, ...profileData };
          })
        );

        const dataMap = results.filter(Boolean).reduce((acc, item) => {
          acc[item.symbol] = item;
          return acc;
        }, {});
        setStocks(dataMap);
      } catch (err) {
        console.error("Error fetching stock data:", err);
      }
    };

    fetchStockData();
  }, [API_KEY]);

  useEffect(() => {
    if (!API_KEY) return;

    ws.current = new WebSocket(`wss://ws.finnhub.io?token=${API_KEY}`);

    ws.current.onopen = () => {
      symbols.forEach((s) => {
        ws.current.send(JSON.stringify({ type: "subscribe", symbol: s }));
      });
    };

    ws.current.onmessage = ({ data }) => {
      const msg = JSON.parse(data);
      if (msg.type !== "trade" || !msg.data) return;

      setStocks((prev) => {
        const updated = { ...prev };
        msg.data.forEach(({ s, p }) => {
          if (updated[s]) {
            updated[s] = {
              ...updated[s],
              c: p,
            };
          }
        });
        return updated;
      });
    };

    ws.current.onerror = (err) => console.error("WebSocket error:", err);
    ws.current.onclose = () => console.log("WebSocket closed");

    return () => {
      if (ws.current.readyState === WebSocket.OPEN) {
        symbols.forEach((s) => {
          if (s !== "BRK.A") {
            ws.current.send(JSON.stringify({ type: "unsubscribe", symbol: s }));
          }
        });
        ws.current.close();
      }
    };
  }, [API_KEY]);

  const sectors = [
    "All",
    ...new Set(
      Object.values(stocks)
        .map((s) => s.finnhubIndustry)
        .filter(Boolean)
    ),
  ];

  let filteredStocks = Object.values(stocks);
  if (selectedSector !== "All") {
    filteredStocks = filteredStocks.filter(
      (s) => s.finnhubIndustry === selectedSector
    );
  }

  // Apply Gainers/Losers Filter
  if (filterType === "Gainers") {
    filteredStocks = filteredStocks.filter((s) => s.c > s.pc);
  } else if (filterType === "Losers") {
    filteredStocks = filteredStocks.filter((s) => s.c < s.pc);
  }

  return (
    <div className="space-y-6 max-w-screen">
      {/* Sector Filter */}
      <div className="gap-4 items-center">
        <p
          className="flex items-center justify-center mb-4 font-medium cursor-pointer"
          onClick={() => setShowSectors(!showSectors)}
        >
          Filter by sector {showSectors ? <ChevronUp /> : <ChevronDown />}
        </p>
        <div
          className={`transition-all duration-500 ease-in-out ${
            showSectors
              ? "opacity-100 max-h-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pointer-events-auto"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          {sectors.map((sector) => (
            <div
              key={sector}
              className={`p-2 border cursor-pointer ${
                selectedSector === sector ? "bg-green-200" : ""
              }`}
              onClick={() => {
                setSelectedSector(sector);
                setShowSectors(false);
              }}
            >
              {sector}
            </div>
          ))}
        </div>
      </div>

      {/* Gainers/Losers Filter */}
      <div className="flex gap-4 justify-center">
        {["All", "Gainers", "Losers"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 border rounded ${
              filterType === type ? "bg-green-200" : "bg-white"
            }`}
            onClick={() => setFilterType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Stock Cards */}
      {Object.keys(stocks).length === 0 && filteredStocks.length === 0 ? (
        <p className="text-center">Loading stock data...</p>
      ) : filteredStocks.length === 0 ? (
        <p className="text-center">No stocks found.</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {filteredStocks.map(({ symbol, c, pc, name, finnhubIndustry }) => {
            const change =
              typeof c === "number" && typeof pc === "number" && pc !== 0
                ? (((c - pc) / pc) * 100).toFixed(2)
                : null;

            return (
              <Link
                to={`/stocks/${symbol}`}
                key={symbol}
                className="p-4 border rounded shadow"
              >
                <h2 className="text-xl font-bold">{symbol}</h2>
                <p className="text-gray-700">{name || "—"}</p>
                <p className="text-sm text-gray-500">
                  Sector: {finnhubIndustry || "N/A"}
                </p>
                <p>Price: ${c}</p>
                <p>
                  Change:{" "}
                  {change !== null ? (
                    <span className={visualizeStockState(pc, c)}>
                      {change}%
                    </span>
                  ) : (
                    "N/A"
                  )}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StockData;
