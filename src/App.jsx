import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import Checkout from "./pages/Checkout/Checkout";
import ProductPage from "./pages/Product/ProductPage";
import Notices from './pages/Notices/Notices'
import { ShopContextProvider } from "./context/shop-context";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router basename='/y2k'>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/*" element={<Error />} />
            <Route path="/product/:ref" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/notices" element={<Notices />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
