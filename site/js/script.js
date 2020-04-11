$(document).ready(function (e) {


    slider($('#slider').children('.slide').first());


    function slider(Object) {
        $(Object).slideDown(1000);
        $(Object).children('h3').animate({left: '80px'}, 800);
        $(Object).children('h4').animate({left: '90px'}, 1000);
        $(Object).children('h3').animate({left: '70px'}, 300);
        $(Object).children('h4').animate({left: '80px'}, 500);


        $("#load").animate({width: '100%'}, 5500, function(e) {
            $(Object).children('h3').animate({left: '80px'}, 600);
            $(Object).children('h4').animate({left: '90px'}, 800);
            $(Object).children('h3').animate({left: '-8000px'}, 200);
            $(Object).children('h4').animate({left: '-8000px'}, 300 , function(e) {


                $(Object).slideUp(1000);


                $('#load').css('width', 0);


                if(Object.next().hasClass("slide")) {
                    slider(Object.next())
                } else {
                    slider($('#slider').children('.slide').first())
                }
            });
        });

    }


});
