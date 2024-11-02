const dataObject = JSON.parse(localStorage.getItem("chosenData"));
const slideshow = document.getElementById("slideshow");
const moreContent = document.getElementById("content");
const images = dataObject.links.images;
images.forEach((i) => {
    slideshow.innerHTML += `
    <div class="mySlides fade">
        <img src=${i} style="width:100%"/>
    </div>
    `;
});
moreContent.innerHTML+=`
<div class="side-info">
    <h1>${dataObject.name}</h1>
    <em>${dataObject.build_year < 0? `${Math.abs(dataObject.build_year)} B.C`: `${dataObject.build_year} A.C`}</em>
    <p>${dataObject.location}</p>
    <p class="summary">${dataObject.summary}</p>
    <h4>More Info</h4>
    <div class="sources-card">
        <a href=${dataObject.links.wiki} target="_blank">Wiki</a>
        <a href=${dataObject.links.britannica} target="_blank">Britannica</a>
        <a href=${dataObject.links.google_maps} target="_blank">Google Maps</a>
        <a href=${dataObject.links.trip_advisor} target="_blank">Trip Advisor</a>
    </div> 
</div>

`



// Define and initialize slideIndex outside the function
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Call showSlides once the elements are fully added
document.addEventListener("DOMContentLoaded",()=>{
    showSlides();
})
