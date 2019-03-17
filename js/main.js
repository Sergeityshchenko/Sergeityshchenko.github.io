const allPages = document.querySelectorAll('.container');
const navLinks = document.querySelectorAll('nav a');
const content = document.querySelector('.content');

let activeLink = navLinks[0]; // Home

navLinks.className = "";

navLinks.forEach(function(navLink) {
    //active home page in begin
    activeLink.className = "";
    document.getElementById(activeLink.href.split('#').pop())
    .className = "active container";
  navLink.addEventListener(click , function(event) {
    // Deactivate current page
    activeLink.className = "hover";
    document.getElementById(activeLink.href.split('#').pop())
      .className = "content";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "hover-active";
    document.getElementById(activeLink.href.split('#').pop())
      .className = "";

    event.preventDefault();
  });
});