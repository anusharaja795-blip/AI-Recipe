import  "./Sweet_egg_paratha.css"
import egg_paratha from "../assets/egg_paratha.jpeg"
function Sweet_egg_paratha()
{
    return(
        <div>
             <div className="detail_card">
            <h3 style={{ color: "#9c27b0"}}>Egg Paratha with Sugar</h3>
<ol>
    <li>Mix 1 cup flour with a pinch of salt and 1 tbsp sugar.</li>
    <li>Add 2 eggs and 1 cup milk to make loose batter.</li>
    <li>Pour on greased pan, spread and cook until set, then flip and cook the other side.</li>
    
</ol>
<img className="detail_image" src={egg_paratha} alt="image" /></div>

<iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/4oWm5J_hfIU?si=IwyGgglih4SmK5pH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="box1">
    <h2>Health Benifits.</h2>
    <p>Sweet egg paratha combines nutrient-rich ingredients to offer several health benefits. Eggs provide high-quality protein essential for muscle repair, brain function, and immune support. They are rich in choline, which improves memory and cognitive function, and contain vitamins such as vitamin D, A, and B-complex that support bone health, vision, and metabolism. The paratha typically uses whole wheat flour, which adds dietary fiber for improved digestion and steady energy release.</p>
<p>The sweet element often comes from natural sweeteners, which provide quick energy but should be used in moderation. Spices used may add antioxidant and anti-inflammatory properties. Sweet egg paratha is an energy-dense meal rich in protein, fiber, vitamins, and minerals, making it a satisfying and nourishing breakfast or snack option. However, it can be high in calories and fats depending on the cooking method and ingredients, so moderation and pairing with fresh fruits or yogurt can enhance its health benefits while balancing caloric intake.</p>       </div>  </div>
    )
}
export default Sweet_egg_paratha;