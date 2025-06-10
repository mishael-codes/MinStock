import Logo from "../components/logo";
import StockData from "../components/stock-data";
import HeroImage from "../assets/images/hero-img.webp";

const Stocks = () => {
  return (
    <>
      <section className="h-screen">
        <img
          src={HeroImage}
          alt="A trading chart"
          className="bg-cover min-h-screen min-w-screen absolute -z-1"
        />
        <Logo />
        <div className="h-[80vh] flex flex-col items-center justify-center text-center p-8">
          <h2 className="mt-4 text-5xl text-gray-100 font-bold">
            View all stocks in real time.
          </h2>
          <a
            href="#stocks-list"
            className="mt-6 bg-lime-600 text-white px-4 py-2 rounded"
          >
            Get Started
          </a>
        </div>
      </section>
      <section id="stocks-list" className="p-8">
        <StockData />
      </section>
    </>
  );
};
export default Stocks;
