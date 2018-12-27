var t = null;
var num = 0;
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
$(".slide .wrap ul").width(w * 3);
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

// DOTA轮播
function Slide() {
    this.num = 0;
    this.t1 = null;
    this.play();
    this.stop();
    this.click1();
}
Slide.prototype.play = function () {
    var that = this;
    clearInterval(this.t1);
    this.t1 = setInterval(function () {
        that.num++;
        // console.log(that.num);
        if (that.num >= $(".data .wrap .tempWrap .main").length) {
            that.num = 0;
        }
        $(".data .title_main dl dd a").removeClass("active").eq(that.num).addClass("active");
        $(".data .tempWrap>div").css("left", -that.num * $(".wrap .tempWrap .main").width() + "px");
    }, 4000)
    $(".data .title_main dl dd a").removeClass("active").eq(that.num).addClass("active");
    $(".data .tempWrap>div").css("left", -that.num * $(".wrap .tempWrap .main").width() + "px");
}
Slide.prototype.stop = function () {
    var that = this;
    $(".data .tempWrap").on("mouseover", function () {
        clearInterval(that.t1);
    }).on("mouseout", function () {
        that.play();
    })
}
Slide.prototype.click1 = function () {
    var that = this;
    $(".data .title_main dl dd a").on("click", function () {
        that.num = $(this).parent().index();
        // console.log(that.num);
        $(this).parent().find("a").addClass("active");
        that.play();
        // console.log($(this).parent().index())
        // console.log(that.num);
        // return false;
    })
}
var s1 = new Slide;



// 添加购物车
function cart() {
    $(".cart").on("click", function () {
        var url = $(this).parents(".product").find(".product-1 img").attr("src");
        var name = $(this).parents(".product").find(".product-1 .name").text();
        var price = parseInt($(this).parents(".product").find(".price span").text());
        var id = $(this).parents(".product").find("a").attr("data-id");
        console.log(url, name, price, id)
        $.ajax({
            url: "php/update.php",
            type: "POST",
            dataType: "json",
            data: {
                "img": url,
                "price": price,
                "name": name,
                "id": id,
            },
            success: function (data, textStatus) {
                console.log(data);
                if (data.code == 200) alert("加入购物车成功");
                cart_num();
            },
            error: function (a, b, c) {
                console.log(a);
            }

        })
    })
}
// ajax渲染页面
$.ajax({
    url: "php/api.php",
    type: "POST",
    dataType: "json",
    data: {
        "action": "home_dota_1"
    },
    success: function (data, textStatus) {
        // console.log(data);

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        var data = $.parseJSON(XMLHttpRequest.responseText.slice(11));
        // console.log(data.data);
        var html = template("dota1", data);
        $(".data .wrap .tempWrap>div.fLeft").append(html);
        cart();
    }
});
$.ajax({
    url: "php/api.php",
    type: "POST",
    dataType: "json",
    data: {
        "action": "home_dota_2"
    },
    success: function (data, textStatus) {

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        var data = $.parseJSON(XMLHttpRequest.responseText.slice(11));
        // console.log(data.data);
        var html = template("dota2", data);
        $(".data .wrap .tempWrap>div.fLeft").append(html);
        cart();
    }
})
$.ajax({
    url: "php/api.php",
    type: "POST",
    dataType: "json",
    data: {
        "action": "home_dota_3"
    },
    success: function (data, textStatus) {

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        var data = $.parseJSON(XMLHttpRequest.responseText.slice(11));
        // console.log(data.data);
        var html = template("dota3", data);
        $(".data .wrap .tempWrap>div.fLeft").append(html);
        cart();
    }
})
$.ajax({
    url: "php/api.php",
    type: "POST",
    dataType: "json",
    data: {
        "action": "home_dota_4"
    },
    success: function (data, textStatus) {

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        var data = $.parseJSON(XMLHttpRequest.responseText.slice(11));
        // console.log(data.data);
        var html = template("dota4", data);
        $(".data .wrap .tempWrap>div.fLeft").append(html);
        cart();
    }
})
$.ajax({
    url: "php/api.php",
    type: "POST",
    dataType: "json",
    data: {
        "action": "home_dota_5"
    },
    success: function (data, textStatus) {

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        var data = $.parseJSON(XMLHttpRequest.responseText.slice(11));
        // console.log(data.data);
        var html = template("dota5", data);
        $(".data .wrap .tempWrap>div.fLeft").append(html);
        cart();
    }
})
// 电竞外设ajax
$.ajax({
    url: "php/api.php",
    type: "POST",
    dataType: "json",
    data: {
        "action": "djws"
    },
    success: function (data, textStatus) {

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        var data = $.parseJSON(XMLHttpRequest.responseText.slice(4));
        // console.log(data.data);
        var html = template("dj1", data);
        $(".dj .wrap .tempWrap>div.fLeft").append(html);
        cart();
    }
})


// 购物车有几件商品
function cart_num() {
    $.ajax({
        url: "php/api.php",
        type: "POST",
        dataType: "json",
        data: {
            "action": "cart"
        },
        success: function (data, textStatus) {

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            var data = $.parseJSON(XMLHttpRequest.responseText.slice(4));
            // console.log(data.data.length);
            $(".fixed_bar .fixed_cart_tip a span font.cartNum").text(data.data.length);
            $(".header .car>a .car_num").text(data.data.length);
        }
    })

}
cart_num();