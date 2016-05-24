/**
 * Created by valarsu on 16-5-24.
 */
$(function () {
    var Func = function () {
        this.init();
    };

    Func.prototype.init = function () {
        var self = this;
        self.turnToTop();
    };

    Func.prototype.turnToTop = function () {
        var self = this;
        var height = $(window).innerHeight();
        $(window).on('scroll', function () {
           if($(this).scrollTop() < height){
               $('.turn-to-top').fadeOut(400);
           }else {
               $('.turn-to-top').fadeIn(400);
           }
        });
        $('.turn-to-top').on('click', function () {
            $('html,body').animate({'scrollTop': '0'},300);
        })
    };


    new Func();
});
