$(function () {
  $('.slider').slick({
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: true,
    dots: true,
  }).slickAnimation();

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
  });

  function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  }
  
  //menu click
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("click", navHighlighter);

  function navHighlighter() {
    
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      // sectionId = current.getAttribute("id");
      
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item").classList.add("active");
      } else {
        document.querySelector(".side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item.active").classList.remove("active");
      }
    });
  }

  //menu scroll
  $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop() + 250;
		$('.component-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item.active').removeClass('active');
						$('.side-bar-menu-wrapper .side-bar-menu .side-bar-menu-item').eq(i).addClass('active');
				}
		});
}).scroll();

//language
$('.language-content').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
});

var $slickElement = $('.slick-carousel');
  var $status = $('.pagingInfo');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

    if(!slick.$dots){
      return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;

    $status.text(i + '/' + (slick.$dots[0].children.length));

  });

  $slickElement.slick({
    infinite: true,
    centerMode: false,
    slidesToShow: 4,
    arrows: true, 
    dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  });

//represent
var t = ".card-container .card-item"
, e = ".progress-bar"
, r = 5e3
, n = []
, o = document.querySelectorAll(t);
if (o.length) {
  for (var i = 0; i < o.length; i++)
      n.push({
          card: o[i],
          progressBar: o[i].querySelector(e)
      });
  var s = performance.now()
    , a = 0;
  n[a].card.classList.add("active"),
  n[a].progressBar.classList.add("active"),
  window.requestAnimationFrame((function o(i) {
      var c, l;
      i - s > r && (null === (c = document.querySelector("".concat(t, ".active"))) || void 0 === c || c.classList.remove("active"),
      null === (l = document.querySelector("".concat(t, " ").concat(e, ".active"))) || void 0 === l || l.classList.remove("active"),
      s = performance.now(),
      ++a === n.length && (a = 0),
      n[a].card.classList.add("active"),
      n[a].progressBar.classList.add("active")),
      window.requestAnimationFrame(o)
  }
  )),
  window.addEventListener("load", (function() {
      jQuery(window).width() < 769 ? jQuery(".card-container").slick({
          dots: !0,
          infinite: !0,
          fade: !0,
          cssEase: "linear",
          speed: 1e3,
          arrows: !1,
          autoplay: !0
      }) : jQuery(".card-container.slick-slider").slick("unslick")
  }
  ))
}

//progress
var t = ".progress-container .card-item"
, e = ".progress-bar"
, r = 5e3
, n = []
, o = document.querySelectorAll(t);
if (o.length) {
  for (var i = 0; i < o.length; i++)
      n.push({
          card: o[i],
          progressBar: o[i].querySelector(e)
      });
  var s = performance.now()
    , a = 0;
  n[a].card.classList.add("active"),
  n[a].progressBar.classList.add("active"),
  window.requestAnimationFrame((function o(i) {
      var c, l;
      i - s > r && (null === (c = document.querySelector("".concat(t, ".active"))) || void 0 === c || c.classList.remove("active"),
      null === (l = document.querySelector("".concat(t, " ").concat(e, ".active"))) || void 0 === l || l.classList.remove("active"),
      s = performance.now(),
      ++a === n.length && (a = 0),
      n[a].card.classList.add("active"),
      n[a].progressBar.classList.add("active")),
      window.requestAnimationFrame(o)
  }
  )),
  $(window).width() < 769 ? jQuery(".progress-container").slick({
	dots: !0,
	infinite: !0,
	fade: !0,
	cssEase: "linear",
	speed: 1e3,
	arrows: !1,
	autoplay: !0
}) : jQuery(".progress-container .slick-slider").slick("unslick")
}


});

