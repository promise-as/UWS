$(function () {
  // 荣誉 每一个num的高度取之对应的detail的高度
  $(".honor .honor-row").each(function (index, ele) {
    $(ele).children($("num")).outerHeight(
        $($(".honor .detail")[index]).outerHeight(true)
    );
  });

  // 隐藏
  function hide(clickEle, goalEle) {
    clickEle.click(function () {
      goalEle.css("display", "none");
    });
  }

  // 关闭右侧导航
  hide($(".right-nav .close"), $(".right-nav"));

  // 关闭广告
  hide($(".ad .close"), $(".ad"));

  // 关闭弹窗1
  hide($(".test .closeLog"), $(".test"));

  // 关闭弹窗2
  hide($(".join .closeLog"), $(".join"));

  // 报名申请
  $('.check-item input:radio').click(function (e) {
    e.stopPropagation();
    // 如果想要找兄弟元素，先找其父元素然后再找儿子
    $(this).parents('.check-item').find('.user-apply').val($(this).val());
  });

  // 回到顶部
  $(".black-to-top").click(function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });

  // 预约试听 弹窗显示
  $(".subscribe").click(function () {
    $(".join").css("display", "block");
  });

  theaMsForm($('.sign-in'),function($data){
    if($data.flag == 'ok'){
      $(".join").css("display", "none");
    }else if($data.flag == 'no'){

    }
  });

  // 15秒
  setInterval(function () {
    $(".ad").css("display", "display");
  }, 15000);
});