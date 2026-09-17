import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartContent() {
  const selector = useSelector((state) => state.cart.value);
 
  return (
    <Link
      to="/cart"
      className="text-white position-relative text-decoration-none"
    >
      {" "}
      <i className="bi bi-cart3 fs-4"></i>{" "}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {" "}
        {selector}{" "}
      </span>{" "}
    </Link>
  );
}

export default CartContent;
