const hamburgerIcon = document.getElementById("hamburgerIcon");
const desktopNAV = document.getElementById("sidebar-desktop-nav");
const mobileNav = document.getElementById("sidebar-mobile-nav");
    
function toggleMenu() {
    //check the src attribute
    if (hamburgerIcon.src == 'http://' + window.location.hostname + ':' +location.port + '/images/hamburgerIcon.png') {
        // replace the src of the image with an X image
        hamburgerIcon.src = 'images/Xicon.png';
        hamburgerIcon.style.filter = "invert(1)";
        mobileNav.style.display = 'block';
        
    } else {
        // replace the src of the image with an X image
        hamburgerIcon.src = 'images/hamburgerIcon.png';
        hamburgerIcon.style.filter = "invert(0)";
        mobileNav.style.display = 'none';
    }
}