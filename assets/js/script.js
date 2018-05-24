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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
