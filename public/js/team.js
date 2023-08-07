// [mobile]

if (window.matchMedia("(max-width: 480px)").matches) {
  window.onload = function() {
    document.querySelector("#tca-card").style.setProperty("width", "calc(" + document.querySelector("#navbar").offsetWidth + "px - 102px)", "important");
    document.querySelector("#jip-card").style.setProperty("width", "calc(" + document.querySelector("#navbar").offsetWidth + "px - 102px)", "important");
    document.querySelector("#hyderite-card").style.setProperty("width", "calc(" + document.querySelector("#navbar").offsetWidth + "px - 102px)", "important");
    document.querySelector("#h-gradient").style.setProperty("width", document.querySelector("#navbar").offsetWidth + "px", "important");
    document.querySelector("#j-gradient").style.setProperty("width", document.querySelector("#navbar").offsetWidth + "px", "important");
    document.querySelector("#t-gradient").style.setProperty("width", document.querySelector("#navbar").offsetWidth + "px", "important");
    document.querySelector("#toast-name").style.transform = "none";
    document.querySelector("#toast-title").style.transform = "none";
    document.querySelector("#tca-pfp").style.transform = "none";
  };

  document.querySelector("#hyderite-card").addEventListener("click", function() {
    var card = document.querySelector("#hyderite-card");
    card.style.transform = "rotate(0) scale(0.85)";
    document.querySelector("#h-wrapper").style.opacity = "0";
    setTimeout(function() {
      card.style.position = "fixed";
      document.querySelector("#black-filter").style.zIndex = "10";
      document.querySelector("#black-filter").style.opacity = "0.5";
      document.querySelector("#hyderite-card").style.zIndex = "100";
      document.querySelector("#h-wrapper").style.display = "none";
      document.querySelector("#h-gradient").style.display = "none";
      card.style.transform = "scale(1)";
      card.style.height = "calc(100% - 182.5px)";
      card.style.width = "calc(100% - 120px)";
      card.style.margin = "10px";
      card.style.top = "0px";
      card.style.left = "0px";
      document.querySelector("#h-about-me-extended-txt").style.height = "calc(" + document.querySelector("#hyderite-card").offsetHeight + "px - 155px - 120px - 61px - 16px - 39px - 16px)";
      card.addEventListener("click", function() {
        card.style.transform = "scale(1)";
      });
      document.querySelector("#h-wrapper-extended").style.display = "block";
      document.querySelector("#h-wrapper-extended").style.opacity = "1";
      setTimeout(function() {
        document.querySelector("#h-extended-title").style.opacity = "1";
        document.querySelector("#h-extended-title").style.transform = "translateY(0)";
        document.querySelector("#h-extended-pfp").style.opacity = "1";
        document.querySelector("#h-extended-pfp").style.transform = "translateY(0)";
        setTimeout(function() {
          document.querySelector("#h-extended-socials").style.opacity = "1";
          document.querySelector("#h-extended-socials").style.transform = "translateY(0)";
          document.querySelector("#h-extended-socials-title").style.opacity = "1";
          document.querySelector("#h-extended-socials-title").style.transform = "translateY(0)";
          setTimeout(function() {
            document.querySelector("#h-extended-about").style.opacity = "1";
            document.querySelector("#h-extended-about").style.transform = "translateY(0)";
          }, 300);
        }, 300);
      }, 700);
    }, 400);
  }, { once: true });

  document.querySelector("#jip-card").addEventListener("click", function() {
    var card = document.querySelector("#jip-card");
    card.style.transform = "rotate(0) scale(0.85)";
    document.querySelector("#j-wrapper").style.opacity = "0";
    setTimeout(function() {
      card.style.zIndex = "100";
      card.style.position = "fixed";
      document.querySelector("#black-filter").style.zIndex = "10";
      document.querySelector("#black-filter").style.opacity = "0.5";
      document.querySelector("#jip-card").style.zIndex = "100";
      document.querySelector("#j-wrapper").style.display = "none";
      document.querySelector("#j-gradient").style.display = "none";
      card.style.transform = "scale(1)";
      card.style.height = "calc(100% - 182.5px)";
      card.style.width = "calc(100% - 120px)";
      card.style.margin = "10px";
      card.style.top = "0px";
      card.style.left = "0px";
      // document.querySelector("#j-about-me-extended-txt").style.height = "calc(" + document.querySelector("#jip-card").offsetHeight + "px - 155px - 120px - 61px - 16px - 39px - 16px)";
      card.addEventListener("click", function() {
        card.style.transform = "scale(1)";
      });
      document.querySelector("#j-wrapper-extended").style.display = "block";
      document.querySelector("#j-wrapper-extended").style.opacity = "1";
      setTimeout(function() {
        document.querySelector("#j-extended-title").style.opacity = "1";
        document.querySelector("#j-extended-title").style.transform = "translateY(0)";
        document.querySelector("#j-extended-pfp").style.opacity = "1";
        document.querySelector("#j-extended-pfp").style.transform = "translateY(0)";
        setTimeout(function() {
          document.querySelector("#j-extended-socials").style.opacity = "1";
          document.querySelector("#j-extended-socials").style.transform = "translateY(0)";
          document.querySelector("#j-extended-socials-title").style.opacity = "1";
          document.querySelector("#j-extended-socials-title").style.transform = "translateY(0)";
          setTimeout(function() {
            document.querySelector("#j-extended-about").style.opacity = "1";
            document.querySelector("#j-extended-about").style.transform = "translateY(0)";
          }, 300);
        }, 300);
      }, 700);
    }, 400);
  }, { once: true });

  document.querySelector("#tca-card").addEventListener("click", function() {
    var card = document.querySelector("#tca-card");
    card.style.transform = "rotate(0) scale(0.85)";
    document.querySelector("#t-wrapper").style.opacity = "0";
    setTimeout(function() {
      card.style.zIndex = "100";
      card.style.position = "fixed";
      document.querySelector("#black-filter").style.zIndex = "10";
      document.querySelector("#black-filter").style.opacity = "0.5";
      document.querySelector("#tca-card").style.zIndex = "100";
      document.querySelector("#t-wrapper").style.display = "none";
      document.querySelector("#t-gradient").style.display = "none";
      card.style.transform = "scale(1)";
      card.style.height = "calc(100% - 182.5px)";
      card.style.width = "calc(100% - 120px)";
      card.style.margin = "10px";
      card.style.top = "0px";
      card.style.left = "0px";
      document.querySelector("#t-about-me-extended-txt").style.height = "calc(" + document.querySelector("#tca-card").offsetHeight + "px - 155px - 120px - 61px - 16px - 39px - 16px)";
      card.addEventListener("click", function() {
        card.style.transform = "scale(1)";
      });
      document.querySelector("#t-wrapper-extended").style.display = "block";
      document.querySelector("#t-wrapper-extended").style.opacity = "1";
      setTimeout(function() {
        document.querySelector("#t-extended-title").style.opacity = "1";
        document.querySelector("#t-extended-title").style.transform = "translateY(0)";
        document.querySelector("#t-extended-pfp").style.opacity = "1";
        document.querySelector("#t-extended-pfp").style.transform = "translateY(0)";
        setTimeout(function() {
          document.querySelector("#t-extended-socials").style.opacity = "1";
          document.querySelector("#t-extended-socials").style.transform = "translateY(0)";
          document.querySelector("#t-extended-socials-title").style.opacity = "1";
          document.querySelector("#t-extended-socials-title").style.transform = "translateY(0)";
          setTimeout(function() {
            document.querySelector("#t-extended-about").style.opacity = "1";
            document.querySelector("#t-extended-about").style.transform = "translateY(0)";
          }, 300);
        }, 300);
      }, 700);
    }, 400);
  }, { once: true });
};

