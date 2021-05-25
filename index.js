jQuery(document).ready(function ($) {
    
    //프로젝트 모달창
    const openClickChatBot = document.getElementById("chatBot");
    const openClickFace = document.getElementById("faceRecognition");
    const openClickGame = document.getElementById("sicuanCastle");
    const openClickBoard = document.getElementById("webBoard");

    const modal = document.querySelector(".modalContainer");
    const overlay = modal.querySelector(".modal_overlay");
    const closeBtn = modal.querySelector("button");

    const openModal = () => {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        modal.classList.add("hidden");
        document.body.style.overflow = "visible";
    };
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            modal.classList.add("hidden");
            document.body.style.overflow = "visible";
        }
    });

    overlay.addEventListener("click", closeModal); 
    closeBtn.addEventListener("click", closeModal);
    openClickChatBot.addEventListener("click", openModal);
    openClickFace.addEventListener("click", openModal);
    openClickGame.addEventListener("click", openModal);
    openClickBoard.addEventListener("click", openModal);
    
    // Smooth Scrolling
    
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

    //  Highlight the current section in the navigation bar
    var sections = $(".section");
    var navigation_links = $("#nav-wrap a");
    sections.waypoint({
            handler: function(event) {
		   var active_section;
            active_section = $(this);
            var active_link = $('#nav-wrap a[href="#' + active_section[0]['element']["id"] + '"]');
            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");
		},
		offset: '0%'
    })

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


    // Fade In/Out Primary Navigation
       $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }
	});
});
