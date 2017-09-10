/* 导航功能 用户信息展示 列表显示隐藏 显示焦点 */

var userinfoStr = localStorage.getItem('userinfo');

var userinfo = JSON.parse(userinfoStr);
console.log(userinfo.tc_avatar, userinfo.tc_name)
$('.aside img').attr('src', userinfo.tc_avatar);
$('.aside h4').text(userinfo.tc_name);



$('.navs a').on('click', function() {
    $(this).next('ul').slideToggle();

});

var path = location.pathname;
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();