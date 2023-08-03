document.addEventListener("DOMContentLoaded", () => {
	document.querySelector(".logo").onmouseover = function() {
		document.querySelector(".logo-nb-right").style.marginLeft = "191px";
		setTimeout(function() {
			document.querySelector("#brand-name-nb").style.visibility = "visible";
			document.querySelector("#brand-name-nb").style.opacity = "1";
		}, 300);
	};
	document.querySelector(".logo").onmouseout = function() {
		document.querySelector("#brand-name-nb").style.opacity = "0";
		setTimeout(function() {
			document.querySelector("#brand-name-nb").style.visibility = "hidden";
		}, 300);
		document.querySelector(".logo-nb-right").style.marginLeft = "22.27px";
	};
});

document.querySelector("#mobile-navbar-btn").onclick = function() {
  document.querySelector("#mobile-navbar-btn").style.opacity = "0";
  document.querySelector("#mobile-navbar-btn").style.visibility = "hidden";
  document.querySelector("#mobile-navbar-btn-cross").style.visibility = "visible";
  document.querySelector("#mobile-navbar-btn-cross").style.opacity = "1";
  document.querySelector("#navbar").style.height = "120px";
  setTimeout(function() {
    document.querySelector("#mobile-navbar").style.visibility = "visible";
    document.querySelector("#mobile-navbar").style.opacity = "1";
  }, 500);
};

document.querySelector("#mobile-navbar-btn-cross").onclick = function() {
  document.querySelector("#mobile-navbar-btn-cross").style.opacity = "0";
  document.querySelector("#mobile-navbar-btn-cross").style.visibility = "hidden";
  document.querySelector("#mobile-navbar-btn").style.visibility = "visible";
  document.querySelector("#mobile-navbar-btn").style.opacity = "1";
  document.querySelector("#mobile-navbar").style.opacity = "0";
  setTimeout(function() {
    document.querySelector("#navbar").style.height = "30px";
    document.querySelector("#mobile-navbar").style.visibility = "hidden";
  }, 500);
};

document.querySelector("#mobile-navbar").onscroll = function() {
  document.querySelector("#mobile-navbar-scroll").style.display = "none";
};

document.querySelector("#mobile-navbar-scroll").onclick = function() {
  document.querySelector("#mobile-navbar").scrollLeft += 150;
};
