$(document).ready(function(){
    //Single Item 
    $('.single-item').slick({
          infinite: true,
          arrows: true
    });
    
    //Multiple item
     $('.multiple-item').slick({
        infinite: true,
        slidesToShow: 3, 
        slidesToScroll: 3 //NUMBER OF SLIDES YOU WANT TO JUMP ON SINGLE SCROLL/CLICK.
    });
    
    //Responsive slider
    $('.responsive-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
    
    //Autoplay Slider
    $('.autoplay-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000, //DELAY BEFORE NEXT SLIDE IN MILISECONDS
      speed: 800 //SPEED OF THE SLIDER CHANGE
    });
    
    //Center item Slider
    $('.center-item-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    
    //Lazy loading Slider
    $(".lazy-loader-slider").slick({
      // To use lazy loading, set a data-lazy attribute
  // on your img tags and leave off the src
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1
    });
    
    //Fade Image Slider
    $('.fade-slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    
    //Event Handlers
     $('.events-slider').slick({
          infinite: false,
          arrows: true
    });
    
    // On swipe event
    $('.events-slider').on('swipe', function(event, slick, direction){
      //Direction : direction of the current slide(swipe direction).
      console.log(direction);
    });
  
    // On edge hit
    $('.events-slider').on('edge', function(event, slick, direction){
      //Edge: last slide of the slider when infinity=false
      console.log('edge was hit');
    });
    
    // On before slide change
    $('.events-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide: index of current slide
    //nextSlide: index of next slide
      console.log("Next Slide:",nextSlide);
    });
  });