// [pc]

if (window.matchMedia("(min-width: 480px)").matches) {
  document.querySelector("#hyderite-card").addEventListener("click", function() {
    var card = document.querySelector("#hyderite-card");
    setTimeout(function() {
      card.style.width = "1000px";
      card.style.height = "500px";
    }, 400);
  });

  document.querySelector("#jip-card").addEventListener("click", function() {
    var card = document.querySelector("#jip-card");
    setTimeout(function() {
      card.style.width = "1000px";
      card.style.height = "500px";
      document.querySelector("#black-filter").style.zIndex = "10";
    }, 400);
  });

  document.querySelector("#tca-card").addEventListener("click", function() {
    var card = document.querySelector("#tca-card");
    setTimeout(function() {
      card.style.width = "1000px";
      card.style.height = "500px";
      document.querySelector("#black-filter").style.zIndex = "10";
    }, 400);
  });
};

document.querySelector("#hyderite-card").addEventListener("click", function() {
  var card = document.querySelector("#hyderite-card");
  card.style.transform = "scale(0.85)";
  document.querySelector("#h-wrapper").style.opacity = "0";
  setTimeout(function() {
    document.querySelector("#black-filter").style.zIndex = "10";
    document.querySelector("#black-filter").style.opacity = "0.5";
    document.querySelector("#hyderite-card").style.zIndex = "100";
    document.querySelector("#h-wrapper").style.display = "none";
    document.querySelector("#h-gradient").style.display = "none";
    card.style.transform = "scale(1)";
    card.addEventListener("click", function() {
      card.style.transform = "scale(1)";
    });
    document.querySelector("#h-wrapper-extended").style.display = "block";
    document.querySelector("#h-wrapper-extended").style.opacity = "1";
    setTimeout(function() {
      document.querySelector("#h-extended-title").style.opacity = "1";
      document.querySelector("#h-extended-title").style.transform = "translateY(0)";
      document.querySelector("#h-extended-pfp").style.opacity = "1";
      document.querySelector("#h-extended-pfp").style.transform = "translateY(0)";
      setTimeout(function() {
        document.querySelector("#h-extended-socials").style.opacity = "1";
        document.querySelector("#h-extended-socials").style.transform = "translateY(0)";
        document.querySelector("#h-extended-socials-title").style.opacity = "1";
        document.querySelector("#h-extended-socials-title").style.transform = "translateY(0)";
        setTimeout(function() {
          document.querySelector("#h-extended-about").style.opacity = "1";
          document.querySelector("#h-extended-about").style.transform = "translateY(0)";
        }, 300);
      }, 300);
    }, 700);
    card.onmouseover = function() {
      document.querySelector("#hyderite-card").style.transform = "translateY(0)";
    };
  }, 400);
}, { once: true });

