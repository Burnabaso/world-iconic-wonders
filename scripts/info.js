let slideIndex = 0;
showSlides();
const dataObject = JSON.parse(localStorage.getItem("chosenData"));
document.body.innerHTML+=`
    <h1>${dataObject.name}</h1>
    <em>${dataObject.build_year < 0? `${Math.abs(dataObject.build_year)} B.C`: `${dataObject.build_year} A.C`}</em>
    <p>${dataObject.location}</p>
`
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

{/* <h4>More Info</h4>
<div class="sources-card">
    <a href=${wondersData[wonder].links.wiki} target="_blank">Wiki</a>
    <a href=${wondersData[wonder].links.britannica} target="_blank">Britannica</a>
    <a href=${wondersData[wonder].links.google_maps} target="_blank">Google Maps</a>
    <a href=${wondersData[wonder].links.trip_advisor} target="_blank">Trip Advisor</a>
</div> */}
{/* <p class="summary">
${wondersData[wonder].summary}
</p> */}