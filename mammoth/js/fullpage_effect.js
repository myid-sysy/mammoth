$(document).ready(function(){

  $("#fullpage").fullpage({
    verticalCentered: false,
    navigation: true,
    navigationPosition:'right',
    anchors:['1st', '2nd' , '3rd' ,'4th'],
    afterLoad:function(anchorLink, index){
      // console.log('anchorLink:' +anchorLink+'index:' +index)
      if(anchorLink == '2nd'){
        $(".main_txt_2").addClass("txt");
        $(".page_logo_2").addClass("text_up");
      } else if(anchorLink == '3rd'){
        $(".main_txt_3").addClass("txt");
        $(".page_logo_3").addClass("text_up");
      } else if(anchorLink == '4th'){
        $(".page_title").addClass("slide_up_1");
        $(".page_sub_title").addClass("slide_up_2")
        $(".slides").addClass("slide_up_3")
      }
    }
  });

});
