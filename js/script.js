//  ハンバーガーメニューがクリックされるたびにopenというクラスを付け外しする
$(function () {
  $('div').click(function () {
    $('.bar1, .bar2, .bar3').toggleClass('open');
  })
});

$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());


$(function(){
  $('.menu-btn').on('click', function () {
    $('.logo-w').toggleClass('show');
});
}());

$(function(){
  $('.menu-btn').on('click', function () {
    $('.logo').toggleClass('lgo-hide');
});
}());

// fade
$(function(){
  $(".fade-img img:not(:first-child)").hide();
  setInterval(function() {
    $(".fade-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-img");
  },5000);
});

// reason fadein
//フェードインさせる要素を取得
const FADEIN_ELEM = document.getElementById('fadein-1');

//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 10)) {
        FADEIN_ELEM.classList.add('fadein-after-1');
    }else{
        FADEIN_ELEM.classList.remove('fadein-after-1');
    }
});

//フェードインさせる要素を取得
const FADEIN_ELEMt = document.getElementById('fadein-2');

//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOPt = FADEIN_ELEMt.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHTt = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHTt > (FADEIN_ELEM_TOPt + 10)) {
        FADEIN_ELEMt.classList.add('fadein-after-2');
    }else{
        FADEIN_ELEMt.classList.remove('fadein-after-2');
    }
});


// 受講生の声
// 非表示から拡大しつつ表示する
$(function () {
  $(".spee").on("inview", function () {
    $(this).toggleClass("is-inview");
  });
});