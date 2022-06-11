window.currentLink = "home-link";
window.highlightLink = true;
window.showingNav = false;

window.onload = function() {
    showPage();
}

window.onscroll = function() {
    var navBtn = document.getElementById("nav-btn");
    var navDrop = document.getElementById("nav-drop");
    navBtn.style.color = "#ccc";
    navDrop.style.pointerEvents = "none";
    navDrop.style.opacity = 0;
    window.showingNav = false;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        showAbout();
    } else {
        showHome();
    }
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
            showHome();
            break;
        case "about-page":
            showAbout();
            break;
    }
}

function showPage() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        showAbout();
    } else {
        showHome();
    }
}

function showHome() {
    var navBar = document.getElementById("nav-bar");
    var homeLink = document.getElementById("home-link");
    navBar.className = navBar.className.replace("w3-card", "");
    navBar.style.backgroundColor = "transparent";
    homeLink.style.pointerEvents = "none";
    homeLink.style.opacity = "0";
    setOpacity("0.15", "1", "0");
    window.currentLink = "home-link";
}

function showAbout() {
    var navBar = document.getElementById("nav-bar");
    var homeLink = document.getElementById("home-link");
    navBar.className = "w3-bar" + " w3-card";
    navBar.style.backgroundColor = "#000";
    homeLink.style.pointerEvents = "auto";
    homeLink.style.opacity = "1";
    document.getElementById("about-page").style.opacity = "1";
    setOpacity("0", "0", "1");
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

function setOpacity(bv, bl, ap) {
    var bannerVid = document.getElementById("banner-vid");
    var bannerLogo = document.getElementById("banner-logo");
    var aboutPage = document.getElementById("about-page");
    switch (window.currentLink) {
        case "home-link":
            bannerVid.style.opacity = bv;
            bannerLogo.style.opacity = bl;
            break;
        case "about-link":
            aboutPage.style.opacity = ap;
            break;
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