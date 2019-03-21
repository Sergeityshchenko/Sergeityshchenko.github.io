/*const navLinks = document.querySelectorAll('nav a');
const contentMe = document.querySelectorAll('.content');

let activeLink = navLinks[0]; // Home

navLinks.className = "";

navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    // Deactivate current page
    activeLink.className = "";
    const urlParts = activeLink.href.split('#');
    const afterHashtag = urlParts.pop();
    const oldArticle = document.getElementById(afterHashtag);
    oldArticle.className = "";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "active";
    document
      .getElementById(activeLink.href.split('#').pop())
      .className = "active";

    event.preventDefault();
  });
});*/



function show_div(div_id) {
  // Hide all divs
  document.getElementById('the_div_1').style.display = 'none';
  document.getElementById('the_div_2').style.display = 'none';
  document.getElementById('the_div_3').style.display = 'none';
  document.getElementById('the_div_4').style.display = 'none';
  document.getElementById('the_div_5').style.display = 'none';
  
  
  document.getElementById(div_id).style.display = 'block';
  }

