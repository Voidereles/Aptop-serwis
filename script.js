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
        background.style.backgroundPositionX = (-e.offsetX) / 50 + "px";
        background.style.backgroundPositionY = (-e.offsetY) / 50 + "px";
    });
}

