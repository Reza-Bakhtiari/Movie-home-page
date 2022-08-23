//slider
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 200,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 280,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 200,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//dark & light mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".profile-link,.profile-menu-container,.container,.movie-list-title,.navbar,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball"
);
ball.addEventListener("click", () => {
  items.forEach((items) => {
    items.classList.toggle("active");
  });
  // ball.cla.ssList.toggle("active");
});
//profile-menu
const profileButton = document.querySelector(".profile-text-container");
const profileMenu = document.querySelector(".profile-menu-container");
const profileIcon = document.querySelector(".profile-icon");
profileButton.addEventListener("click", () => {
  profileMenu.classList.toggle("display");
  if (profileIcon.style.transform === "rotate(-90deg)") {
    profileIcon.style.transform = "rotate(0deg)";
  } else {
    profileIcon.style.transform = "rotate(-90deg)";
  }
});
//search
const searchButton = document.querySelector(".search");
const closeButton = document.querySelector(".close-button");
const searchBox = document.querySelector(".search-box");
const searchGroups = document.querySelectorAll(
  ".search-container,.search-box,.search-input"
);
const searchContainer = document.querySelector(".search-container");
// let searchBoxArea = searchBox.style.width * searchBox.style.height;
// let searchContainerArea =
//   searchContainer.style.width * searchContainer.style.height;
// const closeArea = Number(searchContainerArea - searchBoxArea) + "px";
searchButton.addEventListener("click", () => {
  searchGroups.forEach((searchGroup) => {
    searchGroup.classList.add("active");
  });
});
closeButton.addEventListener("click", () => {
  searchGroups.forEach((searchGroup) => {
    searchGroup.classList.remove("active");
  });
});
searchBox.addEventListener("focusout", () => {
  searchGroups.forEach((searchGroup) => {
    searchGroup.classList.remove("active");
  });
});
