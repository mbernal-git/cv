var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");
var dot4 = document.getElementById("dot4");
var dot5 = document.getElementById("dot5");

// Update into dynamic element
document.addEventListener("scroll", function (e) {
    if (window.scrollY === 0 || window.scrollY < Math.floor(document.body.scrollHeight * 0.2)) {
        dot1.style.backgroundColor = "#1B2E35";
        dot2.style.backgroundColor = "white";
        dot3.style.backgroundColor = "white";
        dot4.style.backgroundColor = "white";
        dot5.style.backgroundColor = "white";
    }
     else if (window.scrollY >=  Math.floor(document.body.scrollHeight * 0.2) && window.scrollY <=  Math.floor(document.body.scrollHeight * 0.4)) {
        dot1.style.backgroundColor = "white";
        dot2.style.backgroundColor = "#1B2E35";
        dot3.style.backgroundColor = "white";
        dot4.style.backgroundColor = "white";
        dot5.style.backgroundColor = "white";
    }
     else if (window.scrollY >  Math.floor(document.body.scrollHeight * 0.4) && window.scrollY <  Math.floor(document.body.scrollHeight * 0.6)) {
        dot1.style.backgroundColor = "white";
        dot2.style.backgroundColor = "white";
        dot3.style.backgroundColor = "#1B2E35";
        dot4.style.backgroundColor = "white";
        dot5.style.backgroundColor = "white";
    } 
    else if (window.scrollY >=  Math.floor(document.body.scrollHeight * 0.6) && window.scrollY <=  Math.floor(document.body.scrollHeight * 0.6)) {
        dot1.style.backgroundColor = "white";
        dot2.style.backgroundColor = "white";
        dot3.style.backgroundColor = "white";
        dot4.style.backgroundColor = "#1B2E35";
        dot5.style.backgroundColor = "white";
    } 
    else if (window.scrollY > Math.floor(document.body.scrollHeight * 0.79)) {
        dot1.style.backgroundColor = "white";
        dot2.style.backgroundColor = "white";
        dot3.style.backgroundColor = "white";
        dot4.style.backgroundColor = "white";
        dot5.style.backgroundColor = "#1B2E35";
    } 
});

dot1.addEventListener("click", function(e) {
    window.scrollTo(0, 0);
});

dot2.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.2));
});

dot3.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.4));
});

dot4.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.6));
});

dot5.addEventListener("click", function(e) {
    window.scrollTo(0,  (document.body.scrollHeight * 0.8));
});


