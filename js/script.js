/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var navbar = $("nav")
var navbarOffset = navbar.offset()
var noActivity;

function setActivity() {
  noActivity = setTimeout(function() {
    alert("Klik OK ya, biar aku tau kalo kamu masi di situ :')");
      }, 30 * 1000)
}

function resetActivity() {
  clearTimeout(noActivity);
    setActivity();
}

$(document).mouseover(resetActivity)

$(window).scroll(function() {
  if (window.pageYOffset >= navbarOffset.top) {
    navbar.addClass("sticky")
  } else {
    navbar.removeClass("sticky")
  }
  if ($(this).scrollTop() >= 50) {
    $('#return-to-top').fadeIn(200)
  } else {
    $('#return-to-top').fadeOut(200)
  }
})
