"use strict"
// let flags_wrapper=document.querySelector(".flags-wrapper")
let flags_wrapper=(".flags-wrapper")

function getData(){
    let url = "https://restcountries.com/v2/all";
    return fetch(url).then(response=>response.json()).catch(err=>"No data found").finally(console.log("done"))
}

function renderFlags(data){
    if(data.length > 0){
        data.forEach(el => {
            let flag_card = createElement("div", "card");
            flag_card.innerHTML = `
                <img src="${el.flag}" alt="${el.name}">
                <div class="card-body">
                    <h4>${el.name}</h4>
                    <ul>
                    <li><strong>Population: </strong>${el.population}</li>
                    <li><strong>Region: </strong>${el.region}</li>
                    <li><strong>Capital: </strong>${el.capital}</li>
                    </ul>
                </div>
            `
    
            flags_wrapper.appendChild(flag_card);
        });
    }else{
            flags_wrapper.innerHTML = "NOT FOUND";
    }

}

