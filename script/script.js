var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");

document.addEventListener("scroll", function (e) {
    if (window.scrollY === 0 || window.scrollY <= (document.body.scrollHeight * 0.333)) {
        dot1.style.backgroundColor = "#9DD6D6";
        dot2.style.backgroundColor = "white";
        dot3.style.backgroundColor = "white";
    } else if (window.scrollY >= (document.body.scrollHeight * 0.333) && window.scrollY < (document.body.scrollHeight * 0.666)) {
        dot1.style.backgroundColor = "white";
        dot2.style.backgroundColor = "#9DD6D6";
        dot3.style.backgroundColor = "white";
    } else if (window.scrollY >= (document.body.scrollHeight * 0.666)) {
        dot1.style.backgroundColor = "white";
        dot2.style.backgroundColor = "white";
        dot3.style.backgroundColor = "#9DD6D6";
    }
});


dot1.addEventListener("click", function(e) {
    window.scrollTo(0, 0);
});

dot2.addEventListener("click", function(e) {
    window.scrollTo(0, (document.body.scrollHeight * 0.3333333));
});

dot3.addEventListener("click", function(e) {
    window.scrollTo(0, (document.body.scrollHeight * 0.66666666666));
});
