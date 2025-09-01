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

        for(let i=0; i<beachesArray; i++) {
            const infoPop = document.createElement("div");
            infoPop.classList.add("infoPop");
            searchResults.appendChild(infoPop);

            const img = document.createElement("img");
            const name = document.createElement("h3");
            const desc = document.createElement("p");
            const but = document.createElement("button");

        }

    } else if(query === "temple") {

    } else if(query === "country") {

    } else {
        console.log("No Match Found.");
    }
})

