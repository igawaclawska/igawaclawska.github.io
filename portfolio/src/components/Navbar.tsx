import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Iga Waclawska</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/iga-waclawska/"
          >
            Let's connect
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
