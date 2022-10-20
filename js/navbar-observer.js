// variables for keeping track of navbar
const home = document.getElementById("home");
const navbar = document.getElementById("main-nav");

// function for changing opacity of nav when toggle is clicked
var changeNavOpacity = function () {
    // if they press the toggler once, the background for the nav gets set while
    // they stay on that page
    navbar.style.backgroundColor = "rgb(12, 42, 60)";
};

const navbarOptions = {
    threshold: 0.8,
};

var navbarObserver = new IntersectionObserver(entries => {
    navbar.classList.toggle('active', !entries[0].isIntersecting);
}, navbarOptions);

// this is for the intersection observer keeping track of elements
navbarObserver.observe(home)
navbarObserver.observe(navbar);