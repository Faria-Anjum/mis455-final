function connect(){
    var meal = document.getElementById("mealbox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    fetch(url)
    .then (res => res.json())
    .then (data => display(data.meals));
}

function display(items){

    var oldContent = document.getElementById("row");
    oldContent.textContent =  '';

    for (var i=0; i<items.length; i++){
        var newDiv = document.createElement("div");
        console.log(items[i]);
        newDiv.innerHTML = `ID: ${items[i].idMeal}`;
    }

    newDiv.classList.add("style");
    oldContent.appendChild(newDiv);
}