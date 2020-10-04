const hamburgerIcon = document.getElementById("hamburgerIcon");
const desktopNAV = document.getElementById("sidebar-desktop-nav");
const mobileNav = document.getElementById("sidebar-mobile-nav");
    
function toggleMenu() {
    console.log(hamburgerIcon.src)
    console.log('https://' + window.location.hostname + window.location.pathname + 'images/hamburgerIcon.png')
    console.log(window.location.hostname);
    console.log(window.location.pathname);
    //check the src attribute
    if (hamburgerIcon.src == 'https://' + window.location.hostname + window.location.pathname + 'images/hamburgerIcon.png') {
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