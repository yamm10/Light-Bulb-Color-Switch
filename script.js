// JavaScript

// console.log('Hello world!');

// トグルボタンのクリックイベント
$(".toggle").on("click", function() {
  $(".toggle").toggleClass("checked");
  const checkbox = $('input[name="check"]');
  checkbox.prop("checked", !checkbox.prop("checked"));
});

// ボタンがチェックされた状態に応じて画像を切り替える
$(".toggle").on("click", function() {
  const image = $("#toggle-image");
  if ($('input[name="check"]').prop("checked")) {
    image.attr("src", "images/raito.png");
    image.attr("alt", "on電球");
    $("body").addClass("black-background");
  } else {
    image.attr("src", "images/raito_kuro.png");
    image.attr("alt", "off電球");
    $("body").removeClass("black-background");
  }
});


$(function() {
  var body = $("body");
  var flag = true;

  $(document).on("mousemove", function(e) {
    if (flag) {
      var x = e.clientX;
      var y = e.clientY;

      var star = $("<span>").attr("class", "star");
      star.css({
        "top": y + "px",
        "left": x + "px"
      });
      body.prepend(star);
      setTimeout(function() {
        star.remove();
      }, 2000);

      flag = false;
      setTimeout(function() {
        flag = true;
      }, 100);
    }
  });
});



// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

// window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 500 );
