//media query check to hide side menu and remove default transition
const mediaQuery = window.matchMedia('(max-width: 768px)');
function screenCheck(e) {
    if (e.matches) {
        document.getElementById("sideMenu").style.transition = "all 0.4s ease";
    }
    else {
        document.getElementById("sideMenu").style.transition = "none";
    }
}
mediaQuery.addListener(screenCheck);
screenCheck(mediaQuery);

//funtion to show and hide other projects
function toggleShow() {
    var toggle = document.getElementById("content");
    var toggleButton = document.getElementById("toggleButton");
    if (toggle.style.opacity === "0" || toggle.style.opacity === "")
    {
        toggle.style.opacity = "1";
        toggle.style.height = "auto";
        toggleButton.innerHTML = "See Less";
    }
    else
    {
        toggle.style.opacity = "0";
        toggle.style.height = "0";
        toggleButton.innerHTML = "See More";
    }
}
   
const menuButton = document.getElementById("sideMenuTrigger");
const menu = document.getElementById("sideMenu");

// to hide side menu when clicked on cross/outside menu
function hideSidebar() {
    document.body.style.overflow = "auto";
    menuButton.innerHTML = "&#9776;";
    document.getElementById("webpageContent").style.filter = "none";
    menu.style.transform = "translateX(100vw)";
    menu.style.opacity = "0";
    menuButton.value = "1";
}

// to show side menu when clicked on menu button
function showSidebar() {
    document.body.style.overflow = "hidden";
    menuButton.innerHTML = "&times;";
    document.getElementById("webpageContent").style.filter = "blur(5px)";
    menu.style.transform = "translateX(0vw)";
    menu.style.opacity = "1";
    menuButton.value = "0";
}

// to get all nva-bar links with class navlink
const elements = document.getElementsByClassName("navlink");

// event listener to catch clicks outside and inside menu
document.addEventListener('click', function(event) {
    if (menu.contains(event.target) || menuButton.contains(event.target) && menuButton.value === "1")
    {
        showSidebar();
        for (var i = 0; i < elements.length; i++) {
            if(elements[i].contains(event.target))
            {
                hideSidebar();
                break;
            }
        }
    }
    else
    {
        hideSidebar();
    }
});

// scroll function to show and hide navbar while scrolling up and down respectively.
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollpos && currentScrollPos > 70) {
        document.getElementById("navbar").classList.add("downscroll");
        document.getElementById("navbar").classList.remove("upscroll");
    }
    else if(currentScrollPos < 70) {
        document.getElementById("navbar").classList.remove("upscroll");
    }
    else {
        document.getElementById("navbar").classList.add("upscroll");
        document.getElementById("navbar").classList.remove("downscroll");
    }
    prevScrollpos = currentScrollPos;
}

// to remove loader animation after 3s
setTimeout(function(){ 
    document.getElementById('loader').style.display = 'none';
    document.getElementById('webpage').style.opacity = '1';
    document.body.style.overflow = 'visible';
}, 3500);