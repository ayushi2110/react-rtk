import { Link } from "react-router-dom";
import CartContent from "../../context/CartContext";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      {" "}
      <div className="container">
        {" "}
        {/* Logo */}{" "}
        <Link className="navbar-brand" to="/">
          {" "}
          MyShop{" "}
        </Link>{" "}
        {/* Navigation */}{" "}
        <div className="d-flex gap-3 mx-auto">
          {" "}
          <Link className="nav-link text-white" to="/">
            {" "}
            Home{" "}
          </Link>{" "}
          <Link className="nav-link text-white" to="/product">
            {" "}
            Product{" "}
          </Link>{" "}
        </div>{" "}
        {/* Cart */} <CartContent />{" "}
      </div>{" "}
    </nav>
  );
}

export default Header;
