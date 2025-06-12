import {Link} from "react-router"

const Logo = () => {
  return (
    <nav>
      <h1 className="text-white p-3 font-bold text-xl w-fit">
        <Link to="/">MinStock</Link>
      </h1>
    </nav>
  );
}
export default Logo