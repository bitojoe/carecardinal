
// listen for scroll
document.addEventListener("scroll", scrollPast75);

// if scroll position is past 75% of the page
function scrollPast75() {

  // scroll position
  var y = window.scrollY;
  // viewport height * 75%
  var vh75 = window.innerHeight * 0.75;
  // navigation
  var navigation = document.getElementById("navigation");
  // navbar
  var navbar = document.getElementById("navbar");
  // height of navbar
  var navbarHeight = navbar.offsetHeight;
  // top margin of navbar after droping down on scroll
  var navigationTopMargin = ((y / vh75) - 1) * 6 * navbarHeight;

  // if scroll position is past 75% of the page
  if ( y > vh75) {
    // set navigation position equal to the height of the navbar
    navigation.style.top = "-" + navbarHeight + "px";
    // style the now fixed navbar
    navigation.classList.add("navigation-fixed");
    // remove navbar light text
    navbar.classList.remove("navbar-dark");
    // add navbar dark text
    navbar.classList.add("navbar-light");
    // style the desktop logo when fixed
    navbar.children[0].classList.add("navbar-brand-fixed");
    // style the mobile logo when fixed
    navbar.children[1].classList.add("navbar-brand-fixed");
    // swap the colors for the desktop logo
    document.getElementById("logo-long").src = "/media/logo/logo-red-long.png"
    // swap the colors for the mobile logo
    document.getElementById("logo-wide").src = "/media/logo/logo-red-wide.png";

    // while the navigation's top margin is less than the height of the navbar,
    if (navigationTopMargin < navbarHeight) {
      // slowly add margin to the top of the fixed navigation
      navigation.style.marginTop = navigationTopMargin + "px";
    // once the margin is no longer less than the height of the navbar,
    } else {
      // set the margin equal to the height of the navbar
      navigation.style.marginTop = navbarHeight + "px";
    }

  // if scroll position is not past 75% of the page
  } else {
    // reset the position of navigation
    navigation.style.top = "0";
    // reset the top margin of navigation
    navigation.style.marginTop = "0";
    // remove the fixed styling from navigation
    navigation.classList.remove("navigation-fixed");
    // add navbar light text
    navbar.classList.add("navbar-dark");
    // remove navbar dark text
    navbar.classList.remove("navbar-light");
    // remove the styling from the desktop logo when fixed
    navbar.children[0].classList.remove("navbar-brand-fixed");
    // remove the styling from the mobile logo when fixed
    navbar.children[1].classList.remove("navbar-brand-fixed");
    // swap the colors for the desktop logo
    document.getElementById("logo-long").src = "/media/logo/logo-white-long.png";
    // swap the colors for the mobile logo
    document.getElementById("logo-wide").src = "/media/logo/logo-white-wide.png";
  }
}

// carousel
var carouselImage = document.getElementsByClassName("carousel-image");
// for each carousel,
for(var i = 0; i < carouselImage.length; i++) {
  // listen for click
  carouselImage[i].addEventListener("click", carouselZoomIn);
}

// on click,
function carouselZoomIn() {
  // add class lightbox
  this.parentElement.parentElement.parentElement.classList.add("lightbox");
  // add class lightbox-column to parent column
  this.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("lightbox-column");
  // lightbox background
  var lightboxBackground = this.parentElement.parentElement.parentElement.children[0];
  // remove class no display from lightbox background
  lightboxBackground.classList.remove("no-display");
  // get the rectangle of the body
  var bodyRect = document.body.getBoundingClientRect();
  // get the rectangle of the lightbox
  var lightboxRect = this.parentElement.parentElement.parentElement.getBoundingClientRect();
  // subtract the top of body from the top of the lightbox
  var offset = lightboxRect.top - bodyRect.top;
  // set height of lightbox background equal to height of document
  lightboxBackground.style.height = document.body.clientHeight + "px";
  // set position of lightbox background equal to negative margin of offset
  lightboxBackground.style.marginTop = "-" + offset + "px";
  // descendantImages
  descendantImages = this.parentElement.parentElement.parentElement.querySelectorAll("img");
  // for each descendant image
  for(var i = 0; i < descendantImages.length; i++) {
    // remove class w-100
    descendantImages[i].classList.remove("w-100");
    // add class h-80vh
    descendantImages[i].classList.add("h-80vh");
  }
}

// lightboxBackgrounds
var lightboxBackgrounds = document.getElementsByClassName("lightbox-background");
// for each lightboxBackground
for(var i = 0; i < lightboxBackgrounds.length; i++) {
  // listen for click,
  lightboxBackgrounds[i].addEventListener("click", lightboxZoomOut);
}

// on click,
function lightboxZoomOut() {
  // remove class lightbox
  this.parentElement.classList.remove("lightbox");
  // remove class lightbox-column from parent column
  this.parentElement.parentElement.parentElement.classList.remove("lightbox-column");
  // lightbox background
  var lightboxBackground = this;
  // add class no display to lightbox background
  lightboxBackground.classList.add("no-display");
  // descendantImages
  descendantImages = this.parentElement.querySelectorAll("img");
  // for each descendant image
  for(var i = 0; i < descendantImages.length; i++) {
    // remove class w-100
    descendantImages[i].classList.add("w-100");
    // add class h-80vh
    descendantImages[i].classList.remove("h-80vh");
  }
}
