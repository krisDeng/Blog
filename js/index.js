(function () {
    'use strict';

    function Sky(config) {

    }

    Sky.prototype.init = function () {
        this.tocFixed();
        this.tocActive();
        this.backToTop();
        this.mobileNavToggle();
    };

    // make toc stay in the visible area
    Sky.prototype.tocFixed = function () {
        var HEADER_OFFSET = 20;
        var $toc = $('#post-toc');
        if ($toc.length) {
            var minScrollTop = $toc.offset().top;
            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop < minScrollTop) {
                    $toc.css({'position': 'absolute', 'top': minScrollTop - 70});
                } else {
                    $toc.css({'position': 'fixed', 'top': HEADER_OFFSET + 'px'});
                }
            });
        }
    };

    // current toc follows the content when scrolling
    Sky.prototype.tocActive = function () {
        var HEADER_OFFSET = 30;
        var $toclink = $('.toc-link');
        var $headerlink = $('.headerlink');

        var headerlinkTop = $.map($headerlink, function (link) {
            return $(link).offset().top;
        });
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            for (var i = 0; i < $toclink.length; i++) {
                var currentHeaderTop = headerlinkTop[i] - HEADER_OFFSET,
                    nextHeaderTop = i + 1 === $toclink.length ? Infinity : headerlinkTop[i + 1] - HEADER_OFFSET;

                if (currentHeaderTop < scrollTop && scrollTop 