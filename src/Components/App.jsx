import { Routes, Route, BrowserRouter } from "react-router-dom";
import Screen1 from "./Screen1.jsx"
import Screen2 from "./Screen2.jsx"
import Screen3 from "./Screen3.jsx"
import Screen4 from "./Screen4.jsx"
import Explore from "./explore.jsx";
import Pancake from "./Pancake.jsx";
import Sweet_egg_paratha from "./Sweet_egg_paratha.jsx";
import Wheat_flour_biscuit from "./Wheat_flour_biscuit.jsx";
import Paneer_burji_gravy from "./Paneer_burji_gravy.jsx";
import Banana_milk_shake from "./Banana_milk_shake.jsx";
import Dal_vada from "./Dal_vada.jsx";
import Medhu_vada from "./Medhu_vada.jsx";
import Aloo_jeera from "./Aloo_jeera.jsx";
import Jerk_chicken from "./Jerk_chicken.jsx";
import Kids from "./Kids.jsx"
import Onion_pakoda from "./Onion_pakoda.jsx";
function App()
{
  return(
    <>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Screen1/>}/>
   <Route path="/Screen2" element={<Screen2/>}/>
     <Route path="/Screen3" element={<Screen3/>}/>
       <Route path="/Screen4" element={<Screen4/>}/>
       <Route path="/Explore" element={<Explore/>}/>
       <Route path="/Pancake" element={<Pancake/>}/>
          <Route path="/Sweet_egg_paratha" element={<Sweet_egg_paratha/>}/>
             <Route path="/Paneer_burji_gravy" element={<Paneer_burji_gravy/>}/>
              <Route path="/Banana_milk_shake" element={<Banana_milk_shake/>}/>
               <Route path="/Dal_vada" element={<Dal_vada/>}/>
                <Route path="/Medhu_vada" element={<Medhu_vada/>}/>
                 <Route path="/Aloo_jeera" element={<Aloo_jeera/>}/>
                   <Route path="/Jerk_chicken" element={<Jerk_chicken/>}/>
                          <Route path="/Onion_pakoda" element={<Onion_pakoda/>}/>
                          <Route path="/Wheat_flour_biscuit" element={<Wheat_flour_biscuit/>}/>
                          <Route path="/Kids" element={<Kids/>}/>
                 
   </Routes>
   </BrowserRouter>
  {/* //  <Screen1/>
  //  <Screen2/>
  //  <Screen3/>
  //  <Screen4/> */}
    </>
  )};
  export default App
