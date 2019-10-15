var currentPuzzleImage = 0;

var pic1 = ["img/pic1-lt.jpg","img/pic1-ct.jpg","img/pic1-rt.jpg", 
    "img/pic1-lc.jpg","img/pic1-cc.jpg","img/pic1-rc.jpg", 
    "img/pic1-lb.jpg","img/pic1-cb.jpg","img/pic1-rb.jpg"];

var pic2 = ["img/pic2-lt.jpg","img/pic2-ct.jpg","img/pic2-rt.jpg", 
    "img/pic2-lc.jpg","img/pic2-cc.jpg","img/pic2-rc.jpg", 
    "img/pic2-lb.jpg","img/pic2-cb.jpg","img/pic2-rb.jpg"];

var pic3 = ["img/pic3-lt.jpg","img/pic3-ct.jpg","img/pic3-rt.jpg", 
    "img/pic3-lc.jpg","img/pic3-cc.jpg","img/pic3-rc.jpg", 
    "img/pic3-lb.jpg","img/pic3-cb.jpg","img/pic3-rb.jpg"];

var pic4 = ["img/pic4-lt.jpg","img/pic4-ct.jpg","img/pic4-rt.jpg", 
    "img/pic4-lc.jpg","img/pic4-cc.jpg","img/pic4-rc.jpg", 
    "img/pic4-lb.jpg","img/pic4-cb.jpg","img/pic4-rb.jpg"];

var pic5 = ["img/pic5-lt.jpg","img/pic5-ct.jpg","img/pic5-rt.jpg", 
    "img/pic5-lc.jpg","img/pic5-cc.jpg","img/pic5-rc.jpg", 
    "img/pic5-lb.jpg","img/pic5-cb.jpg","img/pic5-rb.jpg"];

var pic6 = ["img/pic6-lt.jpg","img/pic6-ct.jpg","img/pic6-rt.jpg", 
    "img/pic6-lc.jpg","img/pic6-cc.jpg","img/pic6-rc.jpg", 
    "img/pic6-lb.jpg","img/pic6-cb.jpg","img/pic6-rb.jpg"];

var girl2 = ["img/girl2-lt.jpg", "img/girl2-ct.jpg", "img/girl2-rt.jpg", 
    "img/girl2-lc.jpg", "img/girl2-cc.jpg", "img/girl2-rc.jpg", 
    "img/girl2-lb.jpg", "img/girl2-cb.jpg", "img/girl2-rb.jpg"];

var aPics = ["img/a-lt.jpg","img/a-ct.jpg","img/a-rt.jpg", 
    "img/a-lc.jpg","img/a-cc.jpg","img/a-rc.jpg", 
    "img/a-lb.jpg","img/a-cb.jpg","img/a-rb.jpg"];
    
var sPics = ["img/s-lt.jpg","img/s-ct.jpg","img/s-rt.jpg", 
    "img/s-lc.jpg","img/s-cc.jpg","img/s-rc.jpg", 
    "img/s-lb.jpg","img/s-cb.jpg","img/s-rb.jpg"];

var mehjabin = ["img/mehjabin-lt.jpg","img/mehjabin-ct.jpg","img/mehjabin-rt.jpg", 
    "img/mehjabin-lc.jpg","img/mehjabin-cc.jpg","img/mehjabin-rc.jpg", 
    "img/mehjabin-lb.jpg","img/mehjabin-cb.jpg","img/mehjabin-rb.jpg"];

var sarika = ["img/sarika-lt.jpg","img/sarika-ct.jpg","img/sarika-rt.jpg", 
    "img/sarika-lc.jpg","img/sarika-cc.jpg","img/sarika-rc.jpg", 
    "img/sarika-lb.jpg","img/sarika-cb.jpg","img/sarika-rb.jpg"];

var rodela = ["img/rodela-lt.jpg","img/rodela-ct.jpg","img/rodela-rt.jpg", 
    "img/rodela-lc.jpg","img/rodela-cc.jpg","img/rodela-rc.jpg", 
    "img/rodela-lb.jpg","img/rodela-cb.jpg","img/rodela-rb.jpg"];

var kat = ["img/kat-lt.jpg","img/kat-ct.jpg","img/kat-rt.jpg", 
    "img/kat-lc.jpg","img/kat-cc.jpg","img/kat-rc.jpg", 
    "img/kat-lb.jpg","img/kat-cb.jpg","img/kat-rb.jpg"];

var dipu = ["img/dipu-lt.jpg","img/dipu-ct.jpg","img/dipu-rt.jpg", 
    "img/dipu-lc.jpg","img/dipu-cc.jpg","img/dipu-rc.jpg", 
    "img/dipu-lb.jpg","img/dipu-cb.jpg","img/dipu-rb.jpg"];


