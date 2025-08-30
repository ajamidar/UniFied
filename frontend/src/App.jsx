import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import NavBar from "./components/NavBar"
import UniHome from "./pages/UniHome"
import Footer from "./components/Footer"
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <NavBar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:selectedUni" element={<UniHome />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:selectedUni/product/:productId" element={<Product />} />
          <Route path="/:selectedUni/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <div className=""><Footer /></div>
      </div>
    </>

  )
}

export default App
