import oats_chilla from "../assets/Oats_chilla.jpeg"
function Oats_chilla(){
    return(
        <div>
            <div className="detail_card">
        <h3 style={{ color: "#9c27b0"}}>Oats and Moong Dal Chilla (Protein Pancake)</h3>
    <ol>
    <li>Blend 2 hours soaked ½ cup split yellow moong dal  moong dal and ½ cup oats oats with some water to make a smooth batter.</li>
  
    <li>Add chopped onion, green chili, coriander, salt, turmeric, and cumin powder to the batter. Mix well.</li>
    <li>Heat a non-stick pan, pour a ladle of batter, and spread it thin like a pancake.</li>
    <li>Drizzle a few drops of oil around the edges and cook on medium heat.</li>
    <li>Flip when golden brown and cook the other side.</li>
    <li>Serve hot with green chutney or yogurt.</li>
    </ol>
    <img className="detail_image" src={oats_chilla} alt="image" />
    </div>
   <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/hmts3n2MSY0?si=pHMjVQT5tW94lnET" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   
   <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="box1">
    <h2>Health Benifits.</h2>
    <h3>High in Protein</h3>
    <p>Moong dal provides a rich source of plant-based protein (about 7–9 grams per serving), which aids muscle building, boosts metabolism, and helps keep you full longer to reduce overeating.</p>

    <h3>Rich in Dietary Fiber</h3> 
    <p>Both oats and moong dal are high in fiber, promoting healthy digestion, regulating blood sugar levels, and increasing satiety, which can naturally reduce calorie intake.</p>

    <h3>Low in Calories and Fat</h3>
    <p>When cooked with minimal oil, this chilla remains low in calories and fat, making it an excellent option for a satisfying weight loss meal.</p>

    <h3>Packed with Essential Nutrients</h3>
    <p>Contains vitamins (B-complex, C, E), minerals (iron, zinc, magnesium, potassium), which help maintain energy levels, support heart health, and improve blood circulation.</p>

    <h3>Supports Gut Health and Cholesterol Management</h3>
    <p>Soluble fiber in oats helps lower LDL (bad) cholesterol and improves gut flora, contributing to heart health and better digestion.</p>

    <h3>Diabetic Friendly</h3>
    <p>The complex carbohydrates in oats and slow-digesting moong dal help maintain stable blood sugar levels, making it suitable for people with diabetes.</p>
    
    <h3>Versatile and Gluten-Free</h3>
    <p>Suitable for vegetarian, vegan, and gluten-free diets, it’s an inclusive and nutritious meal option.</p>
 </div></div>
    )
}
export default  Oats_chilla;
