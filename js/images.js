(function () {

  var destinationSlider = document.querySelectorAll('.destination-company');

  if ( destinationSlider.length > 0 ) {
    var desSlider = tns({
      container: ".destination-company",
      mouseDrag: true,
      items: 1,
      axis: "horizontal",
      swipeAngle: false,
      speed: 700,
      edgePadding: 50,
      nav: true,
      gutter: 30,
      autoplay: true,
      autoplayButtonOutput: false,
      responsive: {
        350: {
          items: 1
        },
        
        500: {
          items: 2
        },
        600: {
          items: 3
        },
        900: {
          items: 5
        }
      },
    })
  }

})();