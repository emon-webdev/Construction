(function($) {
        "use strict";

         // 01. PreLoader Js

   // 01. PreLoader Js
   $(window).on('load',function() {

    $(".bounce-loading").fadeOut(1000);

});



        //meanmenu
        jQuery('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
        });

    $('.info-bar').on('click',function(){
        $('.extra-info').addClass('info-open');
    })

    $('.close-icon').on('click',function(){
        $('.extra-info').removeClass('info-open');
    })


    //slider-active
        // $('.slider-active').slick({
        //     dots: false,
        //     arrows: false,
        //     infinite: false,
        //     speed: 300,
        //     arrows:false,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     responsive: [{
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1,
        //                 infinite: true,
        //                 dots: false
        //             }
        //         },
        //         {
        //             breakpoint: 600,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1
        //             }
        //         },
        //         {
        //             breakpoint: 480,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1
        //             }
        //         }
        //     ]

        // });

    //slider-active
        function mainSlider() {
            var BasicSlider = $('.slider-active');

            BasicSlider.on('init', function(e, slick) {
                var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });

            BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });

            BasicSlider.slick({
                autoplay: false,
                autoplaySpeed: 1000,
                dots: true,
                fade: true,
                arrows: false,
                responsive: [
                    { breakpoint: 767, settings: { dots: false, arrows: false } }
                ]
            });
    
            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function() {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function() {
                        $this.removeClass($animationType);
                    });
                });
            }
        }
        mainSlider();
        
      





        //blog-active
        
        $('.blog-active').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            arrows:false,
            // autoplay:true,
            // autoplaySpeed:1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // instead of a settings object
            ]

        });

        //testimonial-active
        
        $('.testimonial-active').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            arrows:false,
            // autoplay:true,
            // autoplaySpeed:1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // instead of a settings object
            ]

        });

        //brand-active
        $('.brand-active').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            arrows:false,
            // autoplay:true,
            // autoplaySpeed:1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
                // instead of a settings object
            ]

        });

        //
        $('.testimonial-item-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.testimonial-nav'
          });

          $('.testimonial-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-item-active',
            dots: false,
            centerMode: true,
            centerPadding: '0px',
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
          });


        // portfolio
        var grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
              // use outer width of grid-sizer for columnWidth
              columnWidth: '.grid-item'
            }
          })

          $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({ filter: filterValue });
          });

        //for menu active class
        $('.portfolio-menu button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });


        //magnificPopup
        $('.view-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
              },
          });

          //counter
          $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

    //niceSelect
         $('select').niceSelect();


        //  scrol
         $.scrollUp({
            scrollText: '<i class="fas fa-chevron-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });  
    


})(jQuery);