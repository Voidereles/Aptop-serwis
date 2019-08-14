$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header--scrolled');
        $('#headerLogo').addClass('header--scrolled__logo');
        $('#headerNavbar').addClass('header--scrolled__logo');
        $('#headerNavPills').addClass('header--scrolled__nav-pills')
    } else {
        $('#header').removeClass('header--scrolled');
        $('#headerLogo').removeClass('header--scrolled__logo');
        $('#headerNavbar').removeClass('header--scrolled__logo');
        $('#headerNavPills').removeClass('header--scrolled__nav-pills')
    }
});