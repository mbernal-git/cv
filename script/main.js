let main = document.getElementsByTagName("main")[0];
let toggler = document.getElementById("checkbox");
let navBtn1 = document.getElementById("bannerBtn");
let navBtn2 = document.getElementById("skillsBtn");
let navBtn3 = document.getElementById("toolsBtn");
let navBtn4 = document.getElementById("projectsBtn");
let navBtn5 = document.getElementById("contactBtn");
let update = document.querySelector("#update");

function changeBgNav() {
    let btnActive = (main.classList.contains("dark") ? "rgb(102, 73, 61)" : "rgb(27, 46, 53)");
    let btnInactive = "white";

    if (window.scrollY === 0 || window.scrollY < Math.floor(document.body.scrollHeight * 0.2)) {
        navBtn1.style.backgroundColor = btnActive;
        navBtn2.style.backgroundColor = btnInactive;
        navBtn3.style.backgroundColor = btnInactive;
        navBtn4.style.backgroundColor = btnInactive;
        navBtn5.style.backgroundColor = btnInactive;
    }
     else if (window.scrollY >= Math.floor(document.body.scrollHeight * 0.2) && window.scrollY <= Math.floor(document.body.scrollHeight * 0.4)) {
        navBtn1.style.backgroundColor = btnInactive;
        navBtn2.style.backgroundColor = btnActive;
        navBtn3.style.backgroundColor = btnInactive;
        navBtn4.style.backgroundColor = btnInactive;
        navBtn5.style.backgroundColor = btnInactive;
    }
     else if (window.scrollY > Math.floor(document.body.scrollHeight * 0.4) && window.scrollY < Math.floor(document.body.scrollHeight * 0.6)) {
        navBtn1.style.backgroundColor = btnInactive;
        navBtn2.style.backgroundColor = btnInactive;
        navBtn3.style.backgroundColor = btnActive;
        navBtn4.style.backgroundColor = btnInactive;
        navBtn5.style.backgroundColor = btnInactive;
    } 
    else if (window.scrollY >= Math.floor(document.body.scrollHeight * 0.6) && window.scrollY < Math.floor(document.body.scrollHeight * 0.61)) {
        navBtn1.style.backgroundColor = btnInactive;
        navBtn2.style.backgroundColor = btnInactive;
        navBtn3.style.backgroundColor = btnInactive;
        navBtn4.style.backgroundColor = btnActive;
        navBtn5.style.backgroundColor = btnInactive;
    } 
    else if (window.scrollY >= Math.floor(document.body.scrollHeight * 0.79)) {
        navBtn1.style.backgroundColor = btnInactive;
        navBtn2.style.backgroundColor = btnInactive;
        navBtn3.style.backgroundColor = btnInactive;
        navBtn4.style.backgroundColor = btnInactive;
        navBtn5.style.backgroundColor = btnActive;
    } 
}
 
// Toggle dark mode
toggler.addEventListener("change", () => {
    main.classList.toggle("dark");
    changeBgNav();
});

// Navigation
navBtn1.addEventListener("click", function(e) {
    window.scrollTo(0, 0);
});

navBtn2.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.2));
});

navBtn3.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.4009));
});

navBtn4.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.600999));
});

navBtn5.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.8));
});

document.addEventListener("scroll", changeBgNav);
