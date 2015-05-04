

/*************************************************************
 渐隐渐现banner_v2
 Author : SK_YLove  Date : 2013-12
 前进按钮id="next"，后退按钮id="prev"，图片div的id="banner_hidden"，自定义属性图片数量imgQuantity 图片后缀imgSuffix
 数量点id="dot",内部点[id^='dot_'],从0开始
 图片名称为easy_to_use-i
 自定义属性点的图片名称point  point_over
 **************************************************************/
$(function () {
    var quantity = $("#banner_hidden").attr("imgQuantity");
    var imgSuffix = $("#banner_hidden").attr("imgSuffix");
    var point = "/images/" + $("#dot").attr("point");
    var point_over = "/images/" + $("#dot").attr("point_over");
    for (var i = quantity; i >= 1; i--) {
        $("#banner_hidden").prepend('<img src="images/easy_to_use-' + i + '.' + imgSuffix + '" alt="">')
    }
    $("#banner_hidden").find("img").eq(0).css("opacity", "1");
    $("#next").click(function () {
        $("#banner_hidden").find("img").each(function (next_k) {
            if ($("#banner_hidden").find("img").eq(next_k - 1).css("opacity") == 1) {
                $("#banner_hidden").find("img").eq(next_k).animate({opacity: 1}, 150);
                $("#banner_hidden").find("img").eq(next_k - 1).animate({opacity: 0}, 350);
                $("img[id^='dot_']").attr("src", point);
                $("#dot_" + next_k).attr("src", point_over);
            }
        });
    });
    $("#prev").click(function () {
        $("#banner_hidden").find("img").each(function (prev_k) {
            if ($("#banner_hidden").find("img").eq(prev_k).css("opacity") == 1) {
                $("#banner_hidden").find("img").eq(prev_k - 1).animate({opacity: 1}, 150);
                $("#banner_hidden").find("img").eq(prev_k).animate({opacity: 0}, 350);
                $("img[id^='dot_']").attr("src", point);
                prev_hm = prev_k - 1;
                if (prev_k == 0) {
                    prev_hm = quantity - 1;
                }
                $("#dot_" + prev_hm).attr("src", point_over);
            }
        });
    });
    $("#dot li img").click(function () {
        var dot = $(this).attr("id").replace(/[^0-9]/ig, "");
        dot = parseInt(dot);
        $("img[id^='dot_']").attr("src", point);
        $(this).attr("src", point_over);
        $("#banner_hidden").find("img").each(function (dot_k) {
            if ($("#banner_hidden").find("img").eq(dot_k).css("opacity") == 1) {
                $("#banner_hidden").find("img").eq(dot).animate({opacity: 1}, 150);
                $("#banner_hidden").find("img").eq(dot_k).animate({opacity: 0}, 350);
            }
        });

    });

});
/*************************************************************
 自动渐隐渐现banner_v1
 Author : SK_YLove  Date : 2014-9
 图片div的id="imgHiddenShow"，自定义属性图片数量imgQuantity 图片后缀imgSuffix
 图片名称为easy_to_use_auto-i
 example:
 <div id="imgHiddenShow" imgSuffix="jpg" imgQuantity="3"></div>
 **************************************************************/
$(function () {
    var quantity = $("#imgHiddenShow").attr("imgQuantity");
    var imgSuffix = $("#imgHiddenShow").attr("imgSuffix");
    for (var i = quantity; i >= 1; i--) {
        $("#imgHiddenShow").prepend('<img src="images/easy_to_use_auto-' + i + '.' + imgSuffix + '" alt="">')
    }
    $("#imgHiddenShow").find("img").eq(0).css("opacity", "1");
    imgHiddenShow = setInterval(function startRequest() {
        $("#imgHiddenShow").find("img").each(function (next_k) {
            if ($("#imgHiddenShow").find("img").eq(next_k - 1).css("opacity") == 1) {
                $("#imgHiddenShow").find("img").eq(next_k).animate({opacity: 1}, 350);
                $("#imgHiddenShow").find("img").eq(next_k - 1).animate({opacity: 0}, 550);
            }
        });

    }, 3000);

});
