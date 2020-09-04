
//----------------------------------------------------------  GALLERY 

//-----------------------------  Filter 
$(document).ready(function(){
    $(".filter-poster").click(function(){
        $(".album").fadeOut(200);
        $(".poster").fadeIn(200);
    });
    $(".filter-album").click(function(){
        $(".poster").fadeOut(200);
        $(".album").fadeIn(200);
    });
    $(".filter-all").click(function(){
        $(".poster, .album").fadeIn(200);
    });
});

//-----------------------------  stop video when another is playing
 window.addEventListener('load', function(event){
        document.querySelectorAll(".video ").forEach((el) => {
            el.onplay = function(e){
                document.querySelectorAll(".video ").forEach((el1) => {
                    if(el === el1)
                        el1.play();
                    else
                        el1.pause();
                });
            }
        });
    });






//----------------------------------------------------------  Attention taille écran
function myFunction() {
if(window.outerWidth > 1000) { 
  document.getElementById("taille_fenetre").style.opacity = "0";
  document.getElementById("scroll").style.opacity = "1"; 
} else {
  document.getElementById("taille_fenetre").style.opacity = "1";
  document.getElementById("scroll").style.opacity = "0"; 
  }
}


//----------------------------------------------------------  ANIMATION FOND D'ECRAN + SON 
var vidClip = document.getElementById("bgm"); 
var vidClip2 = document.getElementById("bgm2"); 
var vidClip3 = document.getElementById("bgm3"); 
var vidClip4 = document.getElementById("bgm4"); 
var vidClip5 = document.getElementById("bgm5"); 
var vidClip6 = document.getElementById("bgm6"); 


function playAudio() { 
    vidClip.play();
    $( "#animated" ).addClass( "on" );
    $( "#animated" ).removeClass( "off");  
    document.getElementById("contenu0").style.opacity = "0";
    document.getElementById("img_1").style.opacity = "1";
    $( "body" ).addClass( "stop-scrolling" );
} 
function pauseAudio() { 
  vidClip.pause();  
  $( "#animated" ).addClass( "off" );
  $( "#animated" ).removeClass( "on" );
  document.getElementById("contenu0").style.opacity = "1";
  document.getElementById("img_1").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling");
}
 $('.btn-toggle').on( 'click', function () {
      $(this).parent().find('.btn-toggle').toggle();
    });
vidClip.onended = function(e) {
  $('.btn-toggle').parent().find('.btn-toggle').toggle();
  $( "#animated" ).addClass( "off" );
  $( "#animated" ).removeClass( "on" );
  document.getElementById("contenu0").style.opacity = "1";
  document.getElementById("img_1").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling");
};


function playAudio2() { 
    vidClip2.play();
    $( "#animated2" ).addClass( "on" );
    $( "#animated2" ).removeClass( "off");  
    document.getElementById("contenu1").style.opacity = "0";
    document.getElementById("img_2").style.opacity = "1";
    $( "body" ).addClass( "stop-scrolling" );
} 
function pauseAudio2() { 
  vidClip2.pause();  
  $( "#animated2" ).addClass( "off" );
  $( "#animated2" ).removeClass( "on" );
  document.getElementById("contenu1").style.opacity = "1";
  document.getElementById("img_2").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling" );
}
$('.btn-toggle1').on( 'click', function () {
      $(this).parent().find('.btn-toggle1').toggle();
    });
vidClip2.onended = function(e) {
  $('.btn-toggle1').parent().find('.btn-toggle1').toggle();
  $( "#animated2" ).addClass( "off" );
  $( "#animated2" ).removeClass( "on" );
  document.getElementById("contenu1").style.opacity = "1";
  document.getElementById("img_2").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling");
};

function playAudio3() { 
    vidClip3.play();
    $( "#animated3" ).addClass( "on" );
    $( "#animated3" ).removeClass( "off");  
    document.getElementById("contenu2").style.opacity = "0";
    document.getElementById("img_3").style.opacity = "1";
    $( "body" ).addClass( "stop-scrolling" );
} 
function pauseAudio3() { 
  vidClip3.pause();  
  $( "#animated3" ).addClass( "off" );
  $( "#animated3" ).removeClass( "on" );
  document.getElementById("contenu2").style.opacity = "1";
  document.getElementById("img_3").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling" );
}
$('.btn-toggle2').on( 'click', function () {
      $(this).parent().find('.btn-toggle2').toggle();
    });
