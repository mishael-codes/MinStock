import { Link } from "react-router";
import HeroImage from "../assets/images/hero-img.webp";

const Home = () => {
  return (
    <>
      <div className="h-screen relative">
        <img
          src={HeroImage}
          alt="A trading chart"
          className="bg-cover min-h-screen min-w-screen absolute -z-1"
        />
        <nav>
          <h1 className="text-white p-3 font-bold text-xl">MinStock</h1>
        </nav>
        <div className="h-[80vh] flex flex-col items-center justify-center text-center p-8">
          <h2 className="mt-4 text-5xl text-gray-300 font-bold">
            Track stock prices in real time.
          </h2>
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