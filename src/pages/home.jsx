import { Link } from "react-router";
import Logo from "../components/logo";
import HeroImageComp from "../components/HeroImage";
import WhyMinStocks from "../components/whyMinstock";
import FAQs from "../components/FAQs";

const Home = () => {
  return (
    <>
      <div className="h-screen relative">
        <HeroImageComp />
        <Logo />
        <div className="h-[80vh] flex flex-col items-center justify-center text-center p-8">
          <h2 className="mt-4 text-3xl md:text-5xl text-gray-100 font-bold">
            Track stock prices in real time.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Gain a critical advantage in the market by accessing live,
            continuously updated stock prices. Our platform ensures you're
            always informed, enabling swift and confident trading decisions.
          </p>
          <Link
            to="/stocks"
            className="mt-6 bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded font-semibold transition"
          >
            View Stocks
          </Link>
        </div>
      </div>
      <WhyMinStocks />
      <FAQs />
      <footer className="bg-gray-900 text-gray-300 py-6 px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MinStocks. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built by Min. Powered by open stock APIs. Designed for clarity.
        </p>
      </footer>
    </>
  );
};

export default Home;
