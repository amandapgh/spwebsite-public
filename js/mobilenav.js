$('mobile-navbar').hide();

$('#hamburger-popout').click(function(){
  $('#mobile-navbar').toggle("slide", { direction: "right" });
  $('#hamburger').toggleClass("hamburgerWhite");
});

// $('#menu-hamburger-popout').click(function(){
//   $('#mobile-navbar').show("slide", { direction: "right" });
// });

$('#mobile-navbar').on('click', 'a', function() {
  $('#mobile-navbar').toggle("slide", { direction: "right" });
  $('#hamburger').toggleClass("hamburgerWhite");
});
