/// <reference path="jquery.kinetic.min.js" />
$(document).ready(function () {

    //SLICK SLIDER

    //$('.slider').slick({
    //    speed: 15000,
    //    autoplay: true,
    //    autoplaySpeed: 0,
    //    cssEase: 'linear',
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    variableWidth: true
    //});

    $(".js-slider").simplyScroll({
        frameRate: 72, //No of movements per second
        speed: 1, //No of pixels per frame
        orientation: 'horizontal', //'horizontal or 'vertical' - not to be confused with device orientation
        auto: true,
        autoMode: 'loop', //auto = true, 'loop' or 'bounce',
        pauseOnHover: false, //autoMode = loop|bounce only
        pauseOnTouch: false, //" touch device only
        startOnLoad: false //use this to delay starting of plugin until all page assets have loaded
    });

    //ABOUT HOBBY-SPINNER
    $('.js-hobby-spinner').scrollbox();

    //SKILL BUTTONS
    var lock = false;   //lock prevents multiple tabs opening
    var skill = $(".skills-list a")

    $(skill).on("click", function () {
        var skillButtonId = "#" + $(this).attr('id');
        var skillTextId = skillButtonId + ("Info");
        var skillTitle = skillButtonId + ("Title");

        $(skill).removeClass("active");
        $(skillButtonId).addClass("active");

        //var thisButtonsColor = $("#" + skillButtonId).attr("attr-color");
        //$(".skills-list").css("border-color", thisButtonsColor);

        $(".skill-info div").not(skillTextId).animate({ "top": "-400px" }, "slow");
        $(skillTextId).animate({ "top": "0px" }, "slow");
        $(".skill-title h2").not(skillTitle).animate({ "left": "-400px" }, "slow");
        $(skillTitle).animate({ "left": "0px" }, "slow");
    });

});

