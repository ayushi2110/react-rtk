import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { addIteam } from "../redux/slice";
import Rating from "../components/Rating";

const ProductInfo = () => {
  const dispatch = useDispatch();

  // Get products from Redux
  const productSelector = useSelector((state) => state.products.items);

  // Fetch products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container py-5 mt-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Products</h2>
        <p className="text-muted">Discover our latest products</p>
      </div>

      {/* Product List */}
      <div className="row g-4">
        {productSelector.length > 0 &&
          productSelector.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 "
              key={product.id}
            >
              <div className="card h-100 border-0 shadow-sm mb-5">
                {/* Product Image */}
                <div
                  className="position-relative bg-light"
                  style={{ height: "250px" }}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-100 h-100 p-3"
                    style={{ objectFit: "contain" }}
                  />

                  {/* Discount Badge */}
                  <span className="position-absolute top-0 start-0 m-2 badge bg-danger">
                    -{product.discountPercentage}%
                  </span>

                  {/* Stock Badge */}
                  <span className="position-absolute top-0 end-0 m-2 badge bg-success">
                    {product.availabilityStatus}
                  </span>
                </div>

                {/* Product Information */}
                <div className="card-body d-flex flex-column">
                  {/* Category */}
                  <small className="text-muted text-uppercase">
                    {product.category}
                  </small>

                  {/* Title */}
                  <h5 className="card-title mt-2">{product.title}</h5>

                  {/* Brand */}
                  <p className="mb-2 text-secondary">
                    Brand: <strong>{product.brand}</strong>
                  </p>

                  {/* Rating */}
                  <Rating rating={product.rating} />

                  {/* Price */}
                  <h4 className="fw-bold text-primary">${product.price}</h4>

                  {/* Stock */}
                  <small className="text-muted mb-3">
                    {product.stock} items available
                  </small>

                  {/* Add To Cart */}
                  <button
                    className="btn btn-dark w-100 mt-auto"
                    onClick={() => dispatch(addIteam(product))}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductInfo;
