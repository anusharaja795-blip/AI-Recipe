import paneer_fry from "../assets/paneer_fry.jpeg"
function Paneer_fry(){
    return(
        <div>
            <div className="detail_card">
        <h3 style={{ color: "#9c27b0"}}> Paneer and Vegetable Stir-fry</h3>
    <ol>
   <li>Cube 200g paneer (cottage cheese) which is rich in protein and fats.</li>
   <li>Heat 1 tbsp olive oil in a pan, add chopped green bell peppers, onions, and tomatoes, sauté for 3-4 minutes.</li>
   <li>Add paneer cubes, ½ tsp salt, ¼ tsp turmeric, and ½ tsp garam masala.</li>
   <li>Cook till paneer turns golden and veggies are tender-crisp.</li>
   <li>Garnish with fresh coriander and serve hot.</li>
   </ol>
    <img className="detail_image" src={paneer_fry} alt="image" />
    </div>
  <iframe className="video"  width="560" height="315" src="https://www.youtube.com/embed/gBlBuj_rBuw?si=MYqf_XZr6hIRCspJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   
  <div className="box1">
    <h2>Health Benifits.</h2>
   <ol><li>
    Paneer provides high-quality protein and healthy fats for weight gain.</li>
    <li>Vegetables provide fiber, vitamins, and antioxidants.</li>
    <li>Olive oil delivers heart-healthy fats.</li></ol>
 </div></div>
    )
}
export default  Paneer_fry;
