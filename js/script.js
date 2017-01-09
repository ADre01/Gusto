$(document).ready(function() {
  
	/*--------------------------------------------------
	common
	--------------------------------------------------*/
    //$('body').removeClass('header-active');

    // $('[data-spy="scroll"]').each(function () {
    //   var $spy = $(this).scrollspy('refresh')
    // });




    $('#ic-menu').click(function(){
        $(this).toggleClass('ic-menu-active');
        $('#main-menu').toggleClass('menu-active');
        $('body').toggleClass('header-menu-active');
    });
    $('.overlay').click(function(){
        $('body').removeClass('header-menu-active');
        $("#ic-menu").removeClass("ic-menu-active");
        $("#main-menu").removeClass("menu-active");
    });




    setTimeout(function(){
        $('.carrer-area').removeClass('preload'); 
    }, 000);





    $('.header').headroom();
    $('.tabs-wrapper').headroom();
    


	/*--------------------------------------------------*/
    scrolling();

    managementShow();
    jobCollapse();

    tabFix();
    servicesTab();
});


/*--------------------------------------------------
 scroll
--------------------------------------------------*/
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
    }
    else {
        $('body').removeClass('header-menu-active');
        $("#ic-menu").removeClass("ic-menu-active");
        $("#main-menu").removeClass("menu-active");
    }
}); 


$(window).resize(function() {
    
});


/*--------------------------------------------------
 all function
--------------------------------------------------*/

function managementShow(){
    var media = window.matchMedia( "(max-width: 768px)" );

    if(!media.matches) {
        $('.management-item').click(function(){
            var re = '';
            var id = '';
            $('.management').toggleClass('item-show');
            $('.management-show .item-content').hide();

            rel = $(this).attr('rel');
            id = '.management-show .item-content[rel="' + rel + '"]';
            $(id).fadeIn();
        });
    }
    else {
        $('.management-item').click(function(){
            var re = '';
            var id = '';
            $('.management').toggleClass('item-show');
            $('.management-show .item-content').hide();

            rel = $(this).attr('rel');
            id = '.management-show .item-content[rel="' + rel + '"]';
            $(id).fadeIn();

            $('html, body').animate({
                'scrollTop':   $('#management').offset().top
            }, 500);
        });
    }
    $('.management-show .ic-close').click(function(){
        $('.management').removeClass('item-show');
        $('.management-show .item-content').hide();
    });
}

function jobCollapse(){
    $('.career-items .item .item-title h5').click(function(){
        $('.rbox-widget').hide();
        $('.career-items .item .career-item-content').hide();
        $('.career-items .item').removeClass('item-active');
        $(this).parent().parent().parent().parent().addClass('deactive');
        $(this).parent().parent().addClass('item-active');
        $(this).parent().parent().find('.career-item-content').slideToggle();
    });


    $('.career-items .item .item-title .icon-close').click(function(){
        $('.rbox-widget').fadeIn();
        $('.carrer-area').removeClass('deactive');
        $(this).parent().parent().removeClass('item-active');
        $(this).parent().parent().parent().find('.career-item-content').hide();
    });
    $('.apply-explan').click(function(){
        $(this).parent().parent().addClass('apply-active');
        $(this).parent().parent().find('.applyfrm').slideToggle();
    })
}
function scrolling(){

    $('.main-menu li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
    });

    $('.fast-link li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
    });

    $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
    });

    $('.company-menu a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
    });
}

function homeResize() {
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();

    $('#main-slider').css('width', pageWidth);
    $('#main-slider').css('height', pageHeight);
    $('#main-slider .home-item').css('width', pageWidth);
    $('#main-slider .home-item').css('height', pageHeight);

    $('#main-slider .owl-wrapper-outer').css('width', pageWidth);
    $('#main-slider .owl-wrapper-outer').css('height', pageHeight);
    $('#main-slider .owl-controls .owl-buttons .owl-prev').css('width', 200);
    $('#main-slider .owl-controls .owl-buttons .owl-prev').css('height', pageHeight);
    $('#main-slider .owl-controls .owl-buttons .owl-next').css('width', 200);
    $('#main-slider .owl-controls .owl-buttons .owl-next').css('height', pageHeight);

    $('.video-wrapper').css('width', pageWidth);
    $('.video-wrapper').css('height', pageHeight);
    $('.banner-wrapper').css('width', pageWidth);
    $('.banner-wrapper').css('height', pageHeight);
}

