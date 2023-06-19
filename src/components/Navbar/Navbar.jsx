import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} />
      </Link>
      <ul>
        <li>
          <Link to="/styles">Styles</Link>
        </li>
        <li>
          <Link to="/class">ClassComponents</Link>
        </li>
        <li>
          <Link to="/functional">Hooks</Link>
        </li>
      </ul>
    </header>
  );
};
