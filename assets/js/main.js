// wrap_hero_slider start
$('.wrap_hero_slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  arrows: true,
  nextArrow: '.right_arrow',
  prevArrow: '.left_arrow',
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1

    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
// wrap_hero_slider end


// slider_check_now_strat
$('.slider_check_now').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: false,
  nextArrow: '.right_arrow2',
  prevArrow: '.left_arrow2',
  variableWidth: true,
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
// slider_check_now_strat



// about_slider start
$('.about_slider').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  nextArrow: '.right_arrow3',
  prevArrow: '.left_arrow3',
  variableWidth: true,
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
// about_slider end

