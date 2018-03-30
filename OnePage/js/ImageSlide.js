/* ImageSlide start */
var sIndex = 0;
var flag = true;
var slen=5;
var timer;
function nextSlide(n) {
  sIndex += n;
	sshow(false);
}
function dotSlide(n) {
  sIndex = n;
	sshow(false);
}
function sshow(flag) {
	var i;
  var slide = document.getElementById("slide").getElementsByTagName("img");
  var dot = document.getElementsByClassName("dot");
	for (i = 0; i < slen; i++) {
		slide[i].className = "pslide";
    dot[i].style.backgroundColor = "#bbb";
	}
  if (sIndex>= slen) {
    sIndex = 0;
  }
	if (sIndex< 0) {
    sIndex = slen-1;
  }
  dot[sIndex].style.backgroundColor = "black";
	slide[sIndex++].className = "pslide_c";
  timer = setTimeout(sshow, 5000);
	if(flag == false) {
    clearTimeout(timer);
	}
}
/* ImageSlide end */
