function Home() {
  return (
    <div className="container py-5 mt-5">
      <h1>Welcome to MyShop</h1>

      <p className="text-muted">Your simple e-commerce website</p>

      <a href="/product" className="btn btn-primary">
        View Product
      </a>
    </div>
  );
}

export default Home;
