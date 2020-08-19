define([
    'jquery'
], function ($) {
    'use strict';
    $.widget('mage.backToTop',{
        _create:function() {
            this._bind();
        },

        /**
         * scroll back to top
         */
        backHandler: function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },

        /**
         * check scrolling
         */
        backScrollHandler:function() {
            if ($(window).scrollTop() > 0) {
                $(this.element).fadeIn();
            } else {
                $(this.element).fadeOut();
            }
        },

        /**
         * binding events
         */
        _bind: function () {
            let that=this;
            this._on(window, {
                scroll: this.backScrollHandler.bind(that)
            });
            this._on(this.element, {
                click: this.backHandler
            });
        }
    });
    return $.mage.backToTop;
});
