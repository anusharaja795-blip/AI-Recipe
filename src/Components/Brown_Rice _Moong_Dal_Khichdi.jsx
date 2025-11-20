import snack from "../assets/snack.jpeg"
function Brown_Rice_Moong_Dal_Khichdi(){
    return(
        <div>
            <div className="detail_card">
        <h3 style={{ color: "#9c27b0"}}>Baked Whole Wheat Matri (Healthy Snack)</h3>
    <ol>
    <li>Rinse ½ cup brown rice and ¼ cup moong dal (split green gram) together under running water. Soak them for 30 minutes, then drain.</li>
    <li>Heat 1 tsp ghee or oil in a pressure cooker on medium heat and add 1 tsp cumin seeds (jeera) and let them crackle.</li>
    <li></li>
    <li>Add ½ tsp asafoetida (hing), ½ tsp turmeric powder, and 3 black peppercorns. Sauté for a few seconds until fragrant.</li>
    <li>Add the soaked brown rice and moong dal to the cooker,Add 3 cups water and salt to taste. Mix everything well.</li>
    <li>Close the lid and pressure cook for 3-4 whistles on medium heat.</li>
    <li>After pressure releases naturally, open the lid and stir the khichdi.</li>
    <li>Serve hot, optionally garnished with a teaspoon of ghee and fresh coriander.</li>
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
export default  Brown_Rice_Moong_Dal_Khichdi;
