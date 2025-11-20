import pancake from "../assets/pancake.jpeg"
function Pancake()
{
    return(
        <div>
            <div className="detail_card">
            <h3 style={{ color: "#9c27b0"}}>Liquid Dough Cake or Pancake</h3>
<ol>
    <li>Whisk 2 eggs, 3 tbsp sugar, 1/2 tsp salt, 2 tbsp butter, and 1/2 cup flour. Add 1 cup milk to make batter.</li>
    <li>Pour into a pan, cook 3-4 min on low, flip, cook 2 more minutes.</li>
    <li>Serve as a soft cake or crepe.</li>
    
</ol>
<img className="detail_image" src={pancake} alt="" /></div>
<iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/qE5ycgqswGY?si=DPmWfhOxOdfS85aS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

 <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div className="box1">
    <h2>Health Benifits.</h2>
    <p>Pancakes can have both health benefits and drawbacks depending on their ingredients and preparation. Whole-wheat or whole-grain pancakes are more nutritious than those made with refined white flour, providing higher fiber content which aids digestion, promotes a feeling of fullness, and supports gut health. Whole grains in pancakes are associated with a reduced risk of heart disease, obesity, and also help in preventing birth defects due to folic acid fortification. Pancakes made with milk contribute protein, calcium, and vitamin D, which support muscle, bone, and dental health.</p>
<p>However, pancakes made from refined white flour and topped with sugary syrups cause rapid spikes and drops in blood sugar, leading to energy crashes and increased hunger. Consuming these frequently may affect metabolism and mood negatively. Healthier pancake variations include using wholegrain, oat, or buckwheat flour, adding protein sources like eggs or Greek yogurt, and topping with fresh fruits and nuts instead of syrup to increase fiber and antioxidants.</p>    </div>
        </div>
    )
}
export default Pancake;