import medhu_vada from "../assets/medhu_vada.jpeg"
function Medhu_vada()
{
    return(
        <div>
            <div className="detail_card">
            <h3 style={{ color: "#9c27b0"}}>Medu Vada</h3> 
<li>Soak urad dal overnight and grind it to a smooth, thick batter.</li>

<li>Add salt, chopped green chilies, and curry leaves to batter.</li>

<li>Shape the batter into doughnut-shaped vadas and deep fry until golden brown.</li>

<li>Serve hot with sambar and coconut chutney.</li>
<img className="detail_image" src={medhu_vada} alt="image" />
</div>

      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/Zjm9fQBBHiM?si=yPzzlULAEBQumVMB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="box1">
    <h2>Health Benifits.</h2>
    <p>Medhu Vada, made primarily from urad dal (black gram), offers multiple health benefits. It is a rich source of plant-based protein, providing about 6 grams per vada, which helps with muscle maintenance and satiety. The urad dal used in medhu vada also contains essential B-vitamins that support energy metabolism and nervous system health. Its fiber content improves digestion, promotes regular bowel movements, and aids in blood sugar control.</p>
    <p>The fermentation process used in medhu vada preparation increases probiotic content, benefiting gut health and potentially improving insulin sensitivity. Urad dal supplies important minerals like iron, which supports oxygen transport and prevents anemia, as well as calcium, magnesium, and potassium that contribute to bone strength and cardiovascular health. Folate in urad dal is vital for cell growth and fetal development during pregnancy.</p>
    <p>However, because medhu vada is traditionally deep-fried, it is higher in fat and calories, so moderation is recommended. Healthier preparation methods like air-frying can reduce calorie intake while retaining nutritional benefits. When paired with sambar (lentil soup), medhu vada becomes a more complete and balanced meal rich in protein and nutrients. Overall, medhu vada can be a nutritious, protein-packed snack when consumed mindfully as part of a balanced diet.</p>
     </div>   </div>
    )
}
export default Medhu_vada;