var toggleDarkTheme = false;

var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
var dot5 = document.getElementById("dot5");

var body = document.getElementsByTagName("body")[0];
var lamp = document.getElementById("toggle-button");

var p = document.getElementsByTagName("p");
var bigHeading = document.querySelector("#top > header > div.banner > div.headings > h2");
var h2 = document.getElementsByTagName("h2");
var h3 = document.getElementsByTagName("h3");
var ol = document.getElementsByTagName("ol");
var ul = document.getElementsByTagName("ul");
var cta = document.querySelector(".cta");
var sections = document.getElementsByTagName("section");
var tools = document.querySelector("#tools");
var footer = document.querySelector(".bg-footer");

var bgActive = "rgb(33, 38, 45)";
var btnInactive = "white";

// // Update into dynamic element
document.addEventListener("scroll", function (e) { 
    if (window.scrollY === 0 || window.scrollY < Math.floor(document.body.scrollHeight * 0.2)) {
        dot1.style.backgroundColor = bgActive;
        dot2.style.backgroundColor = btnInactive;
        dot3.style.backgroundColor = btnInactive;
        dot4.style.backgroundColor = btnInactive;
        dot5.style.backgroundColor = btnInactive;
    }
     else if (window.scrollY >=  Math.floor(document.body.scrollHeight * 0.2) && window.scrollY <=  Math.floor(document.body.scrollHeight * 0.4)) {
        dot1.style.backgroundColor = btnInactive;
        dot2.style.backgroundColor = bgActive;
        dot3.style.backgroundColor = btnInactive;
        dot4.style.backgroundColor = btnInactive;
        dot5.style.backgroundColor = btnInactive;
    }
     else if (window.scrollY >  Math.floor(document.body.scrollHeight * 0.4) && window.scrollY <  Math.floor(document.body.scrollHeight * 0.6)) {
        dot1.style.backgroundColor = btnInactive;
        dot2.style.backgroundColor = btnInactive;
        dot3.style.backgroundColor = bgActive;
        dot4.style.backgroundColor = btnInactive;
        dot5.style.backgroundColor = btnInactive;
    } 
    else if (window.scrollY >=  Math.floor(document.body.scrollHeight * 0.6) && window.scrollY <  Math.floor(document.body.scrollHeight * 0.6009)) {
        dot1.style.backgroundColor = btnInactive;
        dot2.style.backgroundColor = btnInactive;
        dot3.style.backgroundColor = btnInactive;
        dot4.style.backgroundColor = bgActive;
        dot5.style.backgroundColor = btnInactive;
    } 
    else if (window.scrollY >= Math.floor(document.body.scrollHeight * 0.79)) {
        dot1.style.backgroundColor = btnInactive;
        dot2.style.backgroundColor = btnInactive;
        dot3.style.backgroundColor = btnInactive;
        dot4.style.backgroundColor = btnInactive;
        dot5.style.backgroundColor = bgActive;
    } 
});

dot1.addEventListener("click", function(e) {
    window.scrollTo(0, 0);
});

dot2.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.2));
});

dot3.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.4009));

});

dot4.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.600999));
});

dot5.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.8));
});

lamp.addEventListener("click", function(e) {
    toggleDarkTheme = !toggleDarkTheme;
    bgActive = "#66493D";

    if (toggleDarkTheme) {
        bg = "rgb(33, 38, 45)";
        e.target.src = "../images/light-mode.png";
        e.target.title = "dark mode";

        e.target.style.background = "rgba(255, 193, 7, 0.9)";
        e.target.style.boxShadow = "0 0 0 4px rgb(255, 193, 7)";
        
    
        for (let i = 0 ; i < p.length; i ++) {
            p[i].style.color = "grey";
        }
    
        for (let i = 0 ; i < h2.length; i ++) {
            h2[i].style.color = "#66493D";
            h2[i].style.textShadow = "0.1rem  .2rem black";
    
        }

        for (let i = 0 ; i < h3.length; i ++) {
            h3[i].style.color = "#66493D";
            h3[i].style.textShadow = "0.1rem  .2rem black";
    
        }
    
        for (let i = 0 ; i < ol.length; i ++) {
            ol[i].style.color = "grey";
        }
        for (let i = 0 ; i < ul.length; i ++) {
            ul[i].style.color = "grey";
        }
        for (let i = 0 ; i < sections.length; i ++) {
            sections[i].style.background = "#0D1117";
        }
        tools.style.backgroundColor = "#010409";

        cta.addEventListener("mousein", function(e) {
            const bg = toggleDarkTheme ?  "red" : "rgba(33, 38, 45, 0.9)";
            e.target.style.background = bg;
        });
    
        footer.style.backgroundImage = "linear-gradient(to top, rgba(0, 0, 0, 0.5), #010409), url('../images/mountain3.png')";
        return;
    } 
    bg = "rgba(33, 38, 45, 0.9)";
    
    bgActive = "rgb(33, 38, 45)";
    e.target.src = "../images/dark-mode.png";
    e.target.title = "light mode";


    e.target.style.background = "rgb(33, 38, 45)";
    e.target.style.boxShadow = "4px 4px #fff";


    for (let i = 0 ; i < p.length; i ++) {
        p[i].style.color = "black";
    }

    for (let i = 0 ; i < h2.length; i ++) {
        h2[i].style.color = "#1B2E35";
        h2[i].style.textShadow = "none";

    }
    for (let i = 0 ; i < h3.length; i ++) {
        h3[i].style.color = "#1B2E35";
        h3[i].style.textShadow = "none";

    }

    for (let i = 0 ; i < ol.length; i ++) {
        ol[i].style.color = "black";
    }
    for (let i = 0 ; i < ul.length; i ++) {
        ul[i].style.color = "black";
    }
    for (let i = 0 ; i < sections.length; i ++) {
        sections[i].style.background = "white";
    }

    tools.style.backgroundColor = "#D5F8E7";

    bigHeading.style.color = "#59E4A8";
    bigHeading.style.textShadow = "0.1rem .2rem black";
    footer.style.backgroundImage = "linear-gradient(to top, transparent 0, transparent 0), url('../images/mountain3.png')";

    cta.addEventListener("mousein", function(e) {
        const bg = toggleDarkTheme ?  "rgb(33, 38, 45)" : "rgba(33, 38, 45, 0.9)";
        e.target.style.background = bg;
    });
});
