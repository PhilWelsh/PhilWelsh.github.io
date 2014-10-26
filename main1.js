
$(function () {
    //slick.js
    $('.single-item').slick();

    // Init Skrollr
    if (window.innerWidth > 1000) {
        var s = skrollr.init({
            render: function (data) {
                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
        });
    };
    //SCROLL TO
    $("#topmenu li a").on("click", function () {
        var destination = $(this).attr('data-attr-scroll')
        $('body').scrollTo(destination, { duration: 'slow' });
    });
    $("#returntotop").on("click", function () {
        //$('body').scrollTo("#topmenu", { duration: 'slow' });
        $('body').scrollTo("body", { duration: 'slow' });
    });


    //SCROLL EFFECTS
    /* Every time the window is scrolled ... */
    $(window).scroll(_.throttle(function () {

        //SCROLL TO TOP BOTTOM

        if ($(this).scrollTop() > 100) {
            $('#returntotop').fadeIn(700);
        } else {
            $('#returntotop').fadeOut(700);
        }

        //APPEAR ON SCROLL

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > top_of_object) {

                $(this).delay(200).animate({ 'opacity': '1' }, 800);
                $(this).find(".nth1 .filler").delay(400).animate({ 'height': '100%' }, 1300);
                $(this).find(".nth2 .filler").delay(500).animate({ 'height': '100%' }, 1350);
                $(this).find(".nth3 .filler").delay(600).animate({ 'height': '100%' }, 1400);
                $(this).find(".nth4 .filler").delay(700).animate({ 'height': '100%' }, 1450);
                $(this).find(".nth5 .filler").delay(800).animate({ 'height': '100%' }, 1500);
                $(this).find(".nth1 .percent").delay(500).animate({ 'top': '10%' }, 1300);
                $(this).find(".nth2 .percent").delay(600).animate({ 'top': '10%' }, 1400);
                $(this).find(".nth3 .percent").delay(700).animate({ 'top': '10%' }, 1600);
                $(this).find(".nth4 .percent").delay(800).animate({ 'top': '10%' }, 1700);
                $(this).find(".nth5 .percent").delay(900).animate({ 'top': '10%' }, 1800);
            }
            //Change to '.addclass("animate") then add that to CSS


        });
    }, 750));

    //Skill buttons

    var currentview = "#skillsnth0";
    var lock = false;
    $("#skillbuttons a").on("click", function () {
        if (lock) return;
        lock = true;
        var id = $(this).attr('id');
        var skilltext = "#skills" + id;
        $(currentview).fadeOut(700, function () {
            $(skilltext).fadeIn();
            currentview = skilltext;
            lock = false;
        });
    });





});