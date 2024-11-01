const cardsContainer = document.getElementById("cards-container");
const apiUri = "https://www.world-wonders-api.org/v0/wonders";
let wondersData;
axios.get(apiUri).then((response)=>{
    wondersData = response.data;
    for (wonder in wondersData){
        console.log(wondersData[wonder])
    }
})