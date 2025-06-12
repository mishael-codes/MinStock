import { Link } from "react-router";
import Logo from "../components/logo";
import HeroImageComp from "../components/HeroImage";

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
            className="mt-6 bg-lime-600 text-white px-4 py-2 rounded"
          >
            View Stocks
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;