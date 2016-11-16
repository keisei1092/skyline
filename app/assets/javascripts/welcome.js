$(document).ready(function() {
  var styles = "margin: 0; border: none; width: 100%; height: 90%; color: #384158; background-color: #F2F2F2; font-family: 'YuGothic'; font-size: 16px; letter-spacing: .1em; line-height: 1.7em; box-sizing: border-box;-webkit-font-smoothing: subpixel-antialiased; text-align: justify; text-shadow: 0px 0px 0px #fff; ";
  if (navigator.userAgent.indexOf('Mobile') == -1) {
    styles = styles + 'padding: 100px 200px;'
  } else {
    styles = styles + 'padding: 60px;';
  }
  $('.main-textarea').attr('style', styles);
  $('.config-textarea').val($('.main-textarea').attr('style'));
  $('.config-textarea').on('change keyup paste', function() {
    $('.main-textarea').attr('style', $('.config-textarea').val());
  });
});