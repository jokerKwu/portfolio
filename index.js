jQuery(document).ready(function ($) {
    
    //프로젝트 모달창
    const openClickChatBot = document.getElementById("chatBot");
    const openClickFace = document.getElementById("faceRecognition");
    const openClickGame = document.getElementById("sicuanCastle");
    const openClickBoard = document.getElementById("webBoard");

   // const modal = document.querySelector(".modalContainer");
    const chatbotModal = document.querySelector(".chatbot_modal");
    const faceRecognitionModal = document.querySelector(".faceRecognition_modal");
    const sicuanCastleModal = document.querySelector(".sicuanCastle_modal");
    const webBoardModal = document.querySelector(".webBoard_modal");
    


    const overlay01 = chatbotModal.querySelector(".modal_overlay");
    const overlay02 = faceRecognitionModal.querySelector(".modal_overlay");
    const overlay03 = sicuanCastleModal.querySelector(".modal_overlay");
    const overlay04 = webBoardModal.querySelector(".modal_overlay");


    const closeBtn01 = chatbotModal.querySelector("button");
    const closeBtn02 = faceRecognitionModal.querySelector("button");
    const closeBtn03 = sicuanCastleModal.querySelector("button");
    const closeBtn04 = webBoardModal.querySelector("button");




    const openModal01 = () => {
        chatbotModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };
        const openModal02 = () => {
        faceRecognitionModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };
        const openModal03 = () => {
        sicuanCastleModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };
        const openModal04 = () => {
        webBoardModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };



    const closeModal = () => {
        chatbotModal.classList.add("hidden");
        faceRecognitionModal.classList.add("hidden");
        sicuanCastleModal.classList.add("hidden");
        webBoardModal.classList.add("hidden");
        
        document.body.style.overflow = "visible";
    };




    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
        chatbotModal.classList.add("hidden");
        faceRecognitionModal.classList.add("hidden");
        sicuanCastleModal.classList.add("hidden");
        webBoardModal.classList.add("hidden");
            document.body.style.overflow = "visible";
        }
    });

    overlay01.addEventListener("click", closeModal); 
    closeBtn01.addEventListener("click", closeModal);
    
    overlay02.addEventListener("click", closeModal); 
    closeBtn02.addEventListener("click", closeModal);
    
    overlay03.addEventListener("click", closeModal); 
    closeBtn03.addEventListener("click", closeModal);
    
    overlay04.addEventListener("click", closeModal); 
    closeBtn04.addEventListener("click", closeModal);
    openClickChatBot.addEventListener("click", openModal01);
    openClickFace.addEventListener("click", openModal02);
    openClickGame.addEventListener("click", openModal03);
    openClickBoard.addEventListener("click", openModal04);
    
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
