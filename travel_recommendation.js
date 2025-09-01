// fetch('./travel_recommendation_api.json')
//     .then (res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Did not work lil bro'));
async function fetchData() {

    try {
        const response = await fetch('./travel_recommendation_api.json');
        if(!response.ok) {
            throw new Error("Could not fetch resources lil bro");
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error);
    }
}

document.getElementById("search").addEventListener("click", async () => {
    const data = await fetchData();

    const query = document.getElementById("query").value.toLowerCase();
    
    const searchResults = document.querySelector(".searchResults");
    
    
    if(query === "beach") {
        const beachesArray = data.beaches;

        for(let i=0; i<beachesArray.length; i++) {
            const infoPop = document.createElement("div");
            infoPop.classList.add("infoPop");
            searchResults.appendChild(infoPop);

            const img = document.createElement("img");
            img.src = beachesArray[i].imageUrl;

            const name = document.createElement("h3");
            name.textContent = beachesArray[i].name;

            const desc = document.createElement("p");
            desc.textContent = beachesArray[i].description;

            const but = document.createElement("button");
            but.textContent = "Visit";

            infoPop.appendChild(img);
            infoPop.appendChild(name);
            infoPop.appendChild(desc);
            infoPop.appendChild(but);
        }

    } else if(query === "temple") {
        const templesArray = data.temples;

        for(let i=0; i<templesArray.length; i++) {
            const infoPop = document.createElement("div");
            infoPop.classList.add("infoPop");
            searchResults.appendChild(infoPop);

            const img = document.createElement("img");
            img.src = templesArray[i].imageUrl;

            const name = document.createElement("h3");
            name.textContent = templesArray[i].name;

            const desc = document.createElement("p");
            desc.textContent = templesArray[i].description;

            const but = document.createElement("button");
            but.textContent = "Visit";

            infoPop.appendChild(img);
            infoPop.appendChild(name);
            infoPop.appendChild(desc);
            infoPop.appendChild(but);
        }
    } else if(query === "country") {
        const countryArray = data.countries;

        for(let i=0; i<countryArray.length; i++) {
            citiesArray = countryArray[i].cities;

            for(let j=0; j<citiesArray.length; j++) {
                const infoPop = document.createElement("div");
                infoPop.classList.add("infoPop");
                searchResults.appendChild(infoPop);

                const img = document.createElement("img");
                img.src = citiesArray[j].imageUrl;

                const name = document.createElement("h3");
                name.textContent = citiesArray[j].name;

                const desc = document.createElement("p");
                desc.textContent = citiesArray[j].description;

                const but = document.createElement("button");
                but.textContent = "Visit";

                infoPop.appendChild(img);
                infoPop.appendChild(name);
                infoPop.appendChild(desc);
                infoPop.appendChild(but);
            }
        }
    } else {
        alert("No Match Found");
    }
})

document.getElementById("clear").addEventListener("click", () => {
    document.querySelector(".searchResults").innerHTML = "";
})