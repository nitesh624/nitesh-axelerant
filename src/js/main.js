$(document).ready(function() {
  $('.toggle-menu').click(function() {
    $('ul').toggleClass('active');
  });

  $('.toggle-menu-2').click(function() {
    $('nav__links').toggleClass('active-2');
  });
});
