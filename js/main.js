// JavaScript source code
var currentLanguage = "";

$(document).ready(function () {
    currentLanguage = $("#hfLanguage").val();

    setArrow();
    //$("#locationAreasSelect").select2({
    //    placeholder: selectTheNearestArea,
    //    allowClear: true,
    //    dir: languageDirection
    //});

    $("#locationAreasSelect").change(function () {
        selectedValue = $(this).val();
        $(".searchResult tr").each(function () {
            if ($(this).hasClass(selectedValue + "Container")) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $(".carousel .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        navText: ["<img class='sliderLeftArrow' src='/images/slider-arrow.png'>", "<img class='sliderRightArrow' src='/images/slider-arrow.png'>"],
        items: 1,
        rtl: isRtl
    });
    $(".partners .owl-carousel").owlCarousel({
        loop: true,
        margin: 35,
        dots: false,
        //autoWidth:true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 70
            },
            768: {
                items: 2,
                stagePadding: 70
            },
            992: {
                items: 4
            }
        },
        rtl: isRtl
    });
    //$(".productsContainer").swiperight(function () {
    //    $('.prevArrow').trigger('click');
    //});

    //$(".productsContainer").swipeleft(function () {
    //    $('.nextArrow').trigger('click');
    //});

    // $('.prevArrow').click(function () {
    //     $('.tabDot.active').each(function () {
    //         var thisDot = $(this);
    //         if (thisDot.prev().length === 0) {
    //             thisDot.parent().find('.tabDot:last').find('a').trigger('click');
    //         } else {
    //             $(this).prev().find('a').trigger('click');
    //         }
    //         $(this).removeClass('active');
    //     });
    //     setArrow();
    // });

    // $('.nextArrow').click(function () {
    //     $('.tabDot.active').each(function () {
    //         var thisDot = $(this);
    //         //if (thisDot.hasClass('active')) {
    //         if (thisDot.next().length === 0) {
    //             thisDot.parent().find('.tabDot:first').find('a').trigger('click');
    //         } else {
    //             $(this).next().find('a').trigger('click');
    //         }
    //         $(this).removeClass('active');
    //     });
    //     setArrow();
    // });

    // $(".nav-pills li").click(function (element) {
    //     $('.nav-pills li').removeClass('active');
    //     $('.tab-pane').removeClass('active');
    //     var selectionClass = $(this).children('a').attr('href');
    //     selectionClass = selectionClass.replace('#', '') + 'Class';
    //     $('.' + selectionClass).addClass('active in');
    //     //alert("changed");
    //     setArrow();
    //     return true;
    // });

    function setArrow() {
        $('.downArrow').hide();
        $('.nav-pills li').each(function (element) {
            if ($(this).hasClass('active')) {
                $(this).find('.downArrow').show();
            }
        });
    }

    // $(window).scroll(function () {
    //     var divStart = $('.categories').offset().top, //productsListing
    //         divHeight = $('.categories').outerHeight(), //productsListing
    //         windowHeight = $(window).height(),
    //         windowTop = $(this).scrollTop();
    //     if (windowTop > (divStart + divHeight - windowHeight) /*&& (divStart > windowTop)*/ && (windowTop + windowHeight > divStart + divHeight)) {
    //         $('.animateLeftTop').addClass('animate_moveInLeftTop');
    //         $('.animateLeftBottom').addClass('animate_moveInLeftBottom');
    //         $('.animateRightTop').addClass('animate_moveInRightTop');
    //         $('.animateRightBottom').addClass('animate_moveInRightBottom');
    //         $('.productsContainer').each(function (index) {
    //             $(this).find('.productBox').each(function (index) {
    //                 var x = (index * 0.2) + 0.2;
    //                 var delayTime = x + 's';
    //                 $(this).css({ "animation": "myFadeIn 0.25s linear forwards", "animation-delay": delayTime });
    //             });
    //         });
    //     }
    // });

    $('.tab-pane').on('touchstart', function (event) {
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function (event) {
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;
            //alert(currentLanguage);
            if (currentLanguage === "ar") {
                if (Math.floor(xClick - xMove) > sensitivityInPx) {
                    $('.prevArrow').trigger('click');
                }
                else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                    $('.nextArrow').trigger('click');
                }
            } else {

                if (Math.floor(xClick - xMove) > sensitivityInPx) {
                    $('.nextArrow').trigger('click');
                }
                else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                    $('.prevArrow').trigger('click');
                }
            }

        });
        $(this).on('touchend', function () {
            $(this).off('touchmove');
        });
    });

    $("#goTop").click(function (element) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

});
// new slider
var newSlider = $('.news_slider') ;
	$('.news_slider').owlCarousel({
        center: true,
		autoplay:true,
		loop:true,
		margin:10,
		responsive:{
			0:{
				items:2
			},
			420:{
				items:2
			},
			768:{
				items:2
			},
			992:{
				items:4,
			}
		}
	});
    newSlider.ready(function() {
        for (let slider = 0; newSlider < newSlider.length; slider++) {
            $('.owl-item.active .item:last-child').css('border-right','0');
            
        }
    });
	// video slider
var videoSlider = $('.video_slider') ;
	videoSlider.owlCarousel({
		loop:true,
		video:true,
        nav:true,
        navText: ["<img class='sliderLeftArrow' src='images/slider-arrow.png'>", "<img class='sliderRightArrow' src='images/slider-arrow.png'>"],
		margin:10,
		responsive:{
            0:{
                items:1

            },
			420:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:3
			}
		}
	});
	
    // image function
    /*---background image---*/
	function dataBackgroundImage() {
		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(' + bgImgUrl + ')', // + meaning concat
			});
		});
    }
    
    $(window).on('load', function () {
        dataBackgroundImage();
    });
    // swiper slider
    const myMainSlider = document.querySelectorAll('.mainSlider');
        const myGalleryThumbs = document.querySelectorAll('.galleryThumbs');
        for (swiperCounter = 0; swiperCounter < myMainSlider.length; swiperCounter++) {
            myMainSlider[swiperCounter].classList.add('mainSlider' + swiperCounter);
            myGalleryThumbs[swiperCounter].classList.add('galleryThumbs' + swiperCounter);

            var galleryThumbs = new Swiper('.galleryThumbs' + swiperCounter , {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });

            var mainSlider = new Swiper('.mainSlider' + swiperCounter, {
                spaceBetween: 10,
                loop:true,
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: galleryThumbs
                },
            }); 
        }

