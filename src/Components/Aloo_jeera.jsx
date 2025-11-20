import aloo_jeera from "../assets/aloo_jeera.jpeg"
function Aloo_jeera()
{
    return(
        <div>
            <div className="detail_card">
       <h3 style={{ color: "#9c27b0"}}> Aloo Jeera (Cumin Potatoes)</h3>
<ol>
<li>Boil potatoes and cut into cubes.</li>

<li>Heat oil, add cumin seeds and let them splutter.</li>

<li>Add potatoes, salt, and chili powder.</li>

<li>Sauté for 2 minutes; serve hot. This dry, cumin-flavored potato sabzi is often eaten with phulka (roti).</li>
</ol>
<img className="detail_image" src={aloo_jeera} alt="" />
      </div>  
      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/E_NJm7-Lcdk?si=kZIYtfNXp1jzIc1-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      

  <div className="box1">
    <h2>Health Benifits.</h2>
    <p>Aloo Jeera, a simple Indian dish made from potatoes and cumin seeds, offers several health benefits. Potatoes are rich in vitamin C, potassium, vitamin B6, and dietary fiber. Vitamin C supports immune function, potassium helps heart health by regulating blood pressure, and B6 is important for brain development and metabolism. The fiber in potatoes aids digestion and promotes satiety.</p>
    <p>Cumin seeds (jeera) are known for their digestive benefits, anti-inflammatory properties, and ability to boost immunity. They are also a good source of iron and calcium, supporting blood health and bone strength. Other common spices used in Aloo Jeera such as turmeric add antioxidant and anti-inflammatory benefits. Lemon juice, when added, provides vitamin C which enhances iron absorption and immune defense.</p>
    <p>Overall, Aloo Jeera is a nutritious, flavorful dish that offers a balance of vitamins, minerals, antioxidants, and fiber. It can support digestion, heart health, immune function, and energy metabolism. However, the healthiness depends on preparation—using moderate oil and fresh ingredients maximizes benefits while minimizing excess calories and fat.</p></div></div>
    )
}
export default Aloo_jeera;