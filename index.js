$(document).ready(function(e) {
    var i = 0;
    var len = $('.slide .textSlide .slide-txt').length;
    var timeLoop;
        timeLoop = setInterval(function(){             
            $('.slide .textSlide .slide-txt').eq(i).css("display","none"); // hide all the li elements
            i = i + 1;
            
            if(i >= len){
                i = 0;
            }
            $('.slide .textSlide .slide-txt').eq(i).css("display","block"); // show the current li
            if(i==0){
                $('.mainText').css("background-image","url(img/조현준8_1000.jpg");
            }else if(i==1){
                $('.mainText').css("background-image","url(img/조현준9_1000.jpg");
            }
            else if(i==2){
                $('.mainText').css("background-image","url(img/조현준_1000.jpg");
            }
            else{
                $('.mainText').css("background-image","url(img/조현준6_1000.jpg");
            }
        }, 3000);
});



function init(){

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

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openClickChatBot.addEventListener("click", openModal);
openClickFace.addEventListener("click", openModal);
openClickGame.addEventListener("click", openModal);
openClickBoard.addEventListener("click", openModal);

}
