//MENU NAVIGATION
$(".menu-button").click(function () {
    $(".main-nav").toggleClass("active");
});

$(".main-nav li").click(function () {
    var buttonId = $(this).attr("id");
    var goToPage = ("." + buttonId + "-page");

    $(".page").not(goToPage).removeClass("current-page");
    $(goToPage).addClass("current-page");

    $(".main-nav").toggleClass("active");
})

//SCROLL TO NEXT SECTION

$(".next-section").click(function () {
    var nextSectionTop = $(this).parent().next().offset().top;
    $('html, body').animate({ scrollTop: nextSectionTop }, 1500);
});

//Skill buttons
var lock = false;   //lock prevents multiple tabs opening
$(".skills-list div").on("click", function () {

    var skillButtonId = $(this).attr('id');
    var skillTextId = skillButtonId + ("Info");

    $(".skills-list div").removeClass("active");
    $("#" + skillButtonId).addClass("active");

    var thisButtonsColor = $("#" + skillButtonId).attr("attr-color");
    $(".skills-list").css("border-color", thisButtonsColor);

    $(".skills-info div").not("#" + skillTextId).animate({ "left": "-1000px" }, "slow");
    $("#" + skillTextId).animate({ "left": "0px" }, "slow");
});

//SLICK SLIDER (PORTFOLIO)
$('.portfolio-slide').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              centerPadding: '40px'
          }
      }
    ]
});

//SYNCING PORTFOLIO INFO AND SLIDER
$('.portfolio-slide').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var thisSlide = $(slick.$slides[nextSlide]);
    var currentId = thisSlide.attr('id');
    $(".slide").hide()
    $("#" + currentId + "Info").show();
});

//ANIMATE IN
//

var $window = $(window);
var win_height = $window.height();

function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this);
        var offsetTop = $this.offset().top;

        if (scrolled + win_height - 100 > offsetTop) {
            //IF SELECTOR HAS TIMEOUT ATTACHED, APPLY
            if ($this.data('timeout')) {
                window.setTimeout(function () {
                    $this.addClass('animated');
                }, parseInt($this.data('timeout'), 10));
            } else {
                $this.addClass('animated');
            }
        }
    });
}


$window.on('scroll', revealOnScroll);