document.querySelector("#hyderite-card").onmouseover = function() {
  document.querySelector("#hyderite-card").style.transform = "translateY(-25px)";
};

document.querySelector("#hyderite-card").onmouseout = function() {
  document.querySelector("#hyderite-card").style.transform = "translateY(0)";
};

document.querySelector("#jip-card").addEventListener("click", function() {
  var card = document.querySelector("#jip-card");
  card.style.transform = "scale(0.85) translate(-215px, 0px)";
  document.querySelector("#j-wrapper").style.opacity = "0";
  setTimeout(function() {
    document.querySelector("#black-filter").style.opacity = "0.5";
    document.querySelector("#jip-card").style.zIndex = "100";
    document.querySelector("#j-wrapper").style.display = "none";
    document.querySelector("#j-gradient").style.display = "none";
    card.style.transform = "scale(1)";
    card.addEventListener("click", function() {
      card.style.transform = "scale(1)";
    });
    document.querySelector("#j-wrapper-extended").style.display = "block";
    document.querySelector("#j-wrapper-extended").style.opacity = "1";
    setTimeout(function() {
      document.querySelector("#j-extended-title").style.opacity = "1";
      document.querySelector("#j-extended-title").style.transform = "translateY(0)";
      document.querySelector("#j-extended-pfp").style.opacity = "1";
      document.querySelector("#j-extended-pfp").style.transform = "translateY(0)";
      setTimeout(function() {
        document.querySelector("#j-extended-socials").style.opacity = "1";
        document.querySelector("#j-extended-socials").style.transform = "translateY(0)";
        document.querySelector("#j-extended-socials-title").style.opacity = "1";
        document.querySelector("#j-extended-socials-title").style.transform = "translateY(0)";
        setTimeout(function() {
          document.querySelector("#j-extended-about").style.opacity = "1";
          document.querySelector("#j-extended-about").style.transform = "translateY(0)";
        }, 300);
      }, 300);
    }, 700);
    card.onmouseover = function() {
      document.querySelector("#jip-card").style.transform = "rotate(0deg) translate(0px, 0px)";
    };
    card.onmouseout = function() {
      document.querySelector("#jip-card").style.transform = "rotate(0deg) translate(0px, 0px)";
    };
  }, 400);
}, { once: true });

document.querySelector("#jip-card").onmouseover = function() {
  document.querySelector("#jip-card").style.transform = "rotate(-20deg) translate(-215px, -70px)";
  document.querySelector("#jip-card").style.zIndex = "10";
};

document.querySelector("#jip-card").onmouseout = function() {
  document.querySelector("#jip-card").style.transform = "rotate(-15deg) translate(-215px, -30px)";
  document.querySelector("#jip-card").style.zIndex = "0";
};

document.querySelector("#tca-card").addEventListener("click", function() {
  var card = document.querySelector("#tca-card");
  card.style.transform = "scale(0.85) translate(215px, 0px)";
  document.querySelector("#t-wrapper").style.opacity = "0";
  setTimeout(function() {
    document.querySelector("#black-filter").style.opacity = "0.5";
    document.querySelector("#tca-card").style.zIndex = "100";
    document.querySelector("#t-wrapper").style.display = "none";
    document.querySelector("#t-gradient").style.display = "none";
    card.style.transform = "scale(1)";
    card.addEventListener("click", function() {
      card.style.transform = "scale(1)";
    });
    document.querySelector("#t-wrapper-extended").style.display = "block";
    document.querySelector("#t-wrapper-extended").style.opacity = "1";
    setTimeout(function() {
      document.querySelector("#t-extended-title").style.opacity = "1";
      document.querySelector("#t-extended-title").style.transform = "translateY(0)";
      document.querySelector("#t-extended-pfp").style.opacity = "1";
      document.querySelector("#t-extended-pfp").style.transform = "translateY(0)";
      setTimeout(function() {
        document.querySelector("#t-extended-socials").style.opacity = "1";
        document.querySelector("#t-extended-socials").style.transform = "translateY(0)";
        document.querySelector("#t-extended-socials-title").style.opacity = "1";
        document.querySelector("#t-extended-socials-title").style.transform = "translateY(0)";
        setTimeout(function() {
          document.querySelector("#t-extended-about").style.opacity = "1";
          document.querySelector("#t-extended-about").style.transform = "translateY(0)";
        }, 300);
      }, 300);
    }, 700);
    card.onmouseover = function() {
      document.querySelector("#tca-card").style.transform = "rotate(0deg) translate(0px, 0px)";
    };
    card.onmouseout = function() {
      document.querySelector("#tca-card").style.transform = "rotate(0deg) translate(0px, 0px)";
    };
  }, 400);
}, { once: true });

document.querySelector("#tca-card").onmouseover = function() {
  document.querySelector("#tca-card").style.transform = "rotate(20deg) translate(215px, -70px)";
  document.querySelector("#tca-card").style.zIndex = "10";
};

