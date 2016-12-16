/**
 * Created by Administrator on 2016/9/24.
 */
$(function () {
    // 淡入淡出
    $(window).scroll(function () {
        if($(this).scrollTop()>500){
            $(".scroll").fadeIn();
        }else{
            $(".scroll").fadeOut(0);
        }
    });
    //回到顶部
    $(".scroll p:nth-child(1)").click(function () {
        $(this).parent().animate({bottom:1000,opacity:0},400,function(){
            $(".scroll").css("opacity",1).fadeOut(0).css("bottom",200);
        });
        $("html body").animate({scrollTop:0},400);//谷歌
        $("html").animate({scrollTop:0},400);//火狐

    })
});