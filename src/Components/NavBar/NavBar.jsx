import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img src={"./logo.png"} alt="logo" width={"100px"} />
      </div>
      <div>
        <ul className="list-container">
          <li>
            <Link to={'/category/electronics'} className="navbar-button">Electronica</Link>
          </li>
          <li>
          <Link to={'/category/jewelery'} className="navbar-button">Joyeria</Link>
          </li>
          <li>
          <Link to={"/category/men's-clothing"} className="navbar-button">Ropa de hombre</Link>
          </li>
          <li>
          <Link to={"/category/women's-clothing"} className="navbar-button">Ropa de mujer</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
