$('.wq-depoimentos-carrousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear'
});

$('.wq-case-carousel').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });

  $('.wq-certificacoes-wrapper').slick({
    slidesToShow: 5,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });

  $('.depoimentos-carousel').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('.wq-carousel-depoimentos').slick({
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $('.wq-carousel-site').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
            }
          }
        ]
    });

    