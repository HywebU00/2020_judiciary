// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 廣告輪播1
    $('.adSlider').slick({
        // mobileFirst: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 廣告輪播2
    $('.adSlider2').slick({
        // mobileFirst: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 670,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 廣告輪播3
    $('.adSlider3').slick({
        // mobileFirst: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 670,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 430,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 廣告輪播4
    $('.adSlider4').slick({
        // mobileFirst: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 660,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 司法親民
    $('.closepeople_slider').slick({
        // mobileFirst: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 司法親民
    $('.closepeople_slider2').slick({
        // mobileFirst: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // 今日排定庭期    
    $('.period_slider2').slick({
        // mobileFirst: true,
        dots: false,
        infinite: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }],
    });
    $('.period_slider3').slick({
        // mobileFirst: true,
        dots: false,
        infinite: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    $(".period_slider").each(function(idx, item) {
        $(this).slick({
            initialSlide: parseInt($(this).attr("data-index")),
            dots: true,
            infinite: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrow: true,
            customPaging: function(slider, i) {
                var title = $(slider.$slides[i]).find('.title').html().trim();
                return $('<button type="button" aria-label="' + title + '"/>').text(title);
            }
        });
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // 
    // 
    $('.cppic_slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }],
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt');
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // cp_photo
    // $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
    //   var i = (currentSlide ? currentSlide : 0) + 1;
    //   $('.controls').html(i + '/' + slick.slideCount);
    // });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: false,
        // autoplaySpeed: 2000,
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: false,
        arrows: true,
        autoplay: false,
        focusOnSelect: true,
        infinite: true,
    });
    // 熱門服務
    $('.services_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 我該知道什麼
    $('.issue_list').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    // 無障礙tab電子信箱
    $('.list_second').find('li:last>a').focusout(function() {
        $('.list_second').hide();
    });
    var _navlist = $('.header .navigation .navlist ul')
    // 無障礙tab查詢
    if ($('.keywordHot>ul>li').length == 0) {
        $('.btn_grp input').focusout(function() {
            $('.navlist .search').hide();
        });
    } else {
        $('.navlist .search .keywordHot').find('li:last>a').focusout(function() {
            $('.navlist .search').hide();
        });
    }
    // 
    if ($('.navlist .search .btn_grp').length == 0) {
        $('.navlist .search .form_grp ').find('input:last').focusout(function() {
            $('.navlist .search').hide();
        });
    } else {
        $('.navlist .search .btn_grp ').find('input').focusout(function() {
            $('.navlist .search').hide();
        });
    }
    // emailbtn
    var emailStatus = false; // 假的判斷式，先設定沒有開啟
    _navlist.find('.emailbtn').click(function() {
        $(this).siblings('.list_second').stop().slideToggle();
        $(this).parent('li').siblings().find('.search').slideUp();
        emailStatus = true;
    })
    if (emailStatus = true) {
        $('body').keydown(function(e) {
            if (e.keyCode == 27) {
                $('.list_second').slideUp();
            }
        });
    }
    // 手機版emailbtn
    var _navlist_mobile = $('.sidebar .navigation .navlist ul')
    _navlist_mobile.find('.emailbtn').click(function() {
        $(this).siblings('.list_second').stop().slideToggle();
    })
    // 點外面關閉
    $(document).on('touchend click', function(e) {
        var container = $(".header .navigation .navlist ul li a.searchbtn ,.header .navigation .navlist ul li a.emailbtn, .header .navigation .navlist ul li .search");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header .navigation .navlist ul li .list_second ,.header .navigation .navlist ul li .search').slideUp();
        }
    });
    // fast_btn 快捷列
    var fast_btnStatus = false; // 假的判斷式，先設定沒有開啟
    $('.fast_btn').click(function() {
        $('.fastbtn_block').toggleClass('open');
    })
    $('.fast_btn').focusout(function() {
        $('.fastbtn_block').toggleClass('open');
    })
    $('.fastbtn_block ul').find('li:last>a').focusout(function() {
        $('.fastbtn_block').removeClass('open');
    });
    if (fast_btnStatus = true) {
        $('body').keydown(function(e) {
            if (e.keyCode == 27) {
                $('.fastbtn_block').removeClass('open');
            }
        });
    }
    // 
    $('.picslider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }],
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt');
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
});
// 內頁左欄nav
$(function() {
    $('.left_block nav ul>li>a').each(function() {
        $(".left_block nav ul ul").hide();
        $(".left_block nav ul ul li a.active").parent('li').parent('ul').show();

        function leftnav(e) {
            $(this).parent('li').siblings().children('a').removeClass('active');
            $(this).toggleClass('active');
            $(this).parent('li').siblings().children('ul').slideUp();
            $(this).next('ul').slideToggle();
            // e.preventDefault();
        }
        $(this).click(leftnav);
        $(this).keyup(leftnav);
    });
});
// 列表頁-公告
$('.table_list_search_block .search_btn').off().click(function(e) {
    $('.table_list_search_block .table_list_search').stop().slideToggle();
    e.preventDefault();
});
$('.table_list_search_block2 .search_btn').off().click(function(e) {
    $('.table_list_search_block2 .table_list_search').stop().slideToggle();
    e.preventDefault();
});
// 常見問答
$(function() {
    $(".qa_search").click(function(e) {
        $(this).next(".qa_search_block").slideToggle();
        e.preventDefault();
    });
    $('.qa_list>ul>li,.meeting_list>ul>li').each(function() {
        $(this).find('.answer').hide();
        var _qaItem = $(this).children('.question').children('a');
        var _scrollTop = Math.floor($(this).offset().top - 250);
        _qaItem.each(function() {
            function qa(e) {
                $('html, body').stop(true, true).animate({ scrollTop: _scrollTop }, 100, 'easeOutExpo');
                console.log(_scrollTop);
                $(this).parents('li').siblings().children('.question').children('a').removeClass('active');
                $(this).toggleClass('active');
                $(this).parents('li').siblings().children('.answer').slideUp();
                $(this).parent('.question').next('.answer').slideToggle();
                e.preventDefault();
            }
            $(this).click(qa);
            $(this).keyup(qa);
        });
    });
});
// 書狀參考範例
$(function() {
    $('.advanced_search_block .advanced_search').hide();
    $('.advanced_search_block  .search_btn').off().click(function(e) {
        $('.advanced_search_block .advanced_search').stop().slideToggle();
        e.preventDefault();
    });
});
// 首頁影音
$(function() {
    $('.video_content a.close').click(function() {
        $(this).parents('.mpvideo').hide();
    })
})
// 
$('.cp').on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('html, body').stop().animate({ scrollTop: $($.attr(this, 'href')).offset().top - 85 }, 50, 'easeOutExpo');
});
/*-----------------------------------*/
////////////////unimenu////////////////
/*-----------------------------------*/
$('.units_block').hide();
var unitStatus = false; // 假的判斷式，先設定沒有開啟。
function openuni() {
    $('.units_block').css('top', '0px');
    $('.units_block').slideDown(600, 'easeOutQuart');
    $('body').addClass('noscroll');
    $(this).hide();
    // $('nav.units_block .close>a').focus();
    unitStatus = true;
}

function closeuni() {
    $('.units_block').fadeOut(400, function() {
        $(this).css('top', '0px');
    });
    $('body').removeClass('noscroll');
    // $('.navlist>ul>li>a.QA').focus();
}
if (unitStatus = true) {
    $('body').keydown(function(e) {
        if (e.keyCode == 27) {
            closeuni()
        }
    });
}
$('.units_block .close, .units_block .overlay').click(function(event) {
    closeuni();
});
$('.units_block>ul>li:last-child>ul>li:last-child a').focusout(function() {
    closeuni();
});
$('.navlist ul li .unitsbtn').click(function(event) {
    openuni();
});
$('.navlist ul li .unitsbtn').click(function(event) {
    openuni();
});
$('.header .units').click(function() {
    openuni();
})
// 彈出訊息
$(function() {
    var popupStatus = false;
    if ($('body').find('.pop_up_block').length > 0) {
        popupStatus = true;
    }
    if (popupStatus == true) {
        $('body').addClass('fixed');
        $('.pop_up_block').addClass('goin');
        $('.pop_up_block .closebtn').click(function() {
            $('.pop_up_block').fadeOut();
            $('body').removeClass('fixed');
        });
        $('.pop_up_block .overlay').click(function() {
            $('.pop_up_block').fadeOut();
            $('body').removeClass('fixed');
        });
        $('body').keydown(function(e) {
            if (e.keyCode == 27) {
                $(".pop_up_block").fadeOut();
            }
        });
    }
})