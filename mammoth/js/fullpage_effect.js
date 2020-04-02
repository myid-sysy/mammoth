$(document).ready(function(){

  $("#fullpage").fullpage({
    verticalCentered: false,
    navigation: true,
    navigationPosition:'right',
    fixedElements: '#header',
    responsiveWidth: 730,
    anchors:['1st', '2nd' , '3rd' ,'4th','5th'],
    afterLoad:function(anchorLink, index){
      // console.log('anchorLink:' +anchorLink+'index:' +index)
      if(anchorLink == '2nd'){
        $(".main_txt_2").addClass("txt");
        $(".page_logo_2").addClass("text_up");
      } else if(anchorLink == '3rd'){
        $(".main_txt_3").addClass("txt");
        $(".page_logo_3").addClass("text_up");
      } else if(anchorLink == '4th'){
        $(".slide_title").addClass("slide_up_1");
        $(".slide_sub_title").addClass("slide_up_2")
        $(".slides").addClass("slide_up_3")
      } else if(anchorLink == '5th'){
        $(".insta_title").addClass("slide_up_1");
        $(".insta_sub_title").addClass("slide_up_2");
        $(".insta_slide").addClass("slide_up_3");
      }
      if(anchorLink == '4th' || anchorLink == '5th'){
        $(".topnav li a").css({"color":"#000"});
        $(".topnav, .hidden_sub").on("mouseleave", function(){
          $(".hidden_sub").stop().animate({height:0}, 300, function(){
            $(".topnav li a").css({color:"#000"});
            $(".hidden_sub").css({display:"none"});
          });
        });
      } else {
        $(".topnav li a").css({"color":"#fff"});
        $(".topnav, .hidden_sub").on("mouseleave", function(){
          $(".hidden_sub").stop().animate({height:0}, 300, function(){
            $(".topnav li a").css({color:"#fff"});
            $(".hidden_sub").css({display:"none"});
          });
        });
      }
    }

  });

});
