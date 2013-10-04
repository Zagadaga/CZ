 
var CZ = CZ || {};
var CZ = {
    imgs: ["band", "car", "woman"],
    init: function(action) {
        this.resize();
        this.imageCarousel();
    },
    imageCarousel: function () {
 
    },

    resize: function () {
        CONFIG.currentW = $(window).width();
        CONFIG.currentH = $(window).height();
        CONFIG.halfW = CONFIG.currentW /2;
        CONFIG.halfH = CONFIG.currentH /2;
        $("html, body").css({"width": CONFIG.currentW, "height": CONFIG.currentH});
    }

 
}

$(function() {
    CZ.init();
     $(window).resize(function() {
       CZ.resize();
    });
    
});

var CONFIG = CONFIG || {};
