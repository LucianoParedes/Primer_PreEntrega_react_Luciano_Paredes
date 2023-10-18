import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <img src={"./logo.png"} alt="logo" width={"100px"} />
      </div>
      <div>
        <ul className="list-container">
          <li>
            <button className="category-button">Procesadores</button>
          </li>
          <li>
            <button className="category-button">Gpu</button>
          </li>
          <li>
            <button className="category-button">Fuentes</button>
          </li>
        </ul>
      </div>
      <CartWidget/>
    </div>
  );
};

export default NavBar;
