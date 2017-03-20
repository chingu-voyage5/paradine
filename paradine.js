/**
 * Author       : ParadineIns <paradineins@gmail.com>
 * Template Name: Paradine - Creative Portfolio Bootstrap Template
 * Version      : 1.0
 */

(function ($) {
    'use strict';

    var paradine = {
        animateAbout : function() {
            var $this = this;
            $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
            );
            setTimeout(function(){
                $('[data-textillate-skills]').textillate({ in: { effect: 'rotateIn', sync: false }});
            }, 650);
            $('[data-textillate-about]').textillate({ in: { effect: 'rotateIn', sync: true }});
            $this.ani1 = true;
        },
        init : function() {
            var $this = this;

            $this.ani1 = false;
            $this.ani2 = false;
            $this.ani3 = false;
            $this.ani4 = false;
            $this.ani5 = false;

            $this.mainNavHeight = $('#main-nav-ins').outerHeight();

            $(window).bind('hashchange', function(e) {
                //e.preventDefault();
                //console.log(e);

                switch(location.hash) {
                    case '#home':
                        $('html, body').animate({scrollTop: 0}, 600);
                        break;
                    case '#about':
                        $('html, body').animate({scrollTop: $('#about-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    case '#work':
                        $('html, body').animate({scrollTop: $('#work-item').offset().top - $this.mainNavHeight + 2}, 600, function() {

                        });
                        break
                    case '#process':
                        $('html, body').animate({scrollTop: $('#process-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    case '#contact':
                        $('html, body').animate({scrollTop: $('#contact-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    case '#services':
                        $('html, body').animate({scrollTop: $('#services-item').offset().top - $this.mainNavHeight + 2}, 600);
                        break
                    default:
                }

            });

            jQuery(document).ready(function () {
                // init animations on page load
                if(!$this.ani1 && $('#about-item').offset().top - $this.mainNavHeight - ($('header').outerHeight() / 2) <= $(window).scrollTop()) {
                    $this.animateAbout();
                }
                if(!$this.ani2 && $('#work-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                    $('[data-textillate-work]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                    $this.ani2 = true;
                }
                // init animations on scroll
                $(window).scroll(function() {
                    if(!$this.ani1 && $('#about-item').offset().top - $this.mainNavHeight - ($('header').outerHeight() / 2) <= $(window).scrollTop()) {
                        $this.animateAbout();
                    }
                    if(!$this.ani2 && $('#work-item').offset().top - $this.mainNavHeight <= $(window).scrollTop()) {
                        $('[data-textillate-work]').textillate({ in: { effect: 'bounceInLeft', sync: true }});
                        $this.ani2 = true;
                    }
                });


                $('.introduction h2').textillate({ in: { effect: 'rotateIn', sync: true }});

                $('body').scrollspy({ target: '#main-nav-ins', offset: parseInt($this.mainNavHeight) });

                $('#main-nav-ins').affix({
                offset: jQuery('header').outerHeight() - jQuery('#main-nav-ins').outerHeight()
                });

                if($this.mainNavHeight < $(document).scrollTop()) {
                    $('#main-nav-ins').removeClass('affix-bottom');
                    if(!$('#main-nav-ins').hasClass('affix')) {
                        $('#main-nav-ins').addClass('affix');
                        $('#main-nav-ins').css('top', 0);
                    }
                }

                $('#main-nav-ins').on('affixed.bs.affix', function() {
                //$('.affix-top-item').css("padding-top", parseInt($('.affix-top-item').css("padding-top")) + parseInt($this.mainNavHeight) + 'px');
                });
                $('#main-nav-ins').on('affix-top.bs.affix', function() {

                //$('.affix-top-item').css("padding-top", '0px');
                });
                $('.hash-triggers a').on("click", function(e) {
                    e.preventDefault();
                    var hash = $(this).attr('href').replace('-item', '');
                    location.hash = '#spacer';
                    location.hash = hash;
                });

            });
        }
    }

    paradine.init();
    
})(jQuery);

/*
var elementPosition = $('#navigation').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#navigation').css('position','fixed').css('top','0');
        } else {
            $('#navigation').css('position','static');
        }
});
*/
