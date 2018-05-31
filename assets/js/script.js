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

/*FORBEDRINGER TIL DELTAG STARTER HER!!!*/

var delModal = document.getElementById("modaldeltag");

var pressShow = document.getElementById("visforbedring");


pressShow.onclick = function() {
  delModal.style.display = "block";
  console.log("this works");
}

/*FORBEDRINGER TIL DELTAG SLUTER HER!!!*/

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
