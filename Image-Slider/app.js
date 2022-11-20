var slide = ["images/germanpic1.jpg","images/germanpic2.jpg","images/germanpic3.jpg"
,"images/germanpic4.jpg","images/germanpic5.jpg"];
var i = 0;
var time = 2000;

function changeImage() {
    document.image.src = slide[i];
    if (i < slide.length - 1) {
       i ++; 
    }
    else {
        i = 0;
    }
    setTimeout("changeImage()",time);
}
window.onload = changeImage;