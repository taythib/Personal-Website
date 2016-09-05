var main = function() {
    /* Push the body and the nav over by 285px over */
    var menuVisible = false;
    $('.icon-menu').click(function() {
        if (!this.menuVisible) {
            $('.menu').animate({
                left: "0px"
            }, 200);

            $('body').animate({
                left: "285px"
            }, 200);
            this.menuVisible = !this.menuVisible;
        } else {
            $('.menu').animate({
                left: "-285px"
            }, 200);

            $('body').animate({
                left: "0px"
            }, 200);
            this.menuVisible = !this.menuVisible;
        }
    });

};


$(document).ready(main);
