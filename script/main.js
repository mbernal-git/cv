let main = document.getElementsByTagName("main")[0];
let toggler = document.getElementById("checkbox");
let navBtn1 = document.getElementById("bannerBtn");
let navBtn2 = document.getElementById("skillsBtn");
let navBtn3 = document.getElementById("toolsBtn");
let navBtn4 = document.getElementById("projectsBtn");
let navBtn5 = document.getElementById("contactBtn");

function changeBgNav() {

    if (window.scrollY === 0 || window.scrollY < Math.floor(document.body.scrollHeight * 0.2)) {
        navBtn1.style.transform = "scale(1.8)";
        navBtn2.style.transform = "scale(1)";
        navBtn3.style.transform = "scale(1)";
        navBtn4.style.transform = "scale(1)";
        navBtn5.style.transform = "scale(1)";
    }
     else if (window.scrollY >= Math.floor(document.body.scrollHeight * 0.2) && window.scrollY <= Math.floor(document.body.scrollHeight * 0.4)) {
        navBtn1.style.tranform = "scale(1)";
        navBtn2.style.transform = "scale(1.8)";
        navBtn3.style.transform = "scale(1)";
        navBtn4.style.transform = "scale(1)";
        navBtn5.style.transform = "scale(1)";
    }
     else if (window.scrollY > Math.floor(document.body.scrollHeight * 0.4) && window.scrollY < Math.floor(document.body.scrollHeight * 0.6)) {
        navBtn1.style.transform = "scale(1)";
        navBtn2.style.transform = "scale(1)";
        navBtn3.style.transform = "scale(1.8)";
        navBtn4.style.transform = "scale(1)";
        navBtn5.style.transform = "scale(1)";
    } 
    else if (window.scrollY >= Math.floor(document.body.scrollHeight * 0.6) && window.scrollY < Math.floor(document.body.scrollHeight * 0.61)) {
        navBtn1.style.transform = "scale(1)";
        navBtn2.style.transform = "scale(1)";
        navBtn3.style.transform = "scale(1)";
        navBtn4.style.transform = "scale(1.8)";
        navBtn5.style.transform = "scale(1)";
    } 
    else if (window.scrollY >= Math.floor(document.body.scrollHeight * 0.79)) {
        navBtn1.style.transform = "scale(1)";
        navBtn2.style.transform = "scale(1)";
        navBtn3.style.transform = "scale(1)";
        navBtn4.style.transform = "scale(1)";
        navBtn5.style.transform = "scale(1.8)";
    } 
}
 
// Toggle dark mode
toggler.addEventListener("change", () => {
    main.classList.toggle("dark");
    changeBgNav();
});

// Navigation
navBtn1.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

navBtn2.addEventListener("click", () => {
    window.scrollTo(0,  (document.body.scrollHeight * 0.2));
});

navBtn3.addEventListener("click", () => {
    window.scrollTo(0,  (document.body.scrollHeight * 0.4009));
});

navBtn4.addEventListener("click", () => {
    window.scrollTo(0,  (document.body.scrollHeight * 0.600999));
});

navBtn5.addEventListener("click", () => {
    window.scrollTo(0,  (document.body.scrollHeight * 0.8));
});

document.addEventListener("scroll", changeBgNav);
