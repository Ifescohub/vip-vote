const navToggle = document.querySelector(".mobile-nav-toggle");


// FORMATTING NAVIGATION BAR 
navToggle.addEventListener("click", ()=>{
    document.querySelector(".primary-nav").toggleAttribute("data-visible");
    navToggle.toggleAttribute("data-opened");
})