$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});

function typeEffect(element, speed) {
  var text = $(element).text();
  $(element).html('');

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      $(element).append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

$(document).ready(function () {
  var speed = 75;
  var delay = $('.title-header').text().length * speed + speed;
  typeEffect($('.title-header'), speed);
  setTimeout(function () {
    $('.subtitle-header').css('display', 'block');
    typeEffect($('.subtitle-header'), speed);
  }, delay);
});
