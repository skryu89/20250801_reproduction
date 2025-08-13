$(document).ready(function(){
  $('.company-seniors').slick({
    slidesToShow: 3,        // 一度に表示する枚数
    slidesToScroll: 1,      // スクロールする枚数
    autoplay: true,         // 自動再生
    autoplaySpeed: 0,       // 間隔（0 にすると常に流れる）
    speed: 3000,            // スクロール速度（ms）
    cssEase: '5000',      // 一定速度で流れる
    infinite: true,         // 無限ループ
    arrows: false,          // 矢印非表示
    pauseOnHover: false,    // ホバーしても止めない
    variableWidth: true    // 画像幅に応じて可変
  });
});

