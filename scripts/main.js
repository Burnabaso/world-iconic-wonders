const cardsContainer = document.getElementById("cards-container");
const apiUri = "https://www.world-wonders-api.org/v0/wonders";
let wondersData;
axios.get(apiUri).then((response)=>{
    wondersData = response.data;
    for (wonder in wondersData){
        cardsContainer.innerHTML+=`
            <div class="wonder-card">
                <div class="wonder-image">
                    <img
                        src=${wondersData[wonder].links.images[2]}
                        alt=${wondersData[wonder].name}
                    />
                </div>
                <h3>${wondersData[wonder].name}</h3>
                
                <em>${wondersData[wonder].location}</em>
                <p>${wondersData[wonder].build_year < 0? `${Math.abs(wondersData[wonder].build_year)} B.C`: `${wondersData[wonder].build_year} A.C`}</p>
                <em>${wondersData[wonder].time_period}</em>
                <div class="sources-container">
                    <a key=${wonder} href="/pages/info.html" target="_blank">More Info</a>
                </div>
            </div>
        `
    }
    const moreInfo = document.querySelectorAll("a");
    moreInfo.forEach((button)=>{
        button.addEventListener("click",()=>{
            const index = button.getAttribute("key")
            localStorage.setItem("chosenData",JSON.stringify(wondersData[index]))
            localStorage.setItem("chosenIndex",index)

        })
    })
})


