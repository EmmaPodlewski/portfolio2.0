//Burger Menu

$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});


// Nav Position

$(document).ready(function () {
  var isMobile;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
  };
  var navPos = $('nav').position().top;
  var lastPos = 0;
  var lockTimer

  $(window).on('scroll', function () {

    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    if (!isMobile) {
      if (pos >= navPos + $('nav').height() && lastPos < pos) {
        $('nav').addClass('sticky');
      }
      if (pos < navPos && lastPos > pos) {
        $('nav').removeClass('sticky');
      }
      lastPos = pos;
    }

    if (pos2 > $('#home').offset().top) { highlightLink('home'); }
    if (pos2 > $('#expertise').offset().top) { highlightLink('expertise'); }
    if (pos2 > $('#aboutus').offset().top) { highlightLink('aboutus'); }
    if (pos2 > $('#portfolio').offset().top) { highlightLink('portfolio'); }
    if (pos2 > $('#contact').offset().top ||
      pos + $(window).height() === $(document).height()) {
      highlightLink('Contact');
    }
  });
});

function highlightLink(anchor) {
  $('navbar-item .is-active').removeClass('is-active');
  $("a").find('[navbar-item="' + anchor + '"]').addClass('is-active');
}

// Header Type Effect

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


// Portfolio tab selection

function showSelected(event, skill) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("is-active ", "");
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  skills = document.getElementsByClassName(skill);
  for(i=0; i < skills.length; i++) {
    skills[i].style.display = "block";
  }
  event.currentTarget.className += " is-active";
}
