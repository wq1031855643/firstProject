$('.xw_nav_left').on('click','a',function(){
    $('.xw_nav_left').children().children().removeClass('xw_js-left');
    $(this).addClass('xw_js-left');
    if($(this).text()=='APP'||$(this).text()=='资讯'){
        $('#xw_wrap').attr('class','xw_wrap-b');
        $('#xw_header').attr('class','xw_header-b');
        $('#xw_logo').attr('class','xw_logo-b');
        $('#xw_nav_left').addClass('xw_nav_left-b');
        $('#xw_enter').addClass('xw_enter-b');
        $('#xw_sign').addClass('xw_sign-b');
        $('#xw_nav_right').addClass('xw_nav_right-b');
    }else{
        $('#xw_wrap').attr('class','xw_wrap');
        $('#xw_header').attr('class','xw_header');
        $('#xw_logo').attr('class','xw_logo');
        $('#xw_nav_left').removeClass('xw_nav_left-b');
        $('#xw_enter').removeClass('xw_enter-b');
        $('#xw_sign').removeClass('xw_sign-b');
        $('#xw_nav_right').removeClass('xw_nav_right-b');

    }
})
// 以上是头部
// $('.xw_sideBar')
$(window).scroll(function() {
    if($(document).scrollTop()>=50){
        $('.xw_sideBar').css('position','fixed').css('top',0);
    }else{
        $('.xw_sideBar').css('top',50);
    }
  });