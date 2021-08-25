var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos);
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > prevScrollpos && currentScrollPos > 70) {
        // I am using 'display' instead of 'top':
        document.getElementById("navbar").classList.add("downscroll");
        document.getElementById("navbar").classList.remove("upscroll");
        // document.getElementById("navbar").classList.replace("upscroll","downscroll");
    }
    else if(currentScrollPos < 70) {
        document.getElementById("navbar").classList.remove("upscroll");
    }
    else {
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
// window.addEventListener('scroll', reveal);

//     function reveal(){
//       var reveals = document.querySelectorAll('.reveal');

//       for(var i = 0; i < reveals.length; i++){

//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 200;

//         if(revealtop < windowheight - revealpoint){
//           reveals[i].classList.add('active');
//         }
//         else{
//           reveals[i].classList.remove('active');
//         }
//       }
//     }