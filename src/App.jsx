import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Price from "./pages/Price"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"
// import AppLayout from "./pages/AppLayout"
// import PageNav from "./components/PageNav"
function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="price" element={<Price />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