var images = [sPics, sarika, girl2, pic4, rodela, pic1, 
    aPics, mehjabin, kat, dipu, pic2, pic3, pic5, pic6];
    

//var src = images[Math.floor(Math.random() * images.length)];
var randomPuzzleImage = Math.floor(Math.random() * images.length);
currentPuzzleImage = randomPuzzleImage;
var src = images[currentPuzzleImage];

function q(selector) {
    return document.querySelector(selector);
}

function qa(selector) {
    return document.querySelectorAll(selector);
}

(function () {
    for(i=0; i<src.length; i++) {
        var img = document.createElement("img");
        img.id = "id" + i;
        img.src = src[i];
        q(".img-con").appendChild(img);
    }
}());

var available = [
    [1,3],
    [0,2,4],
    [1,5],
    [0,4,6],
    [1,3,5,7],
    [2,4,8],
    [3,7],
    [4,6,8],
    [5,7]
];

function indexNum(tag) {
    var id = tag.id;
    var idNum = Number(id.charAt(2));
    return idNum;
}

function slide(index) {
    var hideIndex = indexNum(q(".hide"));
    if(available[hideIndex].inArray(index)) {
        var clicked = q("#id" + index);
        var hide = q(".hide");
        hide.src = clicked.src;
        hide.classList.remove("hide");
        clicked.src = src[src.length - 1];
        clicked.classList.add("hide");
        return true;
    } else {
        return false;
    }
}

function randomImg(amount) {
    var imgs = qa(".img-con img");
    if(!q(".hide")) {
        imgs[imgs.length - 1].classList.add("hide");
    }
    var clash = 1;
    while(clash <= amount) {
        var num = Math.floor(Math.random() * imgs.length);
        if(slide(num)) {
            clash++;
        }
    }
}

function viewFinaly() {
    var imgs = qa(".img-con img");
    var lastImg = imgs[imgs.length - 1];
    lastImg.classList.remove("hide");
    q(".img-con").classList.add("clear");
    setScore(); // anwar
}

function tapToSlide(tag) {
    var index = indexNum(tag);
    slide(index);
    if(checkComplete()) {
        viewFinaly();
    }
}

function checkComplete() {
    var imgs = qa(".img-con img");
    var clash = 0;
    for(i=0; i<imgs.length; i++) {
        if(imgs[i].src.search(src[i]) == -1) {
            clash++;
        }
    }
    if(clash > 0) {
        return false;
    } else {
        return true;
    }
}

function tabOpen(open) {
    var tabs = qa(".tab");
    for(i=0; i<tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    var style = q(open).style;
    style.display = "block";
    style.animation = "fade 1s";
}

function click(selector, func) {
    var items = qa(selector);
    for(i=0; i<items.length; i++) {
        items[i].addEventListener("click", func);
    }
}

click(".play-btn", function() {
    randomImg(50);
    q(".img-con").classList.remove("clear");
    tabOpen(".field-con");
    newGame(); // set new puzzle game - anwar
});

click(".img-con img", function() {
    tapToSlide(this);
});

/********* Anwar *********/
randomImg(50);
q(".img-con").classList.remove("clear");
tabOpen(".field-con");


function changePuzzleImage(imageState) {
    // new game. set played time to TOTAL_TIME  - anwar
    newGame(); // set new puzzle game
        
    // clear the previous image 
    //q(".img-con").removeChild("img");
    for(i=0; i<src.length; i++) {
        var img = q("#id" + i);
        q(".img-con").removeChild(img);
    }
    
    if (imageState == "p" && currentPuzzleImage > 0) {
        currentPuzzleImage--;
    }
    
    if (imageState == "n") {
        if (currentPuzzleImage > (images.length - 2)) {
            currentPuzzleImage = 0;
        } else {
            currentPuzzleImage++;
        }
    }
    
    src = images[currentPuzzleImage];
    
    
    for(i=0; i<src.length; i++) {
        var img = document.createElement("img");
        img.id = "id" + i;
        img.src = src[i];
        q(".img-con").appendChild(img);
    }
    
    var available = [
        [1,3],
        [0,2,4],
        [1,5],
        [0,4,6],
        [1,3,5,7],
        [2,4,8],
        [3,7],
        [4,6,8],
        [5,7]
    ];
    
    click(".play-btn", function() {
        randomImg(50);
        q(".img-con").classList.remove("clear");
        tabOpen(".field-con");
        // new game. set played time to TOTAL_TIME  - anwar
        newGame(); // set new puzzle game
    });
    
    click(".img-con img", function() {
        tapToSlide(this);
    });
    
    /********* Anwar *********/
    randomImg(50);
    q(".img-con").classList.remove("clear");
    tabOpen(".field-con");

}
