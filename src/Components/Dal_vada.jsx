import dal_vada from "../assets/dal_vada.jpeg"
function Dal_vada()
{
    return(
        <div>
             <div className="detail_card">
           <h3 style={{ color: "#9c27b0"}}>Dal Vada (Masala Vada)</h3>
           <ol>
<li>Soak chana dal (split chickpeas) for 2-3 hours and drain.</li>

<li>Grind coarsely with green chilies, ginger, coriander leaves, and salt, keeping some dal whole.</li>

<li>Heat oil in a deep pan.</li>

<li>Shape the mixture into small patties and deep fry until crispy and golden.</li>

<li>Serve hot with coconut chutney or sambar. These crunchy fritters are a great tea-time snack.</li>​</ol>
<img className="detail_image" src={dal_vada} alt="image" /></div>
<iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/NBsGrJ3ViiI?si=qmAgsDSu4arz23bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
<div className="box1">
    <h2>Health Benifits.</h2>
    <p>Dal vada, traditionally made from urad dal (black gram), offers several health benefits despite being a deep-fried snack. Urad dal is rich in plant-based protein, providing about 6g per vada, which supports muscle maintenance and satiety. It also contains B-vitamins essential for energy metabolism, iron for blood health, and dietary fiber that aids digestion and helps regulate blood sugar levels. The fermentation process used in dal vada preparation increases probiotic content, promoting a healthy gut microbiome.</p>
    <p>Additionally, urad dal delivers minerals such as calcium, magnesium, and potassium, which support bone strength and heart health by helping manage blood pressure and cholesterol levels. Folate content in dal vada is beneficial for cell growth and fetal development during pregnancy. However, because dal vada is deep-fried, it is calorie-dense and higher in fat, so moderation is advised. For healthier options, air-frying or pairing dal vada with nutrient-rich chutneys and sambar can enhance its nutritional profile. Overall, dal vada can be a nutritious addition to the diet when consumed mindfully, balancing protein, fiber, and essential nutrients with its caloric content.​</p></div>
        </div>
    )
}
export default Dal_vada;