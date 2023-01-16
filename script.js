let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
//tema gelap & terang
let tema = document.querySelector("#theme-toggle");

tema.onclick = () => {
  tema.classList.toggle("fa-moon");
  if (tema.classList.contains("fa-moon")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
