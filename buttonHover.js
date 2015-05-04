/*************************************************************
 按钮鼠标移动切换样式,通过CSS Sprite合并的图片以及此段代码来实现切换图片的效果
 Author : SK_YLove  Date : 2013-08
 按钮添加class：buttonHover
 自定义属性鼠标进入前背景图片位置buttonPositionStart，鼠标退出后背景图片位置buttonPositionEnd
 **************************************************************/
$(function () {
    $(".buttonHover").css("cursor", "pointer");
    $(".buttonHover").hover(function () {
        var buttonPositionStart = $(this).attr("buttonPositionStart");
        var buttonPositionEnd = $(this).attr("buttonPositionEnd");
        $(this).css("background-position", buttonPositionStart);
    }, function () {
        var buttonPositionStart = $(this).attr("buttonPositionStart");
        var buttonPositionEnd = $(this).attr("buttonPositionEnd");
        $(this).css("background-position", buttonPositionEnd);
    });
});