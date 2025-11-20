import snack from "../assets/snack.jpeg"
function Snack(){
    return(
        <div>
            <div className="detail_card">
        <h3 style={{ color: "#9c27b0"}}>Baked Whole Wheat Matri (Healthy Snack)</h3>
    <ol>
    <li>In a mixing bowl, take 1 cup whole wheat flour, ½ tsp salt, ¼ tsp chili powder, and ¼ tsp ajwain (carom seeds). Mix everything well.</li>
    <li>Add 2 tbsp olive oil to the flour mixture. Rub it in with your fingertips until the mixture looks like coarse crumbs.</li>
    <li>Preheat your oven to 180°C (350°F).</li>
    <li>Divide the dough into small balls. Roll each ball into a thin square on a floured surface.</li>
    <li>Place the square on a baking tray lined with parchment paper and Bake for 15–20 minutes, flipping the matris halfway through until golden and crispy.</li>
    {/* <li></li> */}
    {/* <li>Cool completely before storing in an airtight container.</li> */}
    </ol>
    <img className="detail_image" src={snack} alt="image" />
    </div>
  
   <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/bnNHlCd0-CA?si=QplWaGHLdqPpEfFq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="box1">
    <h2>Health Benifits.</h2>
    <h3>Whole Wheat Flour</h3>
    <p>High in dietary fiber that promotes digestive health, controls blood sugar levels, and increases satiety for weight management.</p>

    <h3>Olive Oil</h3> 
    <p>Contains healthy fats (monounsaturated fats) that support heart health and reduce inflammation.</p>

    <h3>Ajwain (Carom Seeds)</h3>
    <p>Aids in digestion and reduces bloating.</p>

    <h3>Low-Calorie Baking</h3>
    <p> Baking instead of frying reduces calorie and fat intake, supporting weight loss goals.</p>

    <h3>Spices</h3>
    <p>Chili powder adds antioxidants and boosts metabolism.</p>

 </div></div>
    )
}
export default  Snack;