document.querySelector("#tca-card").onmouseout = function() {
  document.querySelector("#tca-card").style.transform = "rotate(15deg) translate(215px, -30px)";
  document.querySelector("#tca-card").style.zIndex = "0";
};

// after first click

document.querySelector("#black-filter").addEventListener("click", function() {
  var hCard = document.querySelector("#hyderite-card");
  var jCard = document.querySelector("#jip-card");
  var tCard = document.querySelector("#tca-card");
  if (hCard.style.width == "1000px") {
    document.querySelector("#h-wrapper-extended").style.opacity = "0";
    setTimeout(function() {
      hCard.style.width = "150px";
      hCard.style.height = "300px";
      document.querySelector("#black-filter").style.opacity = "0";
    }, 300);
    setTimeout(function() {
      document.querySelector("#black-filter").style.zIndex = "-1";
      hCard.style.zIndex = "1";
      document.querySelector("#h-wrapper").style.display = "block";
      document.querySelector("#h-gradient").style.display = "flex";
      document.querySelector("#h-gradient-arrow").style.display = "block";
      setTimeout(function() {
        document.querySelector("#h-wrapper").style.opacity = "1";
        document.querySelector("#h-gradient").style.opacity = "1";
      }, 300);
      document.querySelector("#h-wrapper-extended").style.display = "none";
      document.querySelector("#h-extended-title").style.opacity = "0";
      document.querySelector("#h-extended-title").style.transform = "translateY(10px)";
      document.querySelector("#h-extended-pfp").style.opacity = "0";
      document.querySelector("#h-extended-pfp").style.transform = "translateY(10px)";
      setTimeout(function() {
        document.querySelector("#h-extended-socials").style.opacity = "0";
        document.querySelector("#h-extended-socials").style.transform = "translateY(10px)";
        document.querySelector("#h-extended-socials-title").style.opacity = "0";
        document.querySelector("#h-extended-socials-title").style.transform = "translateY(10px)";
        setTimeout(function() {
          document.querySelector("#h-extended-about").style.opacity = "0";
          document.querySelector("#h-extended-about").style.transform = "translateY(10px)";
        }, 300);
      }, 300);
      hCard.onmouseover = function() {
        document.querySelector("#hyderite-card").style.transform = "translateY(-25px)";
      };
    }, 600);
    document.querySelector("#hyderite-card").addEventListener("click", function() {
      var card = document.querySelector("#hyderite-card");
      card.style.transform = "scale(0.85)";
      document.querySelector("#h-wrapper").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#black-filter").style.zIndex = "10";
        document.querySelector("#black-filter").style.opacity = "0.5";
        document.querySelector("#hyderite-card").style.zIndex = "100";
        document.querySelector("#h-wrapper").style.display = "none";
        document.querySelector("#h-gradient").style.display = "none";
        document.querySelector("#h-gradient-arrow").style.display = "none";
        card.style.transform = "scale(1)";
        card.style.width = "1000px";
        card.style.height = "500px";
        card.addEventListener("click", function() {
          card.style.transform = "scale(1)";
        });
        document.querySelector("#h-wrapper-extended").style.display = "block";
        document.querySelector("#h-wrapper-extended").style.opacity = "1";
        setTimeout(function() {
          document.querySelector("#h-extended-title").style.opacity = "1";
          document.querySelector("#h-extended-title").style.transform = "translateY(0)";
          document.querySelector("#h-extended-pfp").style.opacity = "1";
          document.querySelector("#h-extended-pfp").style.transform = "translateY(0)";
          setTimeout(function() {
            document.querySelector("#h-extended-socials").style.opacity = "1";
            document.querySelector("#h-extended-socials").style.transform = "translateY(0)";
            document.querySelector("#h-extended-socials-title").style.opacity = "1";
            document.querySelector("#h-extended-socials-title").style.transform = "translateY(0)";
            setTimeout(function() {
              document.querySelector("#h-extended-about").style.opacity = "1";
              document.querySelector("#h-extended-about").style.transform = "translateY(0)";
            }, 300);
          }, 300);
        }, 700);
        card.onmouseover = function() {
          document.querySelector("#hyderite-card").style.transform = "translateY(0)";
        };
      }, 400);
    });
  } else if (jCard.style.width == "1000px") {
    document.querySelector("#j-wrapper-extended").style.opacity = "0";
    setTimeout(function() {
      jCard.style.width = "150px";
      jCard.style.height = "300px";
      jCard.style.transform = "rotate(-15deg) translate(-215px, -30px)";
      document.querySelector("#black-filter").style.opacity = "0";
    }, 300);
    setTimeout(function() {
      document.querySelector("#black-filter").style.zIndex = "-1";
      jCard.style.zIndex = "1";
      document.querySelector("#j-wrapper").style.display = "block";
      document.querySelector("#j-gradient").style.display = "flex";
      document.querySelector("#j-gradient-arrow").style.display = "block";
      setTimeout(function() {
        document.querySelector("#j-wrapper").style.opacity = "1";
        document.querySelector("#j-gradient").style.opacity = "1";
      }, 300);
      document.querySelector("#j-wrapper-extended").style.display = "none";
      document.querySelector("#j-extended-title").style.opacity = "0";
      document.querySelector("#j-extended-title").style.transform = "translateY(10px)";
      document.querySelector("#j-extended-pfp").style.opacity = "0";
      document.querySelector("#j-extended-pfp").style.transform = "translateY(10px)";
      setTimeout(function() {
        document.querySelector("#j-extended-socials").style.opacity = "0";
        document.querySelector("#j-extended-socials").style.transform = "translateY(10px)";
        document.querySelector("#j-extended-socials-title").style.opacity = "0";
        document.querySelector("#j-extended-socials-title").style.transform = "translateY(10px)";
        setTimeout(function() {
          document.querySelector("#j-extended-about").style.opacity = "0";
          document.querySelector("#j-extended-about").style.transform = "translateY(10px)";
        }, 300);
      }, 300);
      jCard.onmouseover = function() {
        jCard.style.transform = "rotate(-20deg) translate(-215px, -70px)";
        jCard.style.zIndex = "10";
      };
      jCard.onmouseout = function() {
        jCard.style.transform = "rotate(-15deg) translate(-215px, -30px)";
        jCard.style.zIndex = "0";
      };
      jCard.style.transform = "rotate(-15deg) translate(-215px, -30px)";
      jCard.style.zIndex = "0";
    }, 600);
    document.querySelector("#jip-card").addEventListener("click", function() {
      var card = document.querySelector("#jip-card");
      card.style.transform = "scale(0.85) translate(-215px, 0px)";
      document.querySelector("#j-wrapper").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#black-filter").style.zIndex = "10";
        document.querySelector("#black-filter").style.opacity = "0.5";
        document.querySelector("#jip-card").style.zIndex = "100";
        document.querySelector("#j-wrapper").style.display = "none";
        document.querySelector("#j-gradient").style.display = "none";
        document.querySelector("#j-gradient-arrow").style.display = "none";
        card.style.transform = "scale(1)";
        card.style.width = "1000px";
        card.style.height = "500px";
        card.addEventListener("click", function() {
          card.style.transform = "scale(1)";
        });
        document.querySelector("#j-wrapper-extended").style.display = "block";
        document.querySelector("#j-wrapper-extended").style.opacity = "1";
        setTimeout(function() {
          document.querySelector("#j-extended-title").style.opacity = "1";
          document.querySelector("#j-extended-title").style.transform = "translateY(0)";
          document.querySelector("#j-extended-pfp").style.opacity = "1";
          document.querySelector("#j-extended-pfp").style.transform = "translateY(0)";
          setTimeout(function() {
            document.querySelector("#j-extended-socials").style.opacity = "1";
            document.querySelector("#j-extended-socials").style.transform = "translateY(0)";
            document.querySelector("#j-extended-socials-title").style.opacity = "1";
            document.querySelector("#j-extended-socials-title").style.transform = "translateY(0)";
            setTimeout(function() {
              document.querySelector("#j-extended-about").style.opacity = "1";
              document.querySelector("#j-extended-about").style.transform = "translateY(0)";
            }, 300);
          }, 300);
        }, 700);
        card.onmouseover = function() {
          document.querySelector("#jip-card").style.transform = "rotate(0deg) translate(0px, 0px)";
        };
        card.onmouseout = function() {
          document.querySelector("#jip-card").style.transform = "rotate(0deg) translate(0px, 0px)";
        };
      }, 400);
    }, { once: true });
  } else {
    document.querySelector("#t-wrapper-extended").style.opacity = "0";
    setTimeout(function() {
      tCard.style.width = "150px";
      tCard.style.height = "300px";
      tCard.style.transform = "rotate(15deg) translate(215px, -30px)";
      document.querySelector("#black-filter").style.opacity = "0";
    }, 300);
    setTimeout(function() {
      document.querySelector("#black-filter").style.zIndex = "-1";
      tCard.style.zIndex = "1";
      document.querySelector("#t-wrapper").style.display = "block";
      document.querySelector("#t-gradient").style.display = "flex";
      document.querySelector("#t-gradient-arrow").style.display = "block";
      setTimeout(function() {
        document.querySelector("#t-wrapper").style.opacity = "1";
        document.querySelector("#t-gradient").style.opacity = "1";
      }, 300);
      document.querySelector("#t-wrapper-extended").style.display = "none";
      document.querySelector("#t-extended-title").style.opacity = "0";
      document.querySelector("#t-extended-title").style.transform = "translateY(10px)";
      document.querySelector("#t-extended-pfp").style.opacity = "0";
      document.querySelector("#t-extended-pfp").style.transform = "translateY(10px)";
      setTimeout(function() {
        document.querySelector("#t-extended-socials").style.opacity = "0";
        document.querySelector("#t-extended-socials").style.transform = "translateY(10px)";
        document.querySelector("#t-extended-socials-title").style.opacity = "0";
        document.querySelector("#t-extended-socials-title").style.transform = "translateY(10px)";
        setTimeout(function() {
          document.querySelector("#t-extended-about").style.opacity = "0";
          document.querySelector("#t-extended-about").style.transform = "translateY(10px)";
        }, 300);
      }, 300);
      tCard.onmouseover = function() {
        tCard.style.transform = "rotate(20deg) translate(215px, -70px)";
        tCard.style.zIndex = "10";
      };
      tCard.onmouseout = function() {
        tCard.style.transform = "rotate(15deg) translate(215px, -30px)";
        tCard.style.zIndex = "0";
      };
      tCard.style.transform = "rotate(15deg) translate(215px, -30px)";
      tCard.style.zIndex = "0";
    }, 600);
    document.querySelector("#tca-card").addEventListener("click", function() {
      var card = document.querySelector("#tca-card");
      card.style.transform = "scale(0.85) translate(215px, 0px)";
      document.querySelector("#t-wrapper").style.opacity = "0";
      setTimeout(function() {
        document.querySelector("#black-filter").style.zIndex = "10";
        document.querySelector("#black-filter").style.opacity = "0.5";
        document.querySelector("#tca-card").style.zIndex = "100";
        document.querySelector("#t-wrapper").style.display = "none";
        document.querySelector("#t-gradient").style.display = "none";
        document.querySelector("#t-gradient-arrow").style.display = "none";
        card.style.transform = "scale(1)";
        card.style.width = "1000px";
        card.style.height = "500px";
        card.addEventListener("click", function() {
          card.style.transform = "scale(1)";
        });
        document.querySelector("#t-wrapper-extended").style.display = "block";
        document.querySelector("#t-wrapper-extended").style.opacity = "1";
        setTimeout(function() {
          document.querySelector("#t-extended-title").style.opacity = "1";
          document.querySelector("#t-extended-title").style.transform = "translateY(0)";
          document.querySelector("#t-extended-pfp").style.opacity = "1";
          document.querySelector("#t-extended-pfp").style.transform = "translateY(0)";
          setTimeout(function() {
            document.querySelector("#t-extended-socials").style.opacity = "1";
            document.querySelector("#t-extended-socials").style.transform = "translateY(0)";
            document.querySelector("#t-extended-socials-title").style.opacity = "1";
            document.querySelector("#t-extended-socials-title").style.transform = "translateY(0)";
            setTimeout(function() {
              document.querySelector("#t-extended-about").style.opacity = "1";
              document.querySelector("#t-extended-about").style.transform = "translateY(0)";
            }, 300);
          }, 300);
        }, 700);
        card.onmouseover = function() {
          document.querySelector("#tca-card").style.transform = "rotate(0deg) translate(0px, 0px)";
        };
        card.onmouseout = function() {
          document.querySelector("#tca-card").style.transform = "rotate(0deg) translate(0px, 0px)";
        };
      }, 400);
    }, { once: true });
  };
});

