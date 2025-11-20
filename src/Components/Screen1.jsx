import "./Screen1.css" 
import food1 from "../assets/food1.jpeg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpeg"
import food4 from "../assets/food4.jpg"
import food5 from "../assets/food5.png"
import food6 from "../assets/food6.jpg"
import meal_planner from "../assets/meal_planner.png"
import weight_gain2  from "../assets/weight_gain2.jpg"
import meal_planner1 from "../assets/meal_planner1.jpg"
import muscle_gain from "../assets/muscle_gain.jpg"
import weight_meal from "../assets/weight_meal.jpg"
import  "./explore.css"

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
             <li> <Link to="/Paneer_burji_gravy">Paneer Gravy</Link></li>
            <li><Link to="/Wheat_flour_biscuit">Instant Sweet Flour Biscuits</Link></li>
            <li><Link to="/jerk_chicken">Jerk Chicken</Link></li>
            <li><Link to="/Sweet_egg_paratha">Egg Paratha with Sugar</Link></li>
            <li><Link to="/Aloo_jeera">Aloo Jeera</Link></li>
            <li><Link to="/Dal_vada">Dal Vada</Link></li>
            </div>  </li>   
        
        <li><Link className="explore" to="/Explore">Explore</Link></li>
       
         <li className="recipes">Weight Loss Recipes
         <div className="dropdown">
          <li> <Link to="/Oats_chilla">Oats and Moong Dal Chilla </Link></li>
            <li><Link to="/Snack">Baked Whole Wheat Matri </Link></li>
            <li><Link to="/Brown_Rice_Moong_Dal_Khichdi">Baked Whole Wheat Matri </Link></li>
            
            </div>  </li>   
        <li></li>
        <li>Weight Gain Recipes</li>

    </ul>
</div>
          
          <h1 style={{color:"orange"}}>“Creating moments with every dish.”</h1>
        <div className="align_ingredients"> 
         <label style={{fontSize:"large"}}>Enter your ingredients</label>
         
         <input type="text"/>
         
         <button className="button">SUBMIT</button>
         </div>
        
        <h2>Welcome to Our Delicious Recipe World!</h2>
        <p>Discover a delightful collection of carefully curated recipes from around the globe. Whether you are a seasoned cook or just starting, our easy-to-follow recipes bring flavors directly to your kitchen. From comforting traditional dishes to vibrant international cuisine, your next meal inspiration is just a click away.</p>
        
        <h2>Fresh Ingredients, Authentic Flavors</h2>
        <p>We believe great food starts with fresh, quality ingredients. Our recipes focus on wholesome ingredients that are easy to find yet pack incredible taste and nutritional value. From fragrant spices in Indian curries to fresh herbs and vegetables in Mediterranean dishes, experience authentic flavors that excite your palate with every bite.</p>
        
        <h2>Eat Well, Live Well</h2>
        <p>Food is not just fuel; it’s a celebration of life. Enjoy recipes that balance taste and nutrition, including weight-friendly meals, hearty comfort foods, and indulgent treats. Dive into dishes that nourish both body and soul, complete with detailed nutritional information to help you make healthy choices.</p>
       <br />

       <div className="box">
       <h2>Discover the Power of Nutritious Foods</h2>
       <p>Eating the right foods can have a profound impact on your health and well-being. Each ingredient carries unique benefits that contribute to a balanced diet and vibrant lifestyle. From boosting immunity to enhancing digestion, the foods you choose fuel more than just your body—they support your mind, energy, and overall vitality.</p>
        <p>Explore our selection of nutrient-rich foods with scientifically backed benefits. Whether it's improving heart health, promoting glowing skin, aiding weight management, or providing essential vitamins and minerals, these foods are natural powerhouses that help you feel your best every day.</p>
       
        <div className="cards">
         <div className="card">
            <img src={food1} alt="image" className="food_Image" />
            <h3 className="heading">Prawns</h3>
            <p>Prawns offer health benefits by providing lean protein for muscle repair, omega-3 fatty acids for heart health, and antioxidants like astaxanthin to protect cells. They are also rich in essential vitamins and minerals, including vitamin B12 for brain function, zinc and selenium for immune support, and phosphorus and calcium for bone health.   </p>
         </div>

         <div className="card">
            <img src={food2} alt="image" className="food_Image" />
            <h3 className="heading">Salad</h3>
            <p>Salads offer benefits for weight management, digestion, heart health, and skin health due to their high fiber, vitamin, and antioxidant content. Fiber in salads promotes healthy bowel movements, helps regulate blood sugar, and lowers bad cholesterol, while vitamins and antioxidants boost the immune system and contribute to radiant skin.</p>
         </div>

         <div className="card">
            <img src={food3} alt="image" className="food_Image" />
            <h3 className="heading">Peanut Butter Banana Smoothie</h3>
            <p>A peanut butter banana smoothie is a nutritious and satisfying drink that offers several health benefits from its key ingredients. It is a great source of protein, healthy fats, and fiber, making it an excellent option for sustained energy, heart health, and weight management. </p>
         </div>
          <div className="card">
            <img src={food4} alt="image" className="food_Image" />
            <h3 className="heading">Avocado Toast</h3>
            <p>Avocado toast is beneficial due to the heart-healthy monounsaturated fats, fiber, vitamins, and antioxidants in avocados, which improve heart and digestive health, promote satiety for weight management, and protect against chronic diseases. The whole grain toast adds fiber and complex carbohydrates for sustained energy and further digestive support.  </p>
         </div>

         <div className="card">
            <img src={food5} alt="image" className="food_Image" />
            <h3 className="heading">Fish</h3>
            <p>Fish provides essential protein, omega-3 fatty acids, and nutrients like Vitamin D, B12, and iodine, which support brain health, heart health, and overall body functions. Regular fish consumption can lower the risk of heart disease, improve cognitive decline in older adults, support healthy growth in children, and reduce inflammation. </p>
         </div>

         <div className="card">
            <img src={food6} alt="image" className="food_Image" />
            <h3 className="heading">Chana</h3>
            <p>Chana (chickpeas) provides significant benefits, including improved heart health, better blood sugar control, enhanced digestive health due to high fiber, and support for weight management from its protein and fiber content. It also boosts bone strength with minerals like calcium, supports the immune system with zinc, improves skin and hair health.
