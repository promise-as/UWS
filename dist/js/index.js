"use strict";

$(function () {
  // 每一个num的高度取之对应的detail的高度
  $(".honor .honor-row").each(function (index, ele) {
    $(ele).children($("num")).outerHeight($($(".honor .detail")[index]).outerHeight(true));
  });
});