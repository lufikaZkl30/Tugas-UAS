
// navbar stay
$(document).ready(function() {
  var navbar = $(".navbar");

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
      navbar.addClass("fixed-top");
    } else {
      navbar.removeClass("fixed-top");
    }
  });
});




// button on to halaman baru
  document.getElementById('btn-explore').addEventListener('click', function() {
    window.location.href = 'index.html';
});
