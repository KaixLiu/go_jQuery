$(function () {
    var falg=true;
    var boxTop = $(".recommend").offset().top;
    getto();
    function getto() {
        if ($(document).scrollTop() >= boxTop) {
            $(".fixedtool").fadeIn();
        }
        else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {
        getto();
        if(falg){
            $(".floor .w").each(function(i,ele){
                if($(document).scrollTop()>=$(ele).offset().top){
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }
    })
    $(".fixedtool ul li").click(function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
    })
    $(".fixedtool ul li").click(function () {
        falg=false;
        //点击li后，该li的索引号就是盒子的索引号
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: current,//被卷去头部距离就是盒子到头部的距离
        },function(){
            falg=true;
        });
    })
})