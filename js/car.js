
$(function () {
    var datastr = "";
    $.ajax({
        url: "php/api.php",
        type: "POST",
        // async:false,
        dataType: "json",
        data: { "action": "cart" },
        success: function (data, textStatus) {
            // console.log(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest)
            var data = $.parseJSON(XMLHttpRequest.responseText.slice(4));
            // console.log(data.data);
            if (data.code == 200) {
                $(".wrap .cart_list").show();
                $(".cart_null").hide();
                var html = template("content", data);
                $("tbody").append(html);
                console.log(data);
                // console.log(data.data[0].price);
                // 总价
                allNum();
                // 件数
                allgoods();

                //全选按钮
                $(".checkbox label").eq(0).on("click", function () {
                    $(".checkbox label").addClass("curr");
                    
                    allNum();
                    allgoods();
                })

                // 删除选中的商品
                $(".batch-delete").on("click", function () {
                    $(".cart_list tbody tr .curr").parents("tr").remove();
                    // 总价
                    allNum();
                    // 件数
                    allgoods();
                })

                // 计算几件商品
                function allgoods() {
                    var num = $("tbody span.checkbox label.curr").length;
                    $("#checkoutNum").text(num);
                }
                // 数量改变
                function changes() {
                    // 减
                    $(".reduce_j").on("click", function () {
                        // 获取数量
                        var num = $(this).next().val();
                        //获取单价
                        var price = $(this).parents("tr").find(".price font").attr("data-p");
                        // console.log(price);
                        if (num == 1) {
                            num = 1;
                        } else {
                            num--;
                        }
                        // 点击—之后把值传入，商品件数
                        $(this).next().val(num);
                        // 单价*数量
                        $(this).parents("tr").find(".price font").text(price * num);
                        allNum();
                    })
                    //加
                    $(".plus_t").on("click", function () {
                        var num = $(this).prev().val();
                        var price = $(this).parents("tr").find(".price font").attr("data-p");
                        console.log(price);
                        if (num == 9) {
                            num = 9;
                        } else {
                            num++;
                        }
                        $(this).prev().val(num);
                        $(this).parents("tr").find(".price font").text(price * num);
                        allNum();
                    })
                }
                changes()
                //计算总价
                function allNum() {
                    var num = 0;
                    for (let index = 0; index < $("tbody span.checkbox label.curr").length; index++) {
                        // console.log($("tbody span.checkbox label.curr").parents("tr").children("td.price").find("font").text());
                        num += parseInt($("tbody span.checkbox label.curr").eq(index).parents("tr").children("td.price").find("font").text());
                    }

                    // console.log(num);
                    $("#checkoutPrice").html(num);
                }
                // 勾选商品
                function addCurr() {
                    $("tbody span.checkbox label.curr").on("click", function () {
                        $(this).toggleClass("curr");
                        allgoods();
                        allNum()
                        // if($("tbody span.checkbox label").hasClass("curr")){
                        //     $(".checkbox label").eq(0).addClass("curr");
                        // }else{
                        //     $(".wrap .cart_list table thead tr td.state label").removeClass("curr");
                        // }
                
                    })
                }
                addCurr()

                // 点击删除，删除一行
                $(".cart_list td .del").on("click", function () {
                    $(this).parents("tr").remove();
                    // 总价
                    allNum();
                    // 件数
                    allgoods();
                    // 数据库中删除这条数据
                    var condition = $(this).parents("tr").find("td input[id]").attr("id");
                    console.log(condition);
                    $.ajax({
                        url: "php/api.php",
                        type: "POST",
                        dataType: "json",
                        data: { "action": "del", "condition": condition },
                        success: function (data, textStatus) {
                            console.log(data);
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            console.log(XMLHttpRequest);
                        }
                    })
                })

            } else {
                $(".cart_null").show();
                $(".wrap .cart_list").hide();
            }

        }
    })
})

