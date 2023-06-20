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
          <Link to="/class">CharactersClass</Link>
        </li>
        <li>
          <Link to="/functional">CharactersHooks</Link>
        </li>
        <li>
          <Link to="/forms-hooks">FormsHooks</Link>
        </li>
        <li>
          <Link to="/forms-class">FormClass</Link>
        </li>
      </ul>
    </header>
  );
};
