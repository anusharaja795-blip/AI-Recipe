import milkshake from "../assets/milkshake.jpeg"
function Banana_milk_shake()
{
    return(
        <div>
             <div className="detail_card">
<h3 style={{ color: "#9c27b0"}}> Banana Milkshake</h3>
<ol>
    <li>
Ingredients: 2 ripe bananas, 1½ cups chilled milk, 2-4 dates or sugar, ½ tsp cinnamon or cardamom powder, vanilla extract (optional), nuts or ice cream (optional).</li>

  <li>Procedure: Freeze sliced bananas (optional). Blend all ingredients until smooth and creamy. Add more milk to adjust consistency. Serve immediately.​</li>
      </ol>
       <img className="detail_image" src={milkshake} alt="" /></div>
  <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/yc1G-JTYnso?si=7QfBP6WaXNHZOaP_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      

  <div className="box1">
    <h2>Health Benifits.</h2>
    <p>Banana milkshakes offer several health benefits due to their rich nutrient content. They are a good source of potassium, vitamins (especially B6 and C), fiber, and carbohydrates, which help replenish energy levels steadily and support muscle recovery, making them ideal for pre- or post-workout nutrition. The potassium helps regulate blood pressure, maintain healthy heart rhythm, and reduce the risk of cardiovascular diseases. Fiber aids digestion and relieves constipation, while vitamin C boosts immunity and supports skin health. Additionally, banana milkshakes can contribute to weight management as they provide a satisfying, relatively low-calorie meal or snack option. When made with milk or yogurt, they also provide protein, calcium, and probiotics beneficial for bone health and digestive flora. However, moderation is key to avoid excessive sugar and calorie intake, especially if additional sweeteners are used.​</p></div></div>
    )
}
export default Banana_milk_shake;