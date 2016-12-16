var GLOBLE = GLOBLE || {};
$(function(){
        (function(){
            $("#header1").load("header1.html");
            $("#footer").load("footer.html");
            var h = $(window).height();
            $(".box,.box_cont").css({height:h});
            var scrollFunc = function(event){
                /*ie和谷歌一样*/
                event=window.event||event;
                if(event.wheelDelta){
                    if(event.wheelDelta>0){
                        topGun();
                    }else if(event.wheelDelta<0){
                        bottomGun();
                    }
                }else if(event.detail){
                    if(event.detail>0){
                        bottomGun();
                    }else if(event.detail<0){
                        topGun();
                    }
                }
            };
            /*火狐浏览器鼠标滚动事件监听*/
            if(document.addEventListener){
                document.addEventListener("DOMMouseScroll",scrollFunc,false);
            };
            window.onmousewheel = document.onmousewheel = scrollFunc;
            /*谷歌，ie鼠标滚动事件*/
            var jinfang=false;//判断条件
            var scrolltime=0;//滚动次数
            var timer;//定时器
            var index=0;

            function topGun(){
                if(scrolltime<1){
                    clearTimeout(timer);
                    //加定时器为了第一次滑动滚轴的时候不执行滚动
                    timer=setTimeout(function(){
                        scrolltime++;
                    },100)
                }else if(!jinfang){
                    jinfang=true;
                    index--;
                    if(index<0){
                        index=0;
                    }
                    if(index==2){
                        $(".box_cont3_main_one span").each(function (i) {
                            var that=$(this);
                            setInterval(function () {
                                that.show().animate({"opacity":"1"},200);
                            },i*200)
                        });
                    }
                    dong();
                }
            }
            function bottomGun () {
                if (scrolltime<1) {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        scrolltime++;
                    }, 100)
                } else if (!jinfang) {
                    jinfang = true;
                    index++;
                    if(index==2){
                        $(".look3").addClass("animated fadeInUpBig");
                        $(".box_cont3_main_one span").each(function (i) {
                            var that=$(this);
                            setInterval(function () {
                                that.show().animate({"opacity":"1"},1000);
                            },i*200)
                        });
                    }
                    if (index > 4) {
                        index = 4;
                    }
                    dong();
                }
            }
            function dong(){
                $(".box1").animate({top:"-"+index*h},600,function(){
                    jinfang=false;
                    scrolltime=0;
                    $(".content_line img").removeClass("active").eq(index).addClass("active");
                });
            }
            //欢迎界面
            $(".cartoon").css({height:$(window).height()});
            $(".cartoon_cont").css({height:$(window).height()});
            $(".cartoon_cont_main img").each(function (i) {
                var that=$(this);
                setTimeout(function () {
                    that.show().animate({"opacity":"1"},500)
                },300*i);
            });

            var jinfang1=false;
            $(".cartoon").click(function () {
                if(!jinfang1){
                    $(".cartoon").slideUp(600);
                }else {
                    jinfang1=true;
                }
            });
            setTimeout(function () {
                $(".cartoon").slideUp(600);
            },6000);

            //第一块
            //    3个图片
            var indexImg=0;
            $(".button2").click(function () {
                indexImg++;
                if(indexImg>2){
                    indexImg=2;
                }
                $(".maincontent").animate({left:"-"+indexImg*1200},1000);
                donghua();
            });
            $(".button1").click(function () {
                indexImg--;
                if(indexImg<0){
                    indexImg=0;
                }
                $(".maincontent").animate({left:"-"+indexImg*1200},1000);
                donghua();
            });

            function donghua(){
                $(".box_cont1_div img").each(function (i) {
                    var that=$(this);
                    setTimeout(function () {
                        that.show().animate({"opacity":"1"},2000);
                    },600*i);
                });
            }
            donghua();
            //第一块end
        })();
    //无线轮播
    var indexImg=0;
    function timer(){
        $(".box_cont4_main").animate({"left":-240},1000,"backIn", function () {
            $(".box_cont4_main img:first-child").appendTo(".box_cont4_main");
            $(".box_cont4_main").animate({left:0},0);
        });
        indexImg++;
        if(indexImg>15){
            indexImg=0;
        }
    }
    id=setInterval(timer,3000);

    $(".box_cont4_main").mouseenter(function(){
        clearInterval(id);
    }).mouseleave(function () {
        setInterval(timer,2000);
    });
});

