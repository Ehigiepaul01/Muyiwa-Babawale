const hamburger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".menu");
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active")
    navList.classList.toggle("show")
})

  