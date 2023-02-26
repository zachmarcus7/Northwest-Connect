// set up variable for bulletList
var bulletList;

// this makes the pagepiler sidenav accessible
setTimeout(() => {
    bulletList = document.querySelectorAll("#pp-nav ul li a");
    // bulletList[4].click();
}, 250 );

// functions for nav anchor tags
function main() {
    bulletList[0].click();
}

function about() {
    bulletList[1].click();
}

function services() {
    bulletList[2].click();
}

function reviews() {
    bulletList[3].click();
}

function contact() {
    bulletList[4].click();
}