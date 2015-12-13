$(document).ready(function () {

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

