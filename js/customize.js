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
        ease: 'ease'
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
    $('.period_slider').slick({
        // mobileFirst: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
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
        dots: true,
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
    // search
    var _navlist = $('.header .navigation .navlist ul')
    _navlist.find('.searchbtn').click(function() {
        $(this).siblings('.search').stop().slideToggle();
        $(this).parent('li').siblings().find('.list_second').slideUp();
    })
    // emailbtn
    _navlist.find('.emailbtn').click(function() {
        $(this).siblings('.list_second').stop().slideToggle();
        $(this).parent('li').siblings().find('.search').slideUp();
    })
    // 點外面關閉
    $(document).on('touchend click', function(e) {
        var container = $(".header .navigation .navlist ul li a.searchbtn ,.header .navigation .navlist ul li a.emailbtn");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header .navigation .navlist ul li .list_second ,.header .navigation .navlist ul li .search').slideUp();
        }
    });
    // fast_btn 快捷列
    $('.fast_btn').click(function() {
        $('.fastbtn_blcok').toggleClass('open');
    })
    // 
    $('.picslider').slick({
        arrows: false,
        dots: true,
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
        }]
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
$('.search_btn').off().click(function(e) {
    $('.table_list_search_block .table_list_search').stop().slideToggle();
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
        var _scrollTop = $(this).offset().top - 55;
        _qaItem.each(function() {
            function qa(e) {
                $('html, body').stop(true, true).animate({ scrollTop: _scrollTop }, 800, 'easeOutExpo');
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
    $('.advanced_search_block .advanced_search,.table_list_search_block .table_list_search').hide();
    $('.search_btn').off().click(function(e) {
        $('.advanced_search_block .advanced_search,.table_list_search_block .table_list_search').stop().slideToggle();
        e.preventDefault();
    });
});
// 首頁影音
$(function() {
    $('.video_content a.close').click(function() {
        $(this).parents('.mpvideo').hide();
    })
})
// 高等柱狀圖
$(function() {
    var chart = {
        type: 'column'
    };
    var title = {
        text: '移付調解事件調解成立件數'
    };
    var subtitle = {
        text: '99-109年度'
    };
    var xAxis = {
        categories: ['105年', '106年', '107年', '108年', '109年1-9月'],
        crosshair: true
    };
    var yAxis = {
        min: 0,
        title: {
            text: '件數'
        }
    };
    var tooltip = {
        formatter: function() {
            return '<b>' + this.x + '</b><br/>' + Highcharts.numberFormat(this.point.y, 0, ".", ",") + '件';
        }
    };
    var plotOptions = {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    };
    var credits = {
        enabled: false
    };
    var legend = {
        enabled: false
    };
    var exporting = {
        enabled: false
    };
    var series = [{
        data: [468, 515, 701, 840, { y: 565, color: "#00a39b" }]
    }];
    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.legend = legend;
    json.plotOptions = plotOptions;
    json.credits = credits;
    json.exporting = exporting;
    $('#chart').highcharts(json);
})