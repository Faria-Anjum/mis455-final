var meal;

function connect(){
    meal = document.getElementById("mealbox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    fetch(url)
    .then (res => res.json())
    .then (data => display(data.meals));
}

function display(items){

    var oldContent = document.getElementById("row");
    oldContent.textContent =  '';

    if (items.length<5){
        for (var i=0; i<items.length; i++){
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `<img src=${items[i].strMealThumb} alt="" class="card-img-top">
                                <div class="card-body">
                                    <h3 class="card-title">${items[i].strMeal}</h5>
                                    <h5> ID: ${items[i].idMeal}</h4>
                                    <p class="card-text">${items[i].strInstructions}</p>
                                </div>
                                `;
            newDiv.classList.add("card", "col", "col-lg-4", "col-md-6", "col-12", "p-3", "mx-auto", "mb-3", "style");
            oldContent.appendChild(newDiv);
        }
    }

    else{
        for (var i=0; i<5; i++){
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `<img src=${items[i].strMealThumb} alt="" class="card-img-top">
                                <div class="card-body">
                                    <h3 class="card-title">${items[i].strMeal}</h5>
                                    <h5> ID: ${items[i].idMeal}</h4>
                                    <p class="card-text">${items[i].strInstructions}</p>
                                </div>
                                `;
            newDiv.classList.add("card", "col", "col-lg-4", "col-md-6", "col-12", "p-3", "mx-auto", "mb-3", "style");
            oldContent.appendChild(newDiv);
        }

        var button = document.createElement("div");
        button.innerHTML = `<button onclick="connect2()" class="btn btn-default btn-lg my-2 my-sm-0 mx-2 showall">Show All</button>`;
        button.classList.add("button");
        button.setAttribute("id","button");
        oldContent.appendChild(button);
    }
}

function connect2(){

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    fetch(url)
    .then (res => res.json())
    .then (data => showAll(data.meals));
}

function showAll(items){

    var oldContent = document.getElementById("row");
    var oldbutton = document.getElementById("button");
    oldbutton.remove();
    
    for (var i=5; i<items.length; i++){
        var newDiv = document.createElement("div");
        console.log(items[i]);
        newDiv.innerHTML = `<img src=${items[i].strMealThumb} alt="" class="card-img-top">
                            <div class="card-body">
                                <h3 class="card-title">${items[i].strMeal}</h5>
                                <h5> ID: ${items[i].idMeal}</h4>
                                <p class="card-text">${items[i].strInstructions}</p>
                            </div>
                            `;
        newDiv.classList.add("card", "col", "col-lg-4", "col-md-6", "col-12", "p-3", "mx-auto", "mb-3", "style");
        oldContent.appendChild(newDiv);
    }
}