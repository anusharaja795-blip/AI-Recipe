import "./Screen1.css" 
import food1 from "../assets/food1.jpeg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpeg"
import food4 from "../assets/food4.jpg"
import food5 from "../assets/food5.png"
import food6 from "../assets/food6.jpg"



import { Link } from "react-router-dom";

function Screen1()
{
    return(
      <div>
        <div className="container">
    


    <ul>
      <li>Logo</li>
       <li className="recipes">Recipes
         <div className="dropdown">
            
            
            <li> <Link to="/Paneer_burji_gravy">
Paneer Gravy
</Link>


            </li>
            <li><Link to="/Wheat_flour_biscuit">

Instant Sweet Flour Biscuits</Link></li>
            <li><Link to="/jerk_chicken">Jerk Chicken</Link></li>
            <li><Link to="/Sweet_egg_paratha">Egg Paratha with Sugar</Link></li>
            <li><Link to="/Aloo_jeera">Aloo Jeera</Link></li>
            <li><Link to="/Dal_vada">Dal Vada</Link></li>
            </div>  </li>  
        <li><Link to="/Explore">Explore</Link></li>
        <li>Weight Loss Recipes</li>
        <li>Weight Gain Recipes</li>

    </ul>
</div>
          
          <h1 style={{color:"orange"}}>“Creating moments with every dish.”</h1>
        <div className="align_ingredients"> 
         <label style={{fontSize:"large"}}>Enter your ingredients</label>
         
         <input type="text"/>
         
         <button className="button">SUBMIT</button>
         </div>
        
        <div className="cards">
         <div className="card">
            <img src={food1} alt="image" className="food_Image" />
            <p>Prawns offer health benefits by providing lean protein for muscle repair, omega-3 fatty acids for heart health, and antioxidants like astaxanthin to protect cells. They are also rich in essential vitamins and minerals, including vitamin B12 for brain function, zinc and selenium for immune support, and phosphorus and calcium for bone health. Their low-calorie and low-carb profile makes them suitable for weight management.  </p>
         </div>

         <div className="card">
            <img src={food2} alt="image" className="food_Image" />
            <p>Salads offer benefits for weight management, digestion, heart health, and skin health due to their high fiber, vitamin, and antioxidant content. Fiber in salads promotes healthy bowel movements, helps regulate blood sugar, and lowers bad cholesterol, while vitamins and antioxidants boost the immune system and contribute to radiant skin. Additionally, salads boost hydration.</p>
         </div>

         <div className="card">
            <img src={food3} alt="image" className="food_Image" />
            <p>A peanut butter banana smoothie is a nutritious and satisfying drink that offers several health benefits from its key ingredients. It is a great source of protein, healthy fats, and fiber, making it an excellent option for sustained energy, heart health, and weight management. </p>
         </div>
          <div className="card">
            <img src={food4} alt="image" className="food_Image" />
            <p>Avocado toast is beneficial due to the heart-healthy monounsaturated fats, fiber, vitamins, and antioxidants in avocados, which improve heart and digestive health, promote satiety for weight management, and protect against chronic diseases. The whole grain toast adds fiber and complex carbohydrates for sustained energy and further digestive support.  </p>
         </div>

         <div className="card">
            <img src={food5} alt="image" className="food_Image" />
            <p>Fish provides essential protein, omega-3 fatty acids, and nutrients like Vitamin D, B12, and iodine, which support brain health, heart health, and overall body functions. Regular fish consumption can lower the risk of heart disease, improve cognitive decline in older adults, support healthy growth in children, and reduce inflammation. </p>
         </div>

         <div className="card">
            <img src={food6} alt="image" className="food_Image" />
            <p>Chana (chickpeas) provides significant benefits, including improved heart health, better blood sugar control, enhanced digestive health due to high fiber, and support for weight management from its protein and fiber content. It also boosts bone strength with minerals like calcium, supports the immune system with zinc, improves skin and hair health due to antioxidants and nutrients.
</p>
         </div>
         </div>

         <ul className="container">
            <li>Oil Less Food</li>
            <li>Diabetic Foods</li>
            <li><Link to="/Kids">Kids Foods</Link></li>
            <li className="adult">Adult Snack Craving
               <div className="Dropdown1">
                  <li>
                   <Link to="/Medhu_vada">Medhu_vada</Link>
                  </li>
               </div>
            </li>
         </ul>
        </div>
    )
}
export default Screen1