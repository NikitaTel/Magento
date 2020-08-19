define([
    'jquery',
    "matchMedia"
], function ($) {
    'use strict';
    $.widget('mage.customMenu',{
        _create:function() {
            let liSub = $(this.element).find("ul > li");
            liSub.each(function (i,el){
                $(el).find(">ul").length>0 && $(el).addClass("menu-li");
            })
            this._bind();
        },

        /**
         * check device width and binding events
         */
        _bind: function () {
            mediaCheck({
                media: '(min-width: 768px)',
                entry: ()=> {
                    this._on($(this.element).find("ul > .menu-li"), {
                        mouseover: function(e) {
                            $(e.currentTarget).find(">ul").show();
                        },
                        mouseout: function(e) {
                            $(e.currentTarget).find(">ul").hide();
                        }
                    })
                } ,
                exit: ()=> {
                    this._on($(this.element).find("ul > .menu-li"), {
                        click: function (e) {
                            $(e.currentTarget).find(">ul").toggle();
                        }
                    })
                    let that = this.element;
                    this._on($(".menu-action"), {
                        click: function () {
                            $(that).hasClass('menu-mobile-show') ? $(that).removeClass('menu-mobile-show') : $(that).addClass('menu-mobile-show')
                        }
                    })
                }
            });
        }
    });
    return $.mage.customMenu;
});
