window.currentLink = "home-link";
window.highlightLink = true;

window.onscroll = function() {
    var navBar = document.getElementById("nav-bar");
    var homeLink = document.getElementById("home-link");
    var bannerVid = document.getElementById("banner-vid");
    var bannerLogo = document.getElementById("banner-logo");
    var aboutPage = document.getElementById("about-page");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navBar.className = "w3-bar" + " w3-card";
        homeLink.style.opacity = "1";
        homeLink.style.pointerEvents = "auto";
        bannerVid.style.opacity = "0";
        bannerLogo.style.opacity = "0";
        aboutPage.style.opacity = "1";
        window.currentLink = "about-link";
        window.highlightLink = true;
    } else {
        navBar.className = navBar.className.replace("w3-card", "");
        homeLink.style.opacity = "0";
        homeLink.style.pointerEvents = "none";
        bannerVid.style.opacity = "0.25";
        bannerLogo.style.opacity = "1"
        aboutPage.style.opacity = "0";
        window.currentLink = "home-link";
    }
    if (window.highlightLink == true) {
        reset();
    }
}

function toggleNav() {
    var navDrop = document.getElementById("nav-drop");
    if (navBtn.className.indexOf("w3-show") == -1) {
        navBtn.className += " w3-show";
    } else {
        navBtn.className = navBtn.className.replace(" w3-show", "");
    }
}

function highlight(id) {
    var navLinks = document.getElementsByClassName("nav-link");
    for (var i = 0; i < navLinks.length; ++i) {
        if (navLinks[i].id == id) {
            navLinks[i].style.color = "#ccc";
        } else {
            navLinks[i].style.color = "#666";
        }
    }
}

function reset() {
    var navLinks = document.getElementsByClassName("nav-link");
    if (window.highlightLink == true) {
        for (var i = 0; i < navLinks.length; ++i) {
            if (window.currentLink == "home-link") {
                navLinks[i].style.color = "#ccc";
            } else if (navLinks[i].id == window.currentLink) {
                navLinks[i].style.color = "#ccc";
            } else {
                navLinks[i].style.color = "#666"
            }
        }
    }
}

function gotoPage() {
    window.highlightLink = false;
}