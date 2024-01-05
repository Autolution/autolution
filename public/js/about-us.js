window.onload = function () {
    setTimeout(function () {
        document.querySelector("#one-title").style.transform = "translateY(-30px)";
        document.querySelector("#down-one").style.transform = "translateY(30px)";
        document.querySelector("#down-one").style.display = "block";
        setTimeout(function () {
            document.querySelector("#down-one").style.opacity = "1";
            document.querySelector("#down-one").style.animation = "scroll-down 2.5s";
            document.querySelector("#down-one").style.animationIterationCount = "infinite";
        }, 500);
    }, 1500);
    setTimeout(function () {
        document.querySelector("#two").style.transition = "transform .75s";
        document.querySelector("#three").style.transition = "transform .75s";
    }, 300);
};

document.querySelector("#one").addEventListener("mousewheel", function (event) {
    if (event.deltaY < 0) {
        return;
    } else if (event.deltaY > 0) {
        document.querySelector("#two").style.transform = "translateY(-110px)";
    };
});

document.querySelector("#two").addEventListener("mousewheel", function (event) {
    if (event.deltaY < 0) {
        document.querySelector("#two").style.transform = "translateY(100%)";
    } else if (event.deltaY > 0) {
        document.querySelector("#three").style.transform = "translateY(-110px)";
    };
});

document.querySelector("#three").addEventListener("mousewheel", function (event) {
    if (event.deltaY < 0) {
        document.querySelector("#three").style.transform = "translateY(100%)";
    } else if (event.deltaY > 0) {
        return;
    };
});

if (window.matchMedia("(max-width: 480px)").matches) {
    var touchPosition;

    document.body.ontouchstart = function (event) {
        touchPosition = event.changedTouches[0].clientY;
    }

    document.querySelector("#one").ontouchmove = function (event) {
        let newTouchPosition = event.changedTouches[0].clientY;
        if (newTouchPosition > touchPosition) {
            window.reload();
        };
        if (newTouchPosition < touchPosition) {
            document.querySelector("#two").style.transform = "translateY(-110px)";
        };
    };

    document.querySelector("#two").ontouchmove = function (event) {
        let newTouchPosition = event.changedTouches[0].clientY;
        if (newTouchPosition > touchPosition) {
            document.querySelector("#two").style.transform = "translateY(100%)";
        };
        if (newTouchPosition < touchPosition) {
            document.querySelector("#three").style.transform = "translateY(-110px)";
        };
    };

    document.querySelector("#three").ontouchmove = function (event) {
        let newTouchPosition = event.changedTouches[0].clientY;
        if (newTouchPosition > touchPosition) {
            document.querySelector("#three").style.transform = "translateY(100%)";
        };
        if (newTouchPosition < touchPosition) {

        };
    };
};

// copied from script.js

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".logo").onmouseover = function () {
        document.querySelector(".logo-nb-right").style.marginLeft = "191px";
        setTimeout(function () {
            document.querySelector("#brand-name-nb").style.visibility = "visible";
            document.querySelector("#brand-name-nb").style.opacity = "1";
        }, 300);
    };
    document.querySelector(".logo").onmouseout = function () {
        document.querySelector("#brand-name-nb").style.opacity = "0";
        setTimeout(function () {
            document.querySelector("#brand-name-nb").style.visibility = "hidden";
        }, 300);
        document.querySelector(".logo-nb-right").style.marginLeft = "22.27px";
    };
});

document.querySelector("#mobile-navbar-btn").onclick = function () {
    document.querySelector("#mobile-navbar-btn").style.opacity = "0";
    document.querySelector("#mobile-navbar-btn").style.visibility = "hidden";
    document.querySelector("#mobile-navbar-btn-cross").style.visibility = "visible";
    document.querySelector("#mobile-navbar-btn-cross").style.opacity = "1";
    document.querySelector("#navbar").style.height = "120px";
    document.querySelectorAll("#one, #two, #three").style.transform = "translateY(-118px)";
    setTimeout(function () {
        document.querySelector("#mobile-navbar").style.visibility = "visible";
        document.querySelector("#mobile-navbar").style.opacity = "1";
    }, 500);
};

document.querySelector("#mobile-navbar-btn-cross").onclick = function () {
    document.querySelector("#mobile-navbar-btn-cross").style.opacity = "0";
    document.querySelector("#mobile-navbar-btn-cross").style.visibility = "hidden";
    document.querySelector("#mobile-navbar-btn").style.visibility = "visible";
    document.querySelector("#mobile-navbar-btn").style.opacity = "1";
    document.querySelector("#mobile-navbar").style.opacity = "0";
    setTimeout(function () {
        document.querySelector("#navbar").style.height = "30px";
        document.querySelector("#mobile-navbar").style.visibility = "hidden";
        document.querySelectorAll("#one, #two, #three").style.transform = "translateY(0)";
    }, 500);
};

document.querySelector("#mobile-navbar").onscroll = function () {
    document.querySelector("#mobile-navbar-scroll").style.display = "none";
};

document.querySelector("#mobile-navbar-scroll").onclick = function () {
    document.querySelector("#mobile-navbar").scrollLeft += 150;
};
