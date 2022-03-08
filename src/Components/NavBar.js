import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/discover">Discovery Page</Link>{" "}
        </li>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
}
