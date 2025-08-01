import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Carousel1 from "./components/Carousel"
import BasicExample from "./components/basicExample"
import Float from "./components/Float"
import ProductDetail from "./pages/productDetail"
import Login from "./components/Login"
import Membership from "./components/Membership"
import RealEstateMap from "./components/RealEstateMap"
import RealEstateDetail from "./components/RealEstateDetail"
import ChatComponent from "./components/ChatComponent"
import Exposure from "./components/Exposure"
import Recommendation from "./components/Recommendation"

function App() {
  const location = useLocation();

  console.log(location)

  return (
    <>
    <Header />
    
    {
      ['/Login','/Membership'].includes(location.pathname) ?
      null
      :
      (
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Carousel1 />
           <Exposure />
          <ChatComponent/>
         </div>
         
      ) 
    }
    <Routes>
      <Route path='/' element={<BasicExample/>}/>
      <Route path='/product/:id' element={<ProductDetail />}/>
      <Route path= '/Login' element= {<Login />}/>
      <Route path= '/Membership' element={<Membership/>}/>
      <Route path="/RealEstateMap" element={<RealEstateMap/>}/>
      <Route path="/" element={<RealEstateMap />} />
      <Route path="/detail/:apartmentName" element={<RealEstateDetail />} />
      <Route path="/Recommendation/:id" element={<Recommendation/>}/>
      
    </Routes>
    
    <Float/>
    
    </>
  )
}

export default App
