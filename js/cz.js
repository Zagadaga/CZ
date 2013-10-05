 
var CZ = CZ || {};
var CZ = {
    imgs: ["band", "car", "women"],
    counter: 0,
    init: function(action) {
        this.resize();
        this.imageCarouselInit();
    },
    imageCarouselInit: function () {
        setInterval(function() {CZ.imageCarouselUpdate()}, 5000); 
    },
    imageCarouselUpdate: function () {
        $('body').css({"background-image": "url(img/bg/" + this.imgs[this.counter] + ".jpg)"});
        if (this.counter == this.imgs.length-1) {
            this.counter = 0;
        } else {
            this.counter++;
        }

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
