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
function getScrollLeft() {
    var scrollLeft = 0;
    if (document.documentElement && document.documentElement.scrollLeft) {
        scrollLeft = document.documentElement.scrollLeft;
    } else if (document.body) {
        scrollLeft = document.body.scrollLeft;
    }
    return scrollLeft;
}

// 右侧固定栏动画
$(".fixed_bar .tip").animate({ left: '-78px', opacity: '1', display: 'black' }, 1500);
// 登录内的关闭窗口
$(".sign .closebox span").on("mouseover", function () {
    $(this).css("background-color", "#da4a4d")
}).on("mouseout", function () {
    $(this).css("background-color", "#fff")
})
// 购物车连接跳转
$(".fixed_cart_tip").on("click", function () {
    window.location.href = "car.html";
})
$(".login").on("click", function () {
    $(".sign").show();
});
$(".sign .closebox span").on("click", function () {
    $(".sign").hide();
})