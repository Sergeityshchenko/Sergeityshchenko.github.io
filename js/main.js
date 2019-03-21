
/*let firstLink = document.getElementById('the_div_1');
let secondLink = document.getElementById('the_div_2');
let thirdLink = document.getElementById('the_div_3');
let fourthLink = document.getElementById('the_div_4');
let fifthLink = document.getElementById('the_div_5');



function show_div(div_id) {
  // Hide all divs
  firstLink.style.display = 'none';
  secondLink.style.display = 'none';
  thirdLink.style.display = 'none';
  fourthLink.style.display = 'none';
  fifthLink.style.display = 'none';
  
  // Set require link
  document.getElementById(div_id).style.display = 'block';
  }*/
  
  
  const navLinks = document.querySelectorAll('ul li a');
  const content = document.querySelectorAll('.content');
  const containerAllPages = document.querySelector('.container');
  
  let activeLink = navLinks[0]; // Home
  
  navLinks.className = "";
  
  navLinks.forEach(function(navLink) {
      for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].className = "hover";
      }
  
      //active home page in begin
      activeLink.className = "hover-active";
      document
      .getElementById(activeLink.href.split('#').pop())
      .className = "active content";
    navLink.addEventListener('click', function(event) {
      // Deactivate current page
      activeLink.className = "hover";
      document
        .getElementById(activeLink.href.split('#').pop())
        .className = "content";
  
      // Set new page
      activeLink = this;
  
      // Activate new page
      activeLink.className = "hover-active";
      document
        .getElementById(activeLink.href.split('#').pop())
        .className = "active content";
  
      event.preventDefault();
    });
  });

  

