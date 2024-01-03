$(function () {
    //
    var burger = $('.mobile_button').find('.btn');
    sidebar = $('.sidebar');

    burger.off().click(function (e) {
        sidebar.stop().toggleClass('menu-opened');
        $(this).blur();
        e.preventDefault();
    });
    // kv
    var $carousel = $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        pauseOnHover: false,
    });

    $carousel.find('.slick-current').addClass('start');
    setTimeout(function () {
        $carousel.find('.start').removeClass('start');
    }, 0);
    // reveal
    var currentIndex = 0;
    var rowsArray = [['Tap Into', 'the Possibilities'], ['Empower', 'Your Future'], ['Be One of Us']];
    $('.strip').each(function () {
        var $t = $(this),
            rows = rowsArray[currentIndex];

        $t.html('');
        $.each(rows, function (i, val) {
            $('<span class="row"></span>').appendTo($t);
            var letters = $.trim(val).split('');
            $.each(letters, function (j, v) {
                v = v == ' ' ? '&nbsp;' : v;
                $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
            });
        });
    });

    function h3Reveal() {
        for (i = 0; i < $('.strip span').length; i++) {
            (function (ind) {
                setTimeout(function () {
                    $('.strip span:not(".row")').eq(ind).toggleClass('animate');
                }, ind * 40);
            })(i);
        }
    }

    function switchRows() {
        currentIndex = (currentIndex + 1) % rowsArray.length;
        $('.strip').each(function () {
            var $t = $(this),
                rows = rowsArray[currentIndex];

            $t.html('');
            $.each(rows, function (i, val) {
                $('<span class="row"></span>').appendTo($t);
                var letters = $.trim(val).split('');
                $.each(letters, function (j, v) {
                    v = v == ' ' ? '&nbsp;' : v;
                    $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
                });
            });
        });
        h3Reveal();
    }

    h3Reveal(); // Initial animation
    setInterval(switchRows, 5000); // Switch rows every 3 seconds
    //faq
    $('.faq_block ul li h3 a').each(function () {
        $(this).click(function (e) {
            $(this).parents('li').siblings().find('h3 a').stop().removeClass('open');
            $(this).stop().toggleClass('open');
            $(this).parents('.faq').find('.faq_content').slideUp();
            $(this).parent().siblings('.faq_content').stop().slideToggle();
            $(this).blur();
            e.preventDefault();
        });
    });
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    // header scroll fixed
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop')
        .off()
        .click(function (e) {
            $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutExpo');
            e.preventDefault();
        });

    // var burger = $('.mobile_button').find('.btn');
    // sidebar = $('.sidebar');

    // burger.off().click(function (e) {
    //     sidebar.stop().toggleClass('menu-opened');
    //     $(this).blur();
    // });

    //lazyload
    var lazyLoadInstance = new LazyLoad({
        elements_selector: 'img.lazy',
        //placeholder: '/images/basic/placeholder.gif',
        effect: 'fadeIn',
        fadeTime: 600,
        threshold: 0,
    });
    // 人才發展slider
    $('.talent').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.job_description').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.know_auo').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $('.auo_environment').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.auo_culture').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.auo_value').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    //tabs culture
    function initializeTabs(tabSelector, contentSelector, refreshFunctions) {
        var clickedTab = $(tabSelector + ' > .active');
        var tabWrapper = $(contentSelector);
        var activeTab = tabWrapper.find('.active');
        var activeTabHeight = activeTab.outerHeight();
        activeTab.show();

        $(tabSelector + ' > li').on('click', function () {
            $(tabSelector + ' > li').removeClass('active');
            $(this).addClass('active');
            clickedTab = $(tabSelector + ' .active');
            activeTab.fadeOut(250, function () {
                $(contentSelector + ' > div').removeClass('active');
                var clickedTabIndex = clickedTab.index();
                $(contentSelector + ' > div')
                    .eq(clickedTabIndex)
                    .addClass('active');
                activeTab = $(contentSelector + ' > .active');
                activeTabHeight = activeTab.outerHeight();
                tabWrapper
                    .stop()
                    .delay(50)
                    .animate(500, function () {
                        activeTab.delay(50).fadeIn(250);

                        // Call the specified refresh functions
                        refreshFunctions();
                    });
            });
        });
    }

    // Example usage for two sets of tabs with different refresh functions
    initializeTabs('.tab_items1', '.tab__content1', function () {
        $('.talent').slick('refresh');
        $('.job_description').slick('refresh');
        $('.know_auo').slick('refresh');
    });

    initializeTabs('.tab_items2', '.tab__content2', function () {
        $('.auo_environment').slick('refresh');
        $('.auo_culture').slick('refresh');
        $('.auo_value').slick('refresh');
    });
    // fixed q_btn
    $('.q_btn_01')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.intro').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_02')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.job_categories').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_03')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.compensation').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_04')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.development').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_05')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.culture').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_06')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.process').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_07')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.social_media').offset().top - 50 }, 800, 'easeOutExpo');
            e.preventDefault();
        });
    $('.q_btn_search')
        .off()
        .click(function (e) {
            $('html, body')
                .stop(true, true)
                .animate({ scrollTop: $('.job_search').offset().top - 150 }, 800, 'easeOutExpo');
            sidebar.stop().removeClass('menu-opened');
            e.preventDefault();
        });
    // 職缺搜尋
    $('select[multiple].active.conditionSelect').multiselect({
        columns: 2,
        placeholder: '職務類別',
        search: false,
        searchOptions: {
            default: '搜尋',
        },
        selectAll: true,
    });

    $('select[multiple].active.regionSelect').multiselect({
        columns: 2,
        placeholder: '地區',
        search: false,
        searchOptions: {
            default: '搜尋',
        },
        selectAll: true,
    });
    $('<span class="heading">RD</span>').insertBefore('#ms-list-1 ul li[data-search-term="製程開發"]');
    $('<span class="heading">BU</span>').insertBefore('#ms-list-1 ul li[data-search-term="業務"]');
    $('<span class="heading">IU</span>').insertBefore('#ms-list-1 ul li[data-search-term="人力資源管理"]');
    $('<span class="heading">CIM/IT</span>').insertBefore('#ms-list-1 ul li[data-search-term="資訊工程"]');
    $('<span class="heading">OU</span>').insertBefore('#ms-list-1 ul li[data-search-term="製程設備"]');
    $('<span class="heading">SCM</span>').insertBefore('#ms-list-1 ul li[data-search-term="運籌管理"]');
    $('<span class="heading">Technician</span>').insertBefore('#ms-list-1 ul li[data-search-term="技術員"]');
    $('<span class="heading">Technologist</span>').insertBefore('#ms-list-1 ul li[data-search-term="設備技師"]');
    $('<span class="heading">Other</span>').insertBefore('#ms-list-1 ul li[data-search-term="其他"]');
    $('<span class="heading">SDM</span>').insertBefore('#ms-list-1 ul li[data-search-term="產品開發"]');
});
$(document).ready(function () {
    // 在網頁載入時或進入 viewport 時觸發程式碼
    $(window)
        .on('load resize scroll', function (e) {
            var window_H = $(window).innerHeight();
            var windowTop = $(window).scrollTop();
            $('.mask').each(function (index, el) {
                // 可以+130 讓圖進入多點再跑動畫
                var itemTop = Math.floor($(this).offset().top - windowTop + 130);
                // itemTop < window_H 是指進入到最底部
                // itemTop > 0 是指還沒滾到最上方
                // 同時條件成立 代表物件在看得到的地方才會 trigger 動畫
                if (itemTop < window_H && itemTop > 0) {
                    $(this).addClass('effect');
                }
            });
        })
        .trigger('scroll'); // 這裡觸發一次 scroll 事件，確保一開始就檢查元素是否在視窗內
});
