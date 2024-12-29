document.addEventListener("DOMContentLoaded", function () {
  const buttonRanking = document.querySelector("#rankButton"); // Unique ID for the button
  const rankElement = document.querySelector("#rank"); // Unique ID for the ranking div
  const buttonHome = document.querySelector(".main-nav");
  // Select NodeLists
  const newsHeaderDivs = document.querySelectorAll(".news-header-content");
  const newsContentDivs = document.querySelectorAll(".news-content");
  const infoHeaderDivs = document.querySelectorAll(".info-header-content");
  const infoContentDivs = document.querySelectorAll(".info-content");

  function toggleRank() {
    if (rankElement.style.display === "none" || rankElement.style.display === "") {
      // Show rankElement
      rankElement.style.display = "flex";

      // Hide other elements
      newsHeaderDivs.forEach((div) => (div.style.display = "none"));
      newsContentDivs.forEach((div) => (div.style.display = "none"));
      infoHeaderDivs.forEach((div) => (div.style.display = "none"));
      infoContentDivs.forEach((div) => (div.style.display = "none"));
    } else {
      // Hide rankElement
      rankElement.style.display = "none";

      // Optionally, show other elements back
      newsHeaderDivs.forEach((div) => (div.style.display = "flex"));
      newsContentDivs.forEach((div) => (div.style.display = "flex"));
      infoHeaderDivs.forEach((div) => (div.style.display = "flex"));
      infoContentDivs.forEach((div) => (div.style.display = "grid"));
    }
  }
  
  function toggleHome(){
    if (buttonHome.style.display === "none" || buttonHome.style.display === "") {
      buttonHome.style.display = "flex";
      rankElement.style.display ="none";
      // Hide other elements
      newsHeaderDivs.forEach((div) => (div.style.display = "flex"));
      newsContentDivs.forEach((div) => (div.style.display = "flex"));
      infoHeaderDivs.forEach((div) => (div.style.display = "flex"));
      infoContentDivs.forEach((div) => (div.style.display = "grid"));
    }
  }


  // Add click event listener
  if (buttonRanking) {
    buttonRanking.addEventListener("click", toggleRank);
  }
  if (buttonHome){
    buttonHome.addEventListener("click", toggleHome);
  }
});

let currentIndex = 0;
const carouselInner = document.querySelector(".carousel-inner");
const newsItems = document.querySelectorAll(".news-item");

function moveCarousel(direction) {
  const totalItems = newsItems.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  const offset = -currentIndex * (newsItems[0].offsetWidth + 10);
  carouselInner.style.transform = `translateX(${offset}px)`;
}

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    moveCarousel(1);
  } else {
    moveCarousel(-1);
  }
});