var closeBtn = document.getElementsByClassName("close");

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function() {
    var hCard = document.querySelector("#hyderite-card");
    var jCard = document.querySelector("#jip-card");
    var tCard = document.querySelector("#tca-card");
    var hWrapper = document.querySelector("#h-wrapper-extended");
    var jWrapper = document.querySelector("#j-wrapper-extended");
    var tWrapper = document.querySelector("#t-wrapper-extended");
    if (hWrapper.style.display == "block") {
      document.querySelector("#h-wrapper-extended").style.opacity = "0";
      setTimeout(function() {
        hCard.style.width = "150px";
        hCard.style.height = "300px";
        document.querySelector("#black-filter").style.opacity = "0";
      }, 300);
      setTimeout(function() {
        document.querySelector("#black-filter").style.zIndex = "-1";
        hCard.style.zIndex = "1";
        document.querySelector("#h-wrapper").style.display = "block";
        document.querySelector("#h-gradient").style.display = "flex";
        setTimeout(function() {
          document.querySelector("#h-wrapper").style.opacity = "1";
          document.querySelector("#h-gradient").style.opacity = "1";
        }, 300);
        document.querySelector("#h-wrapper-extended").style.display = "none";
        document.querySelector("#h-extended-title").style.opacity = "0";
        document.querySelector("#h-extended-title").style.transform = "translateY(10px)";
        document.querySelector("#h-extended-pfp").style.opacity = "0";
        document.querySelector("#h-extended-pfp").style.transform = "translateY(10px)";
        setTimeout(function() {
          document.querySelector("#h-extended-socials").style.opacity = "0";
          document.querySelector("#h-extended-socials").style.transform = "translateY(10px)";
          document.querySelector("#h-extended-socials-title").style.opacity = "0";
          document.querySelector("#h-extended-socials-title").style.transform = "translateY(10px)";
          setTimeout(function() {
            document.querySelector("#h-extended-about").style.opacity = "0";
            document.querySelector("#h-extended-about").style.transform = "translateY(10px)";
          }, 300);
        }, 300);
        hCard.onmouseover = function() {
          document.querySelector("#hyderite-card").style.transform = "translateY(-25px)";
        };
      }, 600);
      setTimeout(function() {
        if (hCard.style.width = "150px", hCard.style.height = "300px") {
          document.querySelector("#hyderite-card").addEventListener("click", function() {
            var card = document.querySelector("#hyderite-card");
            card.style.transform = "scale(0.85)";
            document.querySelector("#h-wrapper").style.opacity = "0";
            setTimeout(function() {
              document.querySelector("#black-filter").style.zIndex = "10";
              document.querySelector("#black-filter").style.opacity = "0.5";
              document.querySelector("#hyderite-card").style.zIndex = "100";
              document.querySelector("#h-wrapper").style.display = "none";
              document.querySelector("#h-gradient").style.display = "none";
              card.style.transform = "scale(1)";
              card.style.width = "1000px";
              card.style.height = "500px";
              card.addEventListener("click", function() {
                card.style.transform = "scale(1)";
              });
              document.querySelector("#h-wrapper-extended").style.display = "block";
              document.querySelector("#h-wrapper-extended").style.opacity = "1";
              setTimeout(function() {
                document.querySelector("#h-extended-title").style.opacity = "1";
                document.querySelector("#h-extended-title").style.transform = "translateY(0)";
                document.querySelector("#h-extended-pfp").style.opacity = "1";
                document.querySelector("#h-extended-pfp").style.transform = "translateY(0)";
                setTimeout(function() {
                  document.querySelector("#h-extended-socials").style.opacity = "1";
                  document.querySelector("#h-extended-socials").style.transform = "translateY(0)";
                  document.querySelector("#h-extended-socials-title").style.opacity = "1";
                  document.querySelector("#h-extended-socials-title").style.transform = "translateY(0)";
                  setTimeout(function() {
                    document.querySelector("#h-extended-about").style.opacity = "1";
                    document.querySelector("#h-extended-about").style.transform = "translateY(0)";
                  }, 300);
                }, 300);
              }, 700);
              card.onmouseover = function() {
                document.querySelector("#hyderite-card").style.transform = "translateY(0)";
              };
            }, 400);
          }, { once: true });
        };
      }, 700);
    } else if (jWrapper.style.display == "block") {
      document.querySelector("#j-wrapper-extended").style.opacity = "0";
      setTimeout(function() {
        jCard.style.width = "150px";
        jCard.style.height = "300px";
        jCard.style.transform = "rotate(-15deg) translate(-215px, -30px)";
        document.querySelector("#black-filter").style.opacity = "0";
      }, 300);
      setTimeout(function() {
        document.querySelector("#black-filter").style.zIndex = "-1";
        jCard.style.zIndex = "1";
        document.querySelector("#j-wrapper").style.display = "block";
        document.querySelector("#j-gradient").style.display = "flex";
        setTimeout(function() {
          document.querySelector("#j-wrapper").style.opacity = "1";
          document.querySelector("#j-gradient").style.opacity = "1";
        }, 300);
        document.querySelector("#j-wrapper-extended").style.display = "none";
        document.querySelector("#j-extended-title").style.opacity = "0";
        document.querySelector("#j-extended-title").style.transform = "translateY(10px)";
        document.querySelector("#j-extended-pfp").style.opacity = "0";
        document.querySelector("#j-extended-pfp").style.transform = "translateY(10px)";
        setTimeout(function() {
          document.querySelector("#j-extended-socials").style.opacity = "0";
          document.querySelector("#j-extended-socials").style.transform = "translateY(10px)";
          document.querySelector("#j-extended-socials-title").style.opacity = "0";
          document.querySelector("#j-extended-socials-title").style.transform = "translateY(10px)";
          setTimeout(function() {
            document.querySelector("#j-extended-about").style.opacity = "0";
            document.querySelector("#j-extended-about").style.transform = "translateY(10px)";
          }, 300);
        }, 300);
        jCard.onmouseover = function() {
          jCard.style.transform = "rotate(-20deg) translate(-215px, -70px)";
          jCard.style.zIndex = "10";
        };
        jCard.onmouseout = function() {
          jCard.style.transform = "rotate(-15deg) translate(-215px, -30px)";
          jCard.style.zIndex = "0";
        };
        jCard.style.transform = "rotate(-15deg) translate(-215px, -30px)";
        jCard.style.zIndex = "0";
      }, 600);
      setTimeout(function() {
        if (jCard.style.width = "150px", jCard.style.height = "300px") {
          document.querySelector("#jip-card").addEventListener("click", function() {
            var card = document.querySelector("#jip-card");
            card.style.transform = "scale(0.85) translate(-215px, 0px)";
            document.querySelector("#j-wrapper").style.opacity = "0";
            setTimeout(function() {
              document.querySelector("#black-filter").style.zIndex = "10";
              document.querySelector("#black-filter").style.opacity = "0.5";
              document.querySelector("#jip-card").style.zIndex = "100";
              document.querySelector("#j-wrapper").style.display = "none";
              document.querySelector("#j-gradient").style.display = "none";
              card.style.transform = "scale(1)";
              card.style.width = "1000px";
              card.style.height = "500px";
              card.addEventListener("click", function() {
                card.style.transform = "scale(1)";
              });
              document.querySelector("#j-wrapper-extended").style.display = "block";
              document.querySelector("#j-wrapper-extended").style.opacity = "1";
              setTimeout(function() {
                document.querySelector("#j-extended-title").style.opacity = "1";
                document.querySelector("#j-extended-title").style.transform = "translateY(0)";
                document.querySelector("#j-extended-pfp").style.opacity = "1";
                document.querySelector("#j-extended-pfp").style.transform = "translateY(0)";
                setTimeout(function() {
                  document.querySelector("#j-extended-socials").style.opacity = "1";
                  document.querySelector("#j-extended-socials").style.transform = "translateY(0)";
                  document.querySelector("#j-extended-socials-title").style.opacity = "1";
                  document.querySelector("#j-extended-socials-title").style.transform = "translateY(0)";
                  setTimeout(function() {
                    document.querySelector("#j-extended-about").style.opacity = "1";
                    document.querySelector("#j-extended-about").style.transform = "translateY(0)";
                  }, 300);
                }, 300);
              }, 700);
              card.onmouseover = function() {
                document.querySelector("#jip-card").style.transform = "rotate(0deg) translate(0px, 0px)";
              };
              card.onmouseout = function() {
                document.querySelector("#jip-card").style.transform = "rotate(0deg) translate(0px, 0px)";
              };
            }, 400);
          }, { once: true });
        };
      }, 600);
    } else if (tWrapper.style.display == "block") {
      document.querySelector("#t-wrapper-extended").style.opacity = "0";
      setTimeout(function() {
        tCard.style.width = "150px";
        tCard.style.height = "300px";
        tCard.style.transform = "rotate(15deg) translate(215px, -30px)";
        document.querySelector("#black-filter").style.opacity = "0";
      }, 300);
      setTimeout(function() {
        document.querySelector("#black-filter").style.zIndex = "-1";
        tCard.style.zIndex = "1";
        document.querySelector("#t-wrapper").style.display = "block";
        document.querySelector("#t-gradient").style.display = "flex";
        setTimeout(function() {
          document.querySelector("#t-wrapper").style.opacity = "1";
          document.querySelector("#t-gradient").style.opacity = "1";
        }, 300);
        document.querySelector("#t-wrapper-extended").style.display = "none";
        document.querySelector("#t-extended-title").style.opacity = "0";
        document.querySelector("#t-extended-title").style.transform = "translateY(10px)";
        document.querySelector("#t-extended-pfp").style.opacity = "0";
        document.querySelector("#t-extended-pfp").style.transform = "translateY(10px)";
        setTimeout(function() {
          document.querySelector("#t-extended-socials").style.opacity = "0";
          document.querySelector("#t-extended-socials").style.transform = "translateY(10px)";
          document.querySelector("#t-extended-socials-title").style.opacity = "0";
          document.querySelector("#t-extended-socials-title").style.transform = "translateY(10px)";
          setTimeout(function() {
            document.querySelector("#t-extended-about").style.opacity = "0";
            document.querySelector("#t-extended-about").style.transform = "translateY(10px)";
          }, 300);
        }, 300);
        tCard.onmouseover = function() {
          tCard.style.transform = "rotate(20deg) translate(215px, -70px)";
          tCard.style.zIndex = "10";
        };
        tCard.onmouseout = function() {
          tCard.style.transform = "rotate(15deg) translate(215px, -30px)";
          tCard.style.zIndex = "0";
        };
        tCard.style.transform = "rotate(15deg) translate(215px, -30px)";
        tCard.style.zIndex = "0";
      }, 600);
      setTimeout(function() {
        if (tCard.style.width = "150px", tCard.style.height = "300px") {
          document.querySelector("#tca-card").addEventListener("click", function() {
            var card = document.querySelector("#tca-card");
            card.style.transform = "scale(0.85) translate(215px, 0px)";
            document.querySelector("#t-wrapper").style.opacity = "0";
            setTimeout(function() {
              document.querySelector("#black-filter").style.zIndex = "10";
              document.querySelector("#black-filter").style.opacity = "0.5";
              document.querySelector("#tca-card").style.zIndex = "100";
              document.querySelector("#t-wrapper").style.display = "none";
              document.querySelector("#t-gradient").style.display = "none";
              card.style.transform = "scale(1)";
              card.style.width = "1000px";
              card.style.height = "500px";
              card.addEventListener("click", function() {
                card.style.transform = "scale(1)";
              });
              document.querySelector("#t-wrapper-extended").style.display = "block";
              document.querySelector("#t-wrapper-extended").style.opacity = "1";
              setTimeout(function() {
                document.querySelector("#t-extended-title").style.opacity = "1";
                document.querySelector("#t-extended-title").style.transform = "translateY(0)";
                document.querySelector("#t-extended-pfp").style.opacity = "1";
                document.querySelector("#t-extended-pfp").style.transform = "translateY(0)";
                setTimeout(function() {
                  document.querySelector("#t-extended-socials").style.opacity = "1";
                  document.querySelector("#t-extended-socials").style.transform = "translateY(0)";
                  document.querySelector("#t-extended-socials-title").style.opacity = "1";
                  document.querySelector("#t-extended-socials-title").style.transform = "translateY(0)";
                  setTimeout(function() {
                    document.querySelector("#t-extended-about").style.opacity = "1";
                    document.querySelector("#t-extended-about").style.transform = "translateY(0)";
                  }, 300);
                }, 300);
              }, 700);
              card.onmouseover = function() {
                document.querySelector("#tca-card").style.transform = "rotate(0deg) translate(0px, 0px)";
              };
              card.onmouseout = function() {
                document.querySelector("#tca-card").style.transform = "rotate(0deg) translate(0px, 0px)";
              };
            }, 400);
          }, { once: true });
        };
      }, 600);
    };
  };
};
