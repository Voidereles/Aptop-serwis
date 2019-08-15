if (window.innerWidth > 992) {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header--scrolled');
            $('#headerLogo').addClass('header--scrolled__logo');
            $('#headerNavPills').addClass('header--scrolled__nav-pills')
        }

        else {
            $('#header').removeClass('header--scrolled');
            $('#headerLogo').removeClass('header--scrolled__logo');
            $('#headerNavPills').removeClass('header--scrolled__nav-pills')
        }
    });

    const background = document.querySelector("#start");


    window.addEventListener("mousemove", (e) => {
        background.style.backgroundPositionX = (-e.clientX) / 50 + "px";
        background.style.backgroundPositionY = (-e.clientY) / 50 + "px";
    });
}

$('.nav-link, .btn, header__nav-link, .navbar-brand').click(function () {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1500);
});