vidClip3.onended = function(e) {
  $('.btn-toggle2').parent().find('.btn-toggle2').toggle();
  $( "#animated3" ).addClass( "off" );
  $( "#animated3" ).removeClass( "on" );
  document.getElementById("contenu2").style.opacity = "1";
  document.getElementById("img_3").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling");
};


function playAudio4() { 
    vidClip4.play();
    $( "#animated4" ).addClass( "on" );
    $( "#animated4" ).removeClass( "off");  
    document.getElementById("contenu3").style.opacity = "0";
    document.getElementById("img_4").style.opacity = "1";
    $( "body" ).addClass( "stop-scrolling" );
} 
function pauseAudio4() { 
  vidClip4.pause();  
  $( "#animated4" ).addClass( "off" );
  $( "#animated4" ).removeClass( "on" );
  document.getElementById("contenu3").style.opacity = "1";
  document.getElementById("img_4").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling" );
   }
$('.btn-toggle3').on( 'click', function () {
      $(this).parent().find('.btn-toggle3').toggle();
    });
vidClip4.onended = function(e) {
  $('.btn-toggle3').parent().find('.btn-toggle3').toggle();
  $( "#animated4" ).addClass( "off" );
  $( "#animated4" ).removeClass( "on" );
  document.getElementById("contenu3").style.opacity = "1";
  document.getElementById("img_4").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling");
};

function playAudio5() { 
    vidClip5.play();
    $( "#animated5" ).addClass( "on" );
    $( "#animated5" ).removeClass( "off");  
    document.getElementById("contenu4").style.opacity = "0";
    document.getElementById("img_5").style.opacity = "1";
    $( "body" ).addClass( "stop-scrolling" );
  } 
function pauseAudio5() { 
  vidClip5.pause();  
  $( "#animated5" ).addClass( "off" );
  $( "#animated5" ).removeClass( "on" );
  document.getElementById("contenu4").style.opacity = "1";
  document.getElementById("img_5").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling" );
 }
$('.btn-toggle4').on( 'click', function () {
      $(this).parent().find('.btn-toggle4').toggle();
    });
vidClip5.onended = function(e) {
  $('.btn-toggle4').parent().find('.btn-toggle4').toggle();
  $( "#animated5" ).addClass( "off" );
  $( "#animated5" ).removeClass( "on" );
  document.getElementById("contenu4").style.opacity = "1";
  document.getElementById("img_5").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling");
};

function playAudio6() { 
    vidClip6.play();
    $( "#animated6" ).addClass( "on" );
    $( "#animated6" ).removeClass( "off");  
    document.getElementById("contenu5").style.opacity = "0";
    document.getElementById("img_6").style.opacity = "1";
    $( "body" ).addClass( "stop-scrolling" );
  } 
function pauseAudio6() { 
  vidClip6.pause();  
  $( "#animated6" ).addClass( "off" );
  $( "#animated6" ).removeClass( "on" );
  document.getElementById("contenu5").style.opacity = "1";
  document.getElementById("img_6").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling" );
    }
$('.btn-toggle5').on( 'click', function () {
      $(this).parent().find('.btn-toggle5').toggle();
    });
vidClip6.onended = function(e) {
  $('.btn-toggle5').parent().find('.btn-toggle5').toggle();
  $( "#animated6" ).addClass( "off" );
  $( "#animated6" ).removeClass( "on" );
  document.getElementById("contenu5").style.opacity = "1";
  document.getElementById("img_6").style.opacity = "0";
  $( "body" ).removeClass( "stop-scrolling");
};



//----------------------------------------------------------  SCROLLMAGIC



for(var key in scenes) {
  if (!scenes.hasOwnProperty(key)) continue;
  var obj = scenes[key];
  for (var prop in obj) {
    if(!obj.hasOwnProperty(prop)) continue;
    new ScrollMagic.Scene({ triggerElement: '#' + prop })
        .setClassToggle('#' + obj[prop], 'active')
        .addTo(controller); 
  }
}








