const API_KEY = "6ce8b0afed704347b0d603cdc9db3e14";
const map = new Map();
map.set("-2", "msnbc.com, vox.com");
map.set("-1", "cnn.com, npr.org"); //CHECK NPR WORKS
map.set("0", "forbes.com, wsj.com");
map.set("1", "nypost.com, washingtonexaminer.com")
map.set("2", "foxnews.com, thefederalist.com")

let articles;
async function getArticles(rating, keyWord, returnType, page) {
  var url =
    "https://newsapi.org/v2/everything?" +
    "domains=" +
    map.get(rating) +
    "&pageSize=1" +
    "&sortBy=relevancy" +
    //'&from=' + yyyy + '-' + mm + '-' + dd +
    "&q=" +
    keyWord +
    "&page=" +
    page +
    "&apiKey=" +
    API_KEY;

  var req = new Request(url);

  const response = await fetch(req);

  const data = await response.json();

  if (data.articles && data.articles.length > 0) {
    const articleUrls = data.articles.map((article) => article[returnType]);
    return articleUrls;
  } else {
    return [];
  }
}

(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.nav-bar').addClass('nav-sticky');
        } else {
            $('.nav-bar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Top News Slider
    $('.tn-slider').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Category News Slider
    $('.cn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    
    // Related News Slider
    $('.sn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    let articles = getArticles("2", "science", "url", 1);
    console.log(articles);
})(jQuery);

