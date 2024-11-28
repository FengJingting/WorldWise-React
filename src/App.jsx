import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import CityList from "./components/CityList"
// import AppLayout from "./pages/AppLayout"
// import PageNav from "./components/PageNav"
import { useEffect, useState } from "react"
function App() {
  const [cities, setCities] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setCities(data)
        setIsLoaded(true)
      })
  },[])

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<CityList></CityList>} />
          <Route path="cities" element={<CityList></CityList>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
