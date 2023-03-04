window.currentLink = "home-link";
window.highlightLink = true;
window.showingNav = false;

window.onload = window.onresize = function() {
    closeNav();
    showPage();
}

window.onscroll = function() {
    var navBtn = document.getElementById("nav-btn");
    var navDrop = document.getElementById("nav-drop");
    navBtn.style.color = "#ccc";
    navDrop.style.pointerEvents = "none";
    navDrop.style.opacity = 0;
    showPage();
    window.showingNav = false;
    if (window.highlightLink == true) {
        reset();
    }
}

function gotoPage(pg) {
    var navBtn = document.getElementById("nav-btn");
    var navDrop = document.getElementById("nav-drop");
    var page = document.getElementById(pg);
    navBtn.style.color = "#ccc";
    navDrop.style.pointerEvents = "none";
    navDrop.style.opacity = "0";
    window.highlightLink = false;
    window.showingNav = false;
    page.scrollIntoView({behavior: "smooth"});
    switch (pg) {
        case "home-page":
            showHome("0.05");
            break;
        case "about-page":
            showAbout("0.05");
            break;
    }
}

function showPage() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        showAbout("0.05");
    } else {
        showHome("0.05");
    }
}

function showHome(t) {
    var navBar = document.getElementById("nav-bar");
    var homeLink = document.getElementById("home-link");
    navBar.className = navBar.className.replace("w3-card", "");
    navBar.style.backgroundColor = "transparent";
    homeLink.style.pointerEvents = "none";
    homeLink.style.opacity = "0";
    setOpacity("0.15", "1", "0", t);
    window.currentLink = "home-link";
}

function showAbout(t) {
    var navBar = document.getElementById("nav-bar");
    var homeLink = document.getElementById("home-link");
    navBar.className = "w3-bar" + " w3-card";
    navBar.style.backgroundColor = "#000";
    homeLink.style.pointerEvents = "auto";
    homeLink.style.opacity = "1";
    document.getElementById("about-page").style.opacity = "1";
    setOpacity("0", "0", "1", t);
    window.currentLink = "about-link";
    window.highlightLink = true;
}

function toggleNav() {
    if (window.showingNav == true) {
        closeNav();
        showPage();
        window.showingNav = false;
    } else {
        openNav();
        setOpacity("0", "0", "0");
        window.showingNav = true;
    }
}

function openNav() {
    var navBtn = document.getElementById("nav-btn");
    var navDrop = document.getElementById("nav-drop");
    navBtn.style.color = "#666";
    navDrop.style.pointerEvents = "auto";
    navDrop.style.opacity = "1";
}

function closeNav() {
    var navBtn = document.getElementById("nav-btn");
    var navDrop = document.getElementById("nav-drop");
    navBtn.style.color = "#ccc";
    navDrop.style.pointerEvents = "none";
    navDrop.style.opacity = "0";
}

function setOpacity(bv, bl, ap, t) {
    var bannerVid = document.getElementById("banner-vid");
    var bannerLogo = document.getElementById("banner-logo");
    var aboutPage = document.getElementById("about-page");
    bannerVidTransition = bannerVid.style.transition;
    bannerLogoTransition = bannerLogo.style.transition;
    aboutPageTransition = aboutPage.style.transition;
    bannerVid.style.transition = t;
    bannerLogo.style.transition = t;
    aboutPage.style.transition = t;
    switch (window.currentLink) {
        case "home-link":
            bannerVid.style.opacity = bv;
            bannerLogo.style.opacity = bl;
            break;
        case "about-link":
            aboutPage.style.opacity = ap;
            break;
    }
    bannerVid.style.transition = bannerVidTransition;
    bannerLogo.style.transition = bannerLogoTransition;
    aboutPage.style.transition = aboutPageTransition;
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