import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <NavLink className="navItem" font-weight="bold" to="/">
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" to="/discover">
            Discovery Page
          </NavLink>{" "}
        </li>
        <NavLink className="navItem" to="/about">
          About
        </NavLink>
      </ul>
    </div>
  );
}
