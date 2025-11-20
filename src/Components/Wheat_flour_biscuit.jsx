import instant_biscuit from "../assets/instant_biscuit.jpeg"
function Wheat_flour_biscuit(){
    return(
        <div>
            <div className="detail_card">
        <h3 style={{ color: "#9c27b0"}}>Instant Wheat Flour Biscuits</h3>
    <ol>
    <li>Mix 1 cup wheat flour, 1 egg, 3 tbsp sugar, 1/8 tsp salt, and 2 tbsp oil.</li>
    <li>Knead to form a dough.</li>
    <li>Roll and cut shapes.</li>
    <li>Deep fry in medium hot oil until crispy.</li>
    </ol>
    <img className="detail_image" src={instant_biscuit} alt="image" />
    </div>
   
    <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/tk2hg3weD_A?si=s6b-c0OWYzzak6Cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="box1">
    <h2>Health Benifits.</h2>
    <p>Instant wheat biscuits made primarily with whole wheat flour offer several health benefits. They are a good source of complex carbohydrates and dietary fiber, which support digestive health, regulate blood sugar levels, and provide sustained energy release. Whole wheat flour contains essential minerals like iron, magnesium, phosphorus, manganese, and vitamins like B-complex which aid metabolism, red blood cell production, and bone health.</p>
<p>Such biscuits also provide some protein, contributing to muscle repair and overall body functions. Depending on preparation, they may contain moderate amounts of healthy fats from butter or oil, which support brain health and hormone production. Instant wheat biscuits are relatively low in calories per serving compared to many processed snacks, making them a healthier snack option when consumed in moderation without excessive added sugars or trans fats.</p>
<p>Overall, instant wheat biscuits made with whole grain flour are a nutritious, fiber-rich snack that helps maintain energy and digestive wellness, supports metabolic health, and provides key vitamins and minerals. Choosing recipes that avoid excessive fats or sugars maximizes their health benefits.​</p>    </div>
    </div>
    )
}
export default Wheat_flour_biscuit;