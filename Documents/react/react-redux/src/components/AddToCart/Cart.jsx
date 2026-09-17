const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 2999,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 999,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 100;

  const total = subtotal + shipping;

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Shopping Cart</h2>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  {/* Image */}
                  <div className="col-3 col-md-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </div>

                  {/* Product */}
                  <div className="col-5 col-md-4">
                    <h5>{item.name}</h5>
                    <p className="text-muted mb-0">₹{item.price}</p>
                  </div>

                  {/* Quantity */}
                  <div className="col-2">
                    <span>Qty: {item.quantity}</span>
                  </div>

                  {/* Total */}
                  <div className="col-2">
                    <strong>₹{item.price * item.quantity}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>₹{total}</strong>
              </div>

              <button className="btn btn-primary w-100">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
