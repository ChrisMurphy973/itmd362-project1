jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  function allInputs() {
    var a = document.forms["form-one"]["first-name"].value;
    var b = document.forms["form-one"]["last-name"].value;
    var c = document.forms["form-one"]["email"].value;
    var d = document.forms["form-one"]["phone"].value;
    var e = document.forms["form-one"]["DoB"].value;
    if ((a == "") || (b == "") || (c == "") || (d == "") || (e == "")){
      alert("Make sure all sections are properly filled out.");
    }
    else{
      alert("Sign up success! We can't wait to explore the stars with you!");
    }
  }
  