function tabFix(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 150)
        {   
            $('.tabs-wrapper').addClass("active");
        }
        else
        {       
            $('.tabs-wrapper').removeClass("active");
        }
    });   
}
function servicesTab(){
    var hash = window.location.hash;
    $(hash).addClass('active');
    
    var i = 0;
    var rel = '';
    var id = '';
    var idCheck = 0;

    $('.tabs-items .tab-item').each(function(){
        if($(this).hasClass('active'))
            idCheck = idCheck + 1;
    });

    //alert(idCheck);
    if(idCheck == 0) {
        $('.tabs-items .tab-item:first-child').addClass('active');
        $('.services-content .services-tabs:first-child').fadeIn();
    }
    else {
        rel = $('.tabs-items .tab-item.active').attr('rel');
        id = '.services-content .services-tabs[rel="' + rel + '"]';
        $(id).fadeIn();
    }

    $('.tabs-items .tab-item').click(function(){
        $('.tabs-items .tab-item').removeClass('active');
        $('.services-content .services-tabs').hide();

        $(this).addClass('active');
        rel = $(this).attr('rel');
        id = '.services-content .services-tabs[rel="' + rel + '"]';
        $(id).fadeIn();
    }); 

    i = 0;
    $('.services-tabs[rel="tab-1"] .services-block').each(function(){
        if (i == 0) {
            $(this).addClass('main');
            $(this).addClass('container');
        }
        else {
            if ((i % 2) != 0) {
                $(this).addClass('left');
                $(this).addClass('bg');
            }
            else {
                $(this).addClass('right');
            }
        }
        i = i + 1;
    });

    i = 0;
    $('.services-tabs[rel="tab-2"] .services-block').each(function(){
        if (i == 0) {
            $(this).addClass('main');
            $(this).addClass('container');
        }
        else {
            if ((i % 2) != 0) { 
                $(this).addClass('right');
                $(this).addClass('bg');
            }
            else {
                $(this).addClass('left');
            }
        }
        i = i + 1;
    });

    i = 0;
    $('.services-tabs[rel="tab-3"] .services-block').each(function(){
        if (i == 0) {
            $(this).addClass('main');
            $(this).addClass('container');
        }
        else {
            if ((i % 2) != 0) { 
                $(this).addClass('left');
                $(this).addClass('bg');
            }
            else {
                $(this).addClass('right');
            }
        }
        i = i + 1;
    });

    
    // $('.features-tabs-content .tabs-content').hide();
    // if ($('.features-tabs li.active').length > 0) {
    //     rel = $('.features-tabs li.active').first().attr('rel');

    //     id = '.features-tabs-content .tabs-content[rel="' + rel + '"]';
    //     $(id).fadeIn();
    // } else {
    //     $('.features-tabs li:first-child').addClass('active');

    //     rel = $('.features-tabs li:first-child').attr('rel');
    //     id = '.features-tabs-content .tabs-content[rel="' + rel + '"]';
    //     $(id).fadeIn();
    // }

    // $('.features-tabs li').click(function(){
    //     $('.features-tabs li').removeClass('active');
    //     $('.features-tabs-content .tabs-content').hide();

    //     rel = $(this).attr('rel');
    //     id = '.features-tabs-content .tabs-content[rel="' + rel + '"]';

    //     $(this).addClass('active');
    //     $(id).fadeIn();
    // });


    $('.tabs-items .tab-item').click(
        function(){
            setTimeout(function(){
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
            }, 200)
        }
    );
}
