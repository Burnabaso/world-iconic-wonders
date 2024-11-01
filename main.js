const cardsContainer = document.getElementById("cards-container");
const apiUri = "https://www.world-wonders-api.org/v0/wonders";
let wondersData;
axios.get(apiUri).then((response)=>{
    wondersData = response.data;
    for (wonder in wondersData){
        console.log(wondersData)
        cardsContainer.innerHTML+=`
            <div class="wonder-card">
                <div class="wonder-image">
                    <img
                        src=${wondersData[wonder].links.images[0]}
                        alt=${wondersData[wonder].name}
                    />
                </div>
                <h3>${wondersData[wonder].name}</h3>
                <p>
                    ${wondersData[wonder].summary}
                </p>
                <em>${wondersData[wonder].location}</em>
                <p>${wondersData[wonder].build_year < 0? `${Math.abs(wondersData[wonder].build_year)} B.C`: `${wondersData[wonder].build_year} A.C`}</p>
                <em>${wondersData[wonder].time_period}</em>
                <div class="sources-container">
                <h4>More Info</h4>
                <div class="sources-card">
                    <a href=${wondersData[wonder].links.wiki} target="_blank">Wiki</a>
                    <a href=${wondersData[wonder].links.britannica} target="_blank">Britannica</a>
                    <a href=${wondersData[wonder].links.google_maps} target="_blank">Google Maps</a>
                    <a href=${wondersData[wonder].links.trip_advisor} target="_blank">Trip Advisor</a>
                </div>
                </div>
            </div>
        `
    }
    // there is an extra data outside the array so display it separately
    cardsContainer.innerHTML+=`
            <div class="wonder-card">
                <div class="wonder-image">
                    <img
                        src=${wondersData.links.images[0]}
                        alt=${wondersData.name}
                    />
                </div>
                <h3>${wondersData.name}</h3>
                <p>
                    ${wondersData.summary}
                </p>
                <em>${wondersData.location}</em>
                <p>${wondersData.build_year < 0? `${Math.abs(wondersData.build_year)} B.C`: `${wondersData.build_year} A.C`}</p>
                <em>${wondersData.time_period}</em>
                <div class="sources-container">
                <h4>More Info</h4>
                <div class="sources-card">
                    <a href=${wondersData.links.wiki} target="_blank">Wiki</a>
                    <a href=${wondersData.links.britannica} target="_blank">Britannica</a>
                    <a href=${wondersData.links.google_maps} target="_blank">Google Maps</a>
                    <a href=${wondersData.links.trip_advisor} target="_blank">Trip Advisor</a>
                </div>
                </div>
            </div>
        `
})


