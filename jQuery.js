var current_background_image = "SouthNorthWest_Home1.jpg";
   function change_picture(id_numb) {
       $(".span_mover").removeClass("active_disc");
	   	$(".spans").addClass("hidden");
       $("#span_mover"+id_numb).addClass("active_disc");
	    $("#title"+id_numb).removeClass("hidden");
       var imageName = "SouthNorthWest_Home"+id_numb+".jpg";
	    $("header").css({"background-image":"url(images/" + imageName + ")"});
      current_background_image = imageName;
      };
   function orientation() {
        var imageKoefs = {
        "SouthNorthWest_Home1.jpg": .6670833333333,
        "SouthNorthWest_Home2.jpg": .6428571428571,
        "SouthNorthWest_Home3.jpg": .66666666666666,
        "SouthNorthWest_Home4.jpg": .66666666666666,
        "SouthNorthWest_Home5.jpg": .6428571428571,
        "SouthNorthWest_Home6.jpg": .6428571428571,
        };
        var koefCurrentBackgroundImage = imageKoefs[current_background_image];
        if ( screen.height / screen.width >= koefCurrentBackgroundImage ) {
            $("header").css({"background-size":"auto "+screen.height+"px"});
             }
        else { 
             $("header").css({"background-size":screen.width+"px auto"});
              }
   };
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
 return true; 
 }
 else {
 return false;
 }
}
  $(window).resize(function() {
        orientation();
  });
  $(document).ready(function() { 
      $(".opt").click( function() {
           var optdata = $(this).html();
           $("#sort-down2").toggleClass("fa-sort-up").toggleClass("fa-sort-down").css({"top":"232px"});
          $(".column").html(optdata);
          $(".column_contains").css({"display":"none"});
          scroll(0,666);
        });
    
     $(".filter_by_sector").focusin ( function() {
        $("#select_name").hide();
       });
   $(".filter_by_sector").focusout ( function() {
          $("#select_name").show();
         $("#filter_by_sector").removeClass("fa-sort-up").addClass("fa-sort-down");
      });


   $("select").click ( function() { 
        $("#filter_by_sector").addClass("fa-sort-up").removeClass("fa-sort-down");
     });
   $("select").change ( function() { 
          $("#filter_by_sector").removeClass("fa-sort-up").addClass("fa-sort-down"); 
     });
     $(".fa-twitter, .fa-facebook-square, .fa-vk").hover( function() { 
           $(this).addClass("fa-spin");
      });
     $(".fa-twitter, .fa-facebook-square, .fa-vk").mouseleave( function() { 
           $(this).removeClass("fa-spin");
      });
     if  ( detectmob() )
          { $(".logo1_img").attr('src','images/ssw-monogram-header-x2.png');
          $(".main-menu").addClass("hidden");
          $("<i class='fa fa-bars' id='main-menu' aria-hidden='true'></i>").prependTo("nav");
          $("#main-menu").click( function() {
              $("#main-menu").toggleClass("fa-close").toggleClass("fa-bars");
              $(".main-menu").toggle();
              $(".contacts-container").toggleClass("hidden");
          });
     }
        /* $(".fa-phone, .fa-envelope-o, .fa-location-arrow").hover( function() { 
               $(this).animate({"font-size":"63px",
                                             "padding":"15px",
                                            "border-radius":"70px",   
                                            "width":"63px"},500);
               $(this).animate({"left":"5px"}, 200);
          });*/
    $(".column").click( function() { 
        $("#sort-down2").addClass("fa-sort-up").removeClass("fa-sort-down").css({"top":"240px"});
        if ( $(".column_contains").css("display") == "none" )
            {$(".column_contains").css({"display":"block"}); }
        else 
            {$(".column_contains").css({"display":"none"}); 
              $("#sort-down2").removeClass("fa-sort-up").addClass("fa-sort-down").css({"top":"232px"});    
             }
     
      if ( screen.height <= 960 && screen.width <= 540 )
            {scroll(0,666);}
      else if ( $("#sort-down2").hasClass("fa-sort-down") && screen.height > 960 && screen.width > 540 )
            {scroll(0,-600);}
      else if ( $("#sort-down2").hasClass("fa-sort-up") && screen.height > 960 && screen.width > 540 )
            {scroll(0,600);}
    }); /* vozmojno oshibka dostavil tochku s zapyatoy*/
       $("span.downArrowHome").click( function() {
            scroll(0,1600);
       });
	   $(".span_mover").click( function() {
      var id=$(this).attr("id");
	   var id_numb=id.substring(10);
      change_picture(id_numb);
      orientation();
	   });
       setInterval( function() {
       var id = $(".active_disc").attr("id");
       var id_numb=parseInt(id.substring(10));
       id_numb += 1;
       if ( id_numb == 7 ) { id_numb = 1;}
       change_picture(id_numb);
       orientation();
       }, 10000);
       $(".cont").hover( function() {
          var id0 = $(this).attr("id");
          var id_numb0=parseInt(id0.substring(4));
          var height0 = $("#slide_show"+id_numb0).css("height");
          var height = parseInt(height0) + 40;
          if ( screen.height <= 960 && screen.width <= 540 )
                { $("#texts"+id_numb0).css({opacity:1});}
          $("#slide"+id_numb0).animate({"bottom":height},50);/*.delay(1500)*/
          $("#slide_show"+id_numb0).fadeIn(1000);
       });
       $(".cont").mouseleave( function() {
          var id0 = $(this).attr("id");
          var id_numb0=parseInt(id0.substring(4));
          $("#slide_show"+id_numb0).fadeOut(400);
          if ( screen.height <= 960 && screen.width <= 540 )
               { $("#texts"+id_numb0).css({opacity:0});} 
          $("#slide"+id_numb0).animate({"bottom":"0"},850);
       });
       $(document).scroll( function() {
          var scrolll = $(this).scrollTop();
          var screen_height = screen.height;
          var screen_width = screen.width;
          if ( scrolll >= 1330 && screen_width > 540 && screen_height > 960 ) {
              $(".inner, .logo1_img, nav").css({position:"fixed"});
              $(".inner").css({left:0,
                               top:0,
                               height:"76px"});
             $(".logo1_img, nav").css({top:"20px"});
              $(".logo1_img").css({left:"40px"});
              $("nav").css({right:"40px"}); 
              $(".logo1_img").attr('src','images/ssw-monogram-header-x2.png');
          }
          else if ( screen_width <= 540 && screen_height <= 960)
          { $(".logo1_img").attr('src','images/ssw-monogram-header-x2.png');
            $(".inner, .logo1_img, nav").css({position:"fixed"});
          }
          else {
             $(".inner, .logo1_img").css({position:"static"});
             $("nav").css({position:"absolute",
                           right:"40px",
                           top:"43px"});
             $(".inner").css({height:"130px"});
             $(".logo1_img").attr('src','images/logo-x2.jpg');
          }
       });
       orientation();
	  });
