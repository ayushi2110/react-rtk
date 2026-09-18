import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
