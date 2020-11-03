// farhan js start

// sidenav open js start
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// window scroll function for main logo color change

function change() {
    document.getElementById("logo_color_change").style.color = "#04d9ff";
    document.getElementById("logo_color_change").style.transition = "4s";
    // document.getElementById("logo_color_change").innerHTML = "farhan prog hey";
}
// now call function
window.onscroll = function () {
    change()
};

// main logo color change function end