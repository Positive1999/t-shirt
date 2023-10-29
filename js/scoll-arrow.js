window.addEventListener("scroll", function () {
    var arrowTop = document.getElementById("arrow-top");
    if (window.pageYOffset > 350) {
        arrowTop.style.display = "block";
    } else {
        arrowTop.style.display = "none";
    }
});

document.getElementById("arrow-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('#navbarNav').toggleClass('show');
    });
});