</p>
         </div>
         </div>
        </div>
<br />
 <div className="row">  
    <div className="column">
        <h2>Interactive Meal Planner:</h2>
        <p >Our Interactive Meal Planner is designed to simplify your daily cooking and nutrition management. It allows you to effortlessly plan balanced meals tailored to your dietary preferences, health goals, and ingredient availability. With an intuitive interface, you can customize meal choices by cuisine, caloric intake, and nutritional content, helping you achieve healthier eating habits without stress.</p>
        <p >Key features include dynamic recipe suggestions, real-time nutritional information, and flexible scheduling to fit your lifestyle. Whether you’re managing weight, seeking variety, or accommodating dietary restrictions, the Meal Planner empowers you to make informed, delicious meal decisions every day.</p>
        <p >Start planning smarter, eat better, and enjoy cooking again with our Interactive Meal Planner.</p>
        </div>
        
<img className="meal_planner1" src={meal_planner} alt="image" />
 </div>



<div className="row row-reverse">
   <div className="column">
<h2 >Weight Loss Meal Planner:</h2>
<p >Achieve your weight loss goals with our specialized Weight Loss Meal Planner. This tool offers personalized meal plans designed to support healthy and sustainable weight reduction by balancing calories, macronutrients, and essential vitamins. It takes into account your dietary preferences, restrictions, and activity level to create delicious, satisfying meals that keep you energized and motivated.</p>
<p >With easy-to-follow recipes, portion control guidance, and real-time nutritional tracking, our planner helps you stay on track without compromising taste or variety. Whether you're just starting or aiming to maintain your ideal weight, this planner is your practical partner for a healthier lifestyle.</p>
<p >Start your journey toward effective weight management today with customized meal plans tailored just for you.

</p>
</div>
        <img className="meal_planner2" src={meal_planner1} alt="" srcset="" />
        </div>

        <div className="row">
         <div className="column">
        <h2 >Weight Gain Meal Planner:</h2>
            <p>Designed to help you build healthy muscle and increase your mass effectively, our Weight Gain Meal Planner provides personalized meal plans packed with nutrient-dense, calorie-rich foods. It balances the right mix of proteins, carbohydrates, and healthy fats to support muscle growth and overall wellness, tailored to your lifestyle and dietary preferences.</p>
        <p >With easy-to-follow recipes, portion recommendations, and real-time nutritional insights, this planner helps you gain weight safely and sustainably—focusing on quality nutrition rather than empty calories. Whether you’re aiming to bulk up or recover from weight loss, our planner offers structured guidance to fuel your progress.</p>
        <p >Start gaining weight the smart way with customized nutrition plans designed specifically for your goals.</p>
        </div><img className="meal_planner3" src={weight_meal} alt="image" />
        <br /></div>

          <div className="row row-reverse">
             <div className="column">
        <h2 > Meal Planner To Gain Muscle:</h2>
        <p >Maximize your muscle growth with our Muscle Gain Meal Planner, expertly crafted to fuel your workouts and recovery. This planner provides customized meal plans rich in high-quality proteins, complex carbohydrates, and healthy fats essential for muscle repair and strength development.</p>
        <p >Designed to meet your unique fitness goals and dietary preferences, the planner offers balanced nutrition with the right calorie surplus to support lean muscle gain without unwanted fat. With easy recipes, portion control, and nutrient tracking, it keeps you motivated and on track toward a stronger, healthier physique.</p>  
        <p >Elevate your muscle-building journey with personalized meals tailored to power up your gains and optimize performance.</p>  
        </div><img className="meal_planner4" src={muscle_gain} alt="image" />
      </div>

         <div className="row">
           <div className="column">
        <h2 >7 Day Meal Planner:</h2>
        <p>Simplify your weekly meal preparation with our 7 Day Meal Planner, designed to provide balanced, nutritious meals for every day of the week. Whether you’re aiming for weight management, muscle gain, or healthy eating, this planner offers a structured, easy-to-follow approach to keep your diet on track.</p>
        <p >Featuring diverse recipes tailored to your dietary preferences and goals, the planner helps you save time, reduce stress, and avoid last-minute food decisions. With clear shopping lists and portion guidance, it’s the perfect tool to plan ahead and maintain consistency in your nutrition routine.</p>
        <p >Start your week with confidence and enjoy wholesome meals planned just for you.</p>
        </div> <img className="meal_planner5" src={weight_gain2} alt="image" />
        </div>


                        
                           
                           <p>Copyright &copy; AI Recipe</p>
                           <p style={{color:"blue"}}>Contact:anusharaja795@gmail.com</p>
                              
                           
         {/* <ul className="container">
            <li>Oil Less Food</li>
            <li>Diabetic Foods</li>
            <li><Link to="/Kids">Kids Foods</Link></li>
            <li className="adult">Adult Snack Craving
               <div className="Dropdown1">
                  <li>
                   <Link to="/Medhu_vada">Medhu_vada</Link>
                  </li> */}
       
        </div>
    )
}
export default Screen1