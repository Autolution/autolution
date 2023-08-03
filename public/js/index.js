window.onload = function() {
  document.querySelector("#projects").style.top = "calc(" + document.querySelector("#about-us").offsetHeight + "px + 100vh)";
  document.querySelector("#footer").style.top = "calc(" + document.querySelector("#about-us").offsetHeight + "px + " + document.querySelector("#projects").offsetHeight + "px + 100vh)"; 
	document.querySelector("#home-1-logo-left").style.transform = "translate(185px, 12px)";
	document.querySelector("#home-1-logo-right").style.transform = "translate(-495px, 12px)";
	setTimeout(function() {
		document.querySelector("#home-1-logo-left").style.transform = "translate(0, 12px)";
		document.querySelector("#home-1-logo-right").style.transform = "translate(0, 12px)";
		setTimeout(function() {
			document.querySelector("#home-1-logo-left").style.transition = "none";
			document.querySelector("#home-1-logo-right").style.transition = "none";
			document.querySelector("#home-1-logo-left").style.transform = "translate(0, 12px)";
			document.querySelector("#home-1-logo-right").style.transform = "translate(0, 12px)";
			var elems = document.querySelectorAll(".home-1-title-txt");
			var index = 0, length = elems.length;
			for (; index < length; index++) {
				elems[index].style.visibility = "visible";
				elems[index].style.opacity = "1";
			};
		}, 500);
	}, 1500);
	setTimeout(function() {
		var elems = document.querySelectorAll(".home-1-title-txt");
		var index = 0, length = elems.length;
		for (; index < length; index++) {
			elems[index].style.opacity = "0";
		};
		setTimeout(() => {
			document.querySelector("#home-1-logo-left").style.transform = "translate(185px, 12px)";
			document.querySelector("#home-1-logo-right").style.transform = "translate(-495px, 12px)";
			document.querySelector("#home-1-logo-left").style.transition = "transform .3s";
			document.querySelector("#home-1-logo-right").style.transition = "transform .3s";
		}, 100);
    setTimeout(function() {
      document.querySelector("#home-1-logo-left").style.transform = "translate(-141.5px, 12px)";
      document.querySelector("#home-1-logo-right").style.transform = "translate(-170px, 12px)";
    }, 900);
    setTimeout(function() {
      document.querySelector(".home-1-title-txt-left").style.display = "none";
      document.querySelector("#home-1-logo-left").style.transition = "none";
			document.querySelector("#home-1-logo-right").style.transition = "none";
      document.querySelector("#home-1-logo-left").style.transform = "translate(0, 12px)";
      document.querySelector("#home-1-logo-right").style.transform = "translate(0, 12px)";
      document.querySelector(".home-1-title-txt-right").innerHTML = "utolution";
      document.querySelector(".home-1-title-txt-right").style.opacity = "1";
    }, 1300);
    setTimeout(function() {
      document.querySelector(".home-1-scroll").style.visibility = "visible";
      document.querySelector(".home-1-scroll").style.opacity = "1";
      setInterval(function() {
        document.querySelector("#mouse-animation-circle").style.transition = "none";
        document.querySelector("#mouse-animation-circle").style.transform = "translateY(0)";
          setTimeout(function() {
            document.querySelector("#mouse-animation-circle").style.transition = "transform .3s";
            document.querySelector("#mouse-animation-circle").style.transform = "translateY(-16px)";
          }, 1000);
      }, 2000);
    }, 1900);
	}, 3500);
};
