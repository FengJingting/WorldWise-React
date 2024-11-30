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
import CountryList from "./components/CountryList"
function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const BASE_URL = "http://localhost:8000";
  useEffect(() => {
    async function fetchCities(){
      try{
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      }catch(err){
        alert(err);
      }finally{
        setIsLoading(false);
      }
    }
    fetchCities();
    },[])

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading}></CityList>} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}></CityList>} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} ></CountryList>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
