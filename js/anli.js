
var GLOBAL=GLOBAL||{};
$(function () {
    $("#header1").load("header1.html");
    $("#footer").load("footer.html");
    (function () {
        $("#button").click(function () {
            if(GLOBAL.pageStart<GLOBAL.yeshu){
                down();
            }
        });
        down();

    function down(){
    if(!GLOBAL.pageStart){
        $("#cases_warp").html("");
        GLOBAL.pageStart=0;
    }
    var listDat= listData["listData0"+GLOBAL.pageStart];
    var list=listDat.data.list;
    if(!list||!list.length){
        $("#cases_warp").html("没有更多了！")
    }else{
        for(var i=0;i<list.length;i++){
            var item=$("#cases_main").html()
                .replace("articleId",list[i].sysId)
                .replace("$listImg$",list[i].coverImg)
                .replace("$title$",list[i].title)
                .replace("$describe$",list[i].describe);
            $("#cases_warp").append(item);
        }
            GLOBAL.pageStart++;
            GLOBAL.yeshu=Math.ceil(listDat.data.count/listDat.data.pageSize);
            if(GLOBAL.pageStart>=GLOBAL.yeshu){
                $(".more_button1").css({opacity:0.3});
                $(".more>img").css("display","none");
            }
        }
    }

    })();
});