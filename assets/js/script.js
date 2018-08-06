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


/*-------- hamburger menu --------*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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

/* ---  modal  --- */

function closeModal() {
    // Find alle modals
    var modals = document.getElementsByClassName("modal");

    // Sæt display til none for alle
    for(var i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}

var openModal = function() {
    // Få værdien af data-target fra den knap der blev trykket på (this)
    var modalID = this.getAttribute("data-target");

    // Find modal elementet med tilsvarende værdi
    var modal = document.querySelectorAll("[data-modal='" + modalID + "']")[0];

    // Sæt den specifikke modals display til block
    modal.style.display = "block";
}

// Find alle elementer med class "modal-button"
var buttons = document.getElementsByClassName("modal-button");

// For hver af dem, addEventListener - hvis der klikkes, kører openModal funktionen
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", openModal, false);
}
/* Modal - slut*/

/* Godt at vide start*/
function showInfo1() {
  var x = document.getElementById("info1");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function showInfo2() {
  var x = document.getElementById("info2");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function showInfo3() {
  var x = document.getElementById("info3");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function showInfo4() {
  var x = document.getElementById("info4");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function showInfo5() {
  var x = document.getElementById("info5");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function showInfo6() {
  var x = document.getElementById("info6");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function showInfo7() {
  var x = document.getElementById("info7");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

function showInfo8() {
  var x = document.getElementById("info8");
  if (x.style.display == "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

/* godt at vide slut */
