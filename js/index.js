/**
 * Created by zmx on 2016/9/29.
 */
$(function () {
    //回到顶部
    $("#header").load("header.html");
    $("#up").load("back.html");
    $("#footer").load("footer.html");
    //轮播
    $(".web_banner_ul li").mouseover(function () {
        var index=$(this).index();
        $(".web_banner_cont div").stop().fadeOut().removeClass("active").eq(index).stop().fadeIn().addClass("active");
        $(this).addClass("active1").siblings().removeClass("active1");
    });
    $(".dong").animate({"left":"-50px"},1000);
    //导航的小动画
    $(".web_banner_nav_ul li").mouseover(function () {
        $(this).find(".change1").stop().animate({"top":"-25px"},200);
        $(this).find(".change2").stop().animate({"top":"0px"},200);
    }).mouseout(function () {
        $(this).find(".change1").stop().animate({"top":"0px"},100);
        $(this).find(".change2").stop().animate({"top":"-25px"},100);
    });
    //轮播的小动画
    $(".animatePC .pc").each(function (i) {
        var that=$(this);
        setTimeout(function () {
            that.show().animate({"opacity":"1"},2000);
        },1100*i);
    });
    //我们的服务
   (function () {
       $(window).scroll(function () {
           //alert($(".service").offset().top);
           var scr=$(window).scrollTop();
           if(scr>($(".service").offset().top)-300){
               $(".service_h11").addClass("active4");
               $(".service_img").addClass("active5");
               $(".service_cont>div").addClass("animated tada");
           }else{
               $(".service_h11").removeClass("active4");
               $(".service_img").removeClass("active5");
               $(".service_cont>div").removeClass("animated tada");
           }
       })
    })();
    $(".service_cont_bottom").mouseover(function () {
        var that=$(this);
        that.siblings(".service_cont_top").children(".threeD").addClass("animated tada");
    }).mouseout(function () {
        $(".service_cont_top").children(".threeD").removeClass("animated tada");
    });
    //我们的案例
    (function () {
        $(window).scroll(function () {
            var scr=$(window).scrollTop();
            if(scr>($(".case").offset().top)-300){
                $(".case_gray_h1").addClass("active6");
                $(".case_gray_main").addClass("active7 animated flash");
                $(".case_gray_nav").addClass("active7 animated zoomInUp");
            }else {
                $(".case_gray_h1").removeClass("active6");
                $(".case_gray_main").removeClass("active7 animated flash");
                $(".case_gray_nav").removeClass("active7 animated zoomInUp");
            }
            if(scr>($(".cases").offset().top)-300){
                $(".cases .cases_one").addClass("active7 animated flipInY");
            }else{
                $(".cases .cases_one").removeClass("active7 animated flipInY");
            }
        })
    })();
    //放大镜
    $(".fangdajing").mouseenter(function () {
        $(this).animate({"opacity":".8"},400);
    }).mouseleave(function () {
        $(".fangdajing").animate({"opacity":"0"},200);
    });
    //建站流程
    (function () {
        $(window).scroll(function () {
            var scr=$(window).scrollTop();
            if(scr>($(".create_web_lc").offset().top)-600){
                $(".create_web_lc_h1").addClass("active8");
                $(".create_web_lc_img").addClass("active9 animated bounceInRight");
                $(".create_web_lc_four div").addClass("animated rollIn")
            }else{
                $(".create_web_lc_h1").removeClass("active8");
                $(".create_web_lc_img").removeClass("active9 animated bounceInRight");
                $(".create_web_lc_four div").removeClass("animated rollIn")
            }
        })
    })();
    //建站指南
    $(".create_web_jzzn_four>div").hover(function () {
        var that=$(this);
        that.children("img").addClass("animated rotateInDownLeft");
    }, function () {
        $(".create_web_jzzn_four>div img").removeClass("animated rotateInDownLeft")
    });
    //四个
    $(".model_one_a2").click(function () {
        $(this).parent().siblings(".model_one_a7").slideToggle();
        $(this).parent().parent().siblings().children(".model_one_a7").slideUp();
        $(this).siblings(".model_one_a4").toggleClass("active6");
    });
    $(".model_one_a4").click(function () {
        $(this).parent().siblings(".model_one_a7").slideToggle();
        $(this).toggleClass("active6");
    });
    //我们的客户
    $(".guests_all div").hover(function () {
        var that=$(this);
        that.siblings().children(".img2").addClass("active3");//灰色的
    }, function () {
        $(".guests_all div").siblings().children(".img2").removeClass("active3");
    });
    (function () {
        $(window).scroll(function () {
            var scr=$(window).scrollTop();
            if(scr>($(".guest").offset().top)-300){
                $(".guest_h1").addClass("animated headShake");
                $(".guest_img,.guest_good").addClass("animated swing");
                $(".guests_all").addClass("animated lightSpeedIn")
             }else{
                $(".guest_h1").removeClass("animated headShake");
                $(".guest_img,.guest_good").removeClass("animated swing");
                $(".guests_all").removeClass("animated lightSpeedIn")
            }
        })
    })();
});