const meals = document.getElementById('meals');
getRandomMeal();

async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const respData= await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true)

}

async function getMealById(id){
    const meal = await fetch( "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}

async function getMealsBySearch(term){
    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
    
}

addMeal(mealData, random=false){
    const meal = document.getElementById('div');
    meal.classList.add('meal');

    meal.innerHTML=`
        <div class="meal">
            
            <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/xusqvw1511638311.jpg" alt=""/>
        </div>
         <div class="meal-boddy">
            <h4>Veggies</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    </div>   
     `


}