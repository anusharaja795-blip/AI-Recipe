import banana_shake from "../assets/banana_shake.jpeg"
function Chocolate_Banana_Nut_Shake(){
    return(
        <div>
            <div className="detail_card">
        <h3 style={{ color: "#9c27b0"}}> Chocolate Banana Nut Shake</h3>
    <ol>
    <li>Take 1 ripe banana, peel and cut into chunks.</li>
    <li>Add 1 scoop chocolate whey protein powder to a blender.</li>
    <li>Add 1 tablespoon peanut butter (or any nut butter) for healthy fats and calories.</li>
    <li>Pour in 1 cup whole milk or full-fat milk alternative for creaminess and extra calories.</li>
    <li>Blend everything until smooth and pour into a glass.</li>
    </ol>
    <img className="detail_image" src={banana_shake} alt="image" />
    </div>
   
   <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/wfHADzgF_P4?si=ypHcVsJobbAX9cgO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
   <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="box1">
    <h2>Health Benifits.</h2>
<ul>
    <li>High in protein to support muscle building.</li>
    <li>Healthy fats from peanut butter provide sustained energy and support hormone balance.</li>
    <li>Natural sugars from banana give quick energy boosts.</li>
    <li>Whole milk offers calcium for strong bones.</li>
</ul>
</div>
</div>
)}
export default Chocolate_Banana_Nut_Shake;