// window.onscroll = function() {
    // var Pos = window.pageYOffset;
    // var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // var scrolled = (winScroll / height) * 100;
    // document.getElementById("myBar").style.height = scrolled + "%";
    // document.getElementById("myBar").style.transform = "translate(-6.5px,"+Pos/4.1+"px)";
// }
// menu.style.display = "none";

function toggleShow() {
    var toggle = document.getElementById("content");
    var toggleButton = document.getElementById("toggleButton");
    if (toggle.style.opacity === "0")
    {
        toggle.style.opacity = "1";
        toggle.style.height = "auto";
        // toggle.style.display = "block";
        toggleButton.innerHTML = "See Less";
    }
    else
    {
        toggle.style.opacity = "0";
        toggle.style.height = "0";
        // toggle.style.display = "none";
        toggleButton.innerHTML = "See More";
    }
}
function navbarToggle() {
    // var menu = document.getElementById("sideMenu");
    var menu = document.getElementById("sideMenu");
    var menuButton = document.getElementById("sideMenuTrigger");
    if(menu.style.opacity === "0")
    {
        // menu.style.display = "block";
        menuButton.innerHTML = "&times;";
        // menu.style.transform.translateX = "0vw";
        menu.style.transform = "translateX(0vw)";
        menu.style.opacity = "1";
    }
    else 
    {
        // menu.style.display = "none";
        menu.style.transform = "translateX(100vw)";
        menu.style.opacity = "0";
        menuButton.innerHTML = "&#9776;";
    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos);
    // console.log(currentScrollPos/4);
    // document.getElementById("myBar").style.transform = "translate(0,"+currentScrollPos/4+"px)";
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > prevScrollpos && currentScrollPos > 70) {
        // I am using 'display' instead of 'top':
        // document.getElementById("myBar").style.transform = "translate(0,"+currentScrollPos/4+"px)";
        document.getElementById("navbar").classList.add("downscroll");
        document.getElementById("navbar").classList.remove("upscroll");
        // document.getElementById("navbar").classList.replace("upscroll","downscroll");
    }
    else if(currentScrollPos < 70) {
        // document.getElementById("myBar").style.transform = "translate(0,"+currentScrollPos+"px)";
        document.getElementById("navbar").classList.remove("upscroll");
    }
    else {
        // document.getElementById("myBar").style.transform = "translate(0,"+currentScrollPos/4+"px)";
        document.getElementById("navbar").classList.add("upscroll");
        document.getElementById("navbar").classList.remove("downscroll");
        // document.getElementById("navbar").classList.replace("downscroll","upscroll");
    }
    prevScrollpos = currentScrollPos;
}

setTimeout(function(){ 
    // document.getElementById('loader').style.opacity = '0';
    document.getElementById('loader').style.display = 'none';
    document.getElementById('webpage').style.opacity = '1';
    document.body.style.overflow = 'visible';
}, 3500);