var t = null;
var num = 0;
var w =window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
$(".slide .wrap ul").width(w*3);
$(".slide .wrap ul li").width(w)
$(".slide").on("mousemove", function () {
    stop();
})
$(".slide").on("mouseout", function () {
    play();
})
$(".prev").on("click", function () {
    num--;
    if (num < 0) {
        index = 2;
    }
    play(num * width);
})
$(".next").on("click", function () {
    num++;
    if (num > 2) {
        num = 0;
    }
    play(num);
})
function play() {
    console.log("start")
    clearInterval(t)
    t = setInterval(function () {
        num++;
        $(".next").on("click", function () {
            num++;
        });
        if (num > 2) {
            num = 0;
        }
        $(".lis a").removeClass("active");
        $(".lis a").eq(num).addClass("active");
        $(".slide .wrap ul").css("left", -num * w + "px");
        console.log(num)
    }, 2000);
    $(".slide .wrap ul").css("left", -num * w + "px")
}
window.onload = function () {
    play(num);
}
function stop() {
    clearInterval(t);
}
// 下拉菜单
$(".all_wares").on("mouseover", function () {
    $(".all_wares ul").show();
    $(".all_wares ul li").on("mouseover", function () {
        $(this).find("a").css("background-color", "#f5f5f5");

        $(this).find("dl").show();
        $(".all_wares ul li dl dd").on("mouseover", function () {
            $(this).css("background-color", "white")
        }).on("mouseout", function () {
            $(this).css("background-color", "#f5f5f5")
        })
    }).on("mouseout", function () {
        $(this).find("a").css("background-color", "#fff");
        $(this).find("dl").hide();
    })
}).on("mouseout", function () {
    $(".all_wares ul").hide();
});
// 搜索输入框
$(".header_search input.text").on("focus", function () {
    $(this).addClass("focus");
    $(".keyword").hide();
}).on("blur", function () {
    $(".keyword").show();
})
function getScrollLeft(){
    var scrollLeft=0;
    if(document.documentElement&&document.documentElement.scrollLeft){
        scrollLeft = document.documentElement.scrollLeft;
    }else if(document.body){
        scrollLeft = document.body.scrollLeft;
    }
    return scrollLeft;
}

// 右侧固定栏动画
$(".fixed_bar .tip").animate({left:'-78px',opacity:'1',display:'black'},1500);