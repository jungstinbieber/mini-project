import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Carousel1 from "./components/Carousel"
import BasicExample from "./components/basicExample"
import Float from "./components/Float"
import ProductDtail from "./pages/productDetail"
import Login from "./components/Login"
import Membership from "./components/Membership"
import RealEstateMap from "./components/RealEstateMap"

function App() {
  const location = useLocation();

  console.log(location)

  return (
    <>
    <Header />
    {
      location.pathname !== '/Login' ?
      <Carousel1 />
      : null
    }
    <Routes>
      <Route path='/' element={<BasicExample/>}/>
      <Route path='/product/:id' element={<ProductDtail />}/>
      <Route path= '/Login' element= {<Login />}/>
      <Route path= '/Membership' element={<Membership/>}/>
      <Route path="/RealEstateMap" element={<RealEstateMap/>}/>
    </Routes>
    
    <Float/>
    </>
  )
}

export default App
