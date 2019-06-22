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

$("#comment-form").submit(function(e) {
  e.preventDefault();

  let name = $("#name").val();
  let email = $("#email").val();
  var comment = $("#comment")[0].value;

  var passed = true;

  if (passed === true && name.length < 4) passed = 'Name require 4 character at minimum to input!';
  if (passed === true && comment.length < 6) passed = 'Comment require 6 character to input!';
  if (passed === true && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) passed = 'Please input a valid email!';

  if (passed === true) {
    var d = new Date();
    var o = {year:'numeric', month:'2-digit', day:'2-digit'};
    var e = d.toLocaleDateString('en-US', o);

    $(".comments").append('<blockquote class="shortcodes" style="margin-bottom:1em"><div class="blockquote-text" style="font-style: normal;"><b>'+name+'</b> - '+e+' <br>'+comment+'</div></blockquote>');
    $("#name").val('');
    $("#email").val('')
    $("#comment").val('');
  } else {
    alert(passed); return false;
  }
})
