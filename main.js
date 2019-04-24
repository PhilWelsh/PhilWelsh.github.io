// the following to the end is whats needed for the thumbnails.
jQuery(document).ready(function () {

    var recipientDivAll = document.getElementById("project-info");

    jQuery("a").on('click', function () {
        //SHOW LIGHTBOX
        jQuery(document.body).addClass('show-modal')

        //POPULATE LIGHTBOX
        var stuffToPopulate = (this).nextElementSibling.innerHTML; //ALL CONTENT <div><all imgs></div><h1><p>
        var textToPopulate =  jQuery(stuffToPopulate).nextAll("div.text");
        var imagesToPopulate = jQuery(stuffToPopulate + ' .images').html();

        jQuery('#js-slide-cont').append(textToPopulate);
        jQuery('.owl-carousel').append(imagesToPopulate);

        //ACTIVATE OWL CAROUSEL
        jQuery(".owl-carousel").owlCarousel({
            items: 1,
        });

        // 1) ASSIGN EACH 'DOT' A NUMBER
        dotcount = 1;

        jQuery('.owl-dot').each(function () {
            jQuery(this).addClass('dotnumber' + dotcount);
            jQuery(this).attr('data-info', dotcount);
            dotcount = dotcount + 1;
        });

        // 2) ASSIGN EACH 'SLIDE' A NUMBER
        slidecount = 1;

        jQuery('.owl-item').not('.cloned').each(function () {
            jQuery(this).addClass('slidenumber' + slidecount);
            slidecount = slidecount + 1;
        });

        // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
        jQuery('.owl-dot').each(function () {
            grab = jQuery(this).data('info');

            slidegrab = jQuery('.slidenumber' + grab + ' img').attr('src');
            // console.log(slidegrab);

            jQuery(this).css("background-image", "url(" + slidegrab + ")");
        });

        // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
        // TO MAKE IT ALL NEAT 
        amount = jQuery('.owl-dot').length;
        gotowidth = 100 / amount;

        jQuery('.owl-dot').css("width", gotowidth + "%");
        newwidth = jQuery('.owl-dot').width();
        jQuery('.owl-dot').css("height", newwidth + "px");
    })

    //WHEN CLOSING LIGHTBOX (X OR OUTSIDE), REMOVE CONTENTS, POSSIBLY END SLIDER
      
      // Close the Modal NOT WORKING
      jQuery('.close-modal').on('click', function(){
        jQuery('body').removeClass('show-modal');
        jQuery('#modal').innerHTML = '<span class="close cursor close-modal">&times;</span><div id="project-info"><div id="js-slide-cont" class="slide-cont empty"><div class="owl-carousel"></div></div></div>'
      });

    //   jQuery('body').on('click', function(e) {
    //     if((jQuery(e.target).closest('#js-slide-cont').length == 0 ) && (jQuery('body').hasClass('show-modal'))) {
    //         jQuery('body').removeClass('show-modal')
    //        /* Hide dropdown here */
    //     }
    // });

});