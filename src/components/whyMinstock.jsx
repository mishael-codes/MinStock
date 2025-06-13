const reasons = [
  {
    title: "🔁 Real-Time Updates",
    description:
      "Stay ahead with second-by-second stock price updates — no lags, no delays, just the market as it moves.",
  },
  {
    title: "📊 Clean Interface",
    description:
      "Simple, intuitive, and responsive UI that lets you focus on performance and prices — not clutter.",
  },
  {
    title: "📁 Sector Filtering",
    description:
      "Slice and dice your view by industry sectors. Focus only on what matters to you — tech, finance, energy, and more.",
  },
];

const WhyMinStocks = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Why MinStocks?</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {reasons.map((reason, index) => (
          <div key={index} className="border rounded p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMinStocks;
