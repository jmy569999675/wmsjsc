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
        // console.log(num)
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

// DOTA轮播
function Slide(){
    this.num = 0;
    this.t1=null;
    this.play();
    this.stop();
    this.click1();
}
Slide.prototype.play = function(){
    var that=this;
    clearInterval(this.t1);
    this.t1= setInterval(function(){
        that.num++;
        // console.log(that.num);
        if(that.num>=$(".data .wrap .tempWrap .main").length){
            that.num=0;
        }
        $(".data .title_main dl dd a").removeClass("active").eq(that.num).addClass("active");
        $(".data .tempWrap>div").css("left",-that.num*$(".wrap .tempWrap .main").width()+"px");
    },2000)
    $(".data .title_main dl dd a").removeClass("active").eq(that.num).addClass("active");
    $(".data .tempWrap>div").css("left",-that.num*$(".wrap .tempWrap .main").width()+"px");
}
Slide.prototype.stop=function(){
    var that=this;
    $(".data .tempWrap").on("mouseover",function(){
        clearInterval(that.t1);
    }).on("mouseout",function(){
        that.play();
    })
}
Slide.prototype.click1=function(){
    var that=this;
    $(".data .title_main dl dd a").on("click",function(){
        that.num=$(this).parent().index();
        console.log(that.num);
        $(this).parent().find("a").addClass("active");
        that.play();
        // console.log($(this).parent().index())
        // console.log(that.num);
        // return false;
    })
}
var s1 = new Slide;
$(".login").on("click",function(){
    $(".sign").show();
});
$(".sign .closebox span").on("click",function(){
    $(".sign").hide();
})

// 登录内的关闭窗口
$(".sign .closebox span").on("mouseover",function(){
    $(this).css("background-color","#da4a4d")
}).on("mouseout",function(){
    $(this).css("background-color","#fff")
})

// 购物车连接跳转
$(".fixed_cart_tip").on("click",function(){
    window.location.href="car.html";
})