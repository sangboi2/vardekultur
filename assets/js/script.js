function smoothScroll()
{
    var menu = document.querySelectorAll("#site-nav a");

    for (var i = 0; i < menu.length; i++)
    {
      menu[i].addEventListener("click", function(event)
        {
          event.preventDefault();

          var aElm = event.target.getAttribute("href");

          var selectedSection = document.querySelector(aElm);

          if(window.scrollY < selectedSection.offsetTop)
              {
                //scrolldown
                scrollTo(selectedSection.offsetTop, 20);
              }
          else if(window.scrollY > selectedSection.offsetTop);
              {
                //scrollup
                scrollTo(selectedSection.offsetTop, -20);
              }
        });
      }
    }

function scrollTo(destination, step)
  {
    setTimeout (function()
        {
          if(step > 0 && window.scrollY < destination)
              {
                window.scrollBy(0, step);
                scrollTo(destination, step);
              }
          else if (step <= 0 && window.scrollY > destination)
              {
                window.scrollBy(0, step);
                scrollTo(destination, step);
              }
      },  1);

    }

smoothScroll();

<<<<<<< HEAD
/*-------- slider --------*/

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // ændre blillede hvert 4 sekund
}

/*-------- slider- slut --------*/
=======
//Button showing info godt at vide

function showInfo() {
  var x = document.getElementById("info1");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
>>>>>>> Vy-godt-at-vide
