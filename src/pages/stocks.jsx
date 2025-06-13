import Logo from "../components/logo";
import StockData from "../components/stock-data";
import HeroImageComp from "../components/HeroImage.jsx";
import { ChevronDown } from "react-feather";

const Stocks = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen">
        <HeroImageComp />
        <Logo />
        <div className="h-[80vh] flex flex-col items-center justify-center text-center p-8">
          <h2 className="mt-4 text-5xl text-gray-100 font-bold">
            View all stocks in real time.
          </h2>
          <a
            href="#stocks-list"
            className="absolute mt-6 bg-lime-600 text-white px-4 py-2 rounded bottom-20 animate-bounce hover:animate-none"
          >
           <ChevronDown />
          </a>
        </div>
      </section>
      <section id="stocks-list" className="p-5">
        <StockData />
      </section>
    </div>
  );
};
export default Stocks;
