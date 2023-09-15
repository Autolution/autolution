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
        alert("top");
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
        alert("bottom");
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
            alert("top");
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
            alert("bottom");
        };
    };
};
