/* Gallery start */
var gIndex = 0;
var glen = 4;
function initGal(){
  for (var i=1; i<=glen; i++){
    chkStrg(i);
  }
}
function chkStrg(num){
  var n = String(num);
  if(sessionStorage.getItem("c"+n)) {
    var element = document.getElementById('im'+n);
    element.parentNode.removeChild(element);
    var element = document.getElementById('sm'+n);
    element.parentNode.removeChild(element);
  }
}
function openMdl() {
  document.getElementById('mdl').style.display = "block";
}
function closeMdl() {
  document.getElementById('mdl').style.display = "none";
}
function chkCS() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function gClose(num) {
  var flag = true;
  var n = String(num);
  var element = document.getElementById('im'+n);
  element.parentNode.removeChild(element);
  var element = document.getElementById('sm'+n);
  element.parentNode.removeChild(element);
  sessionStorage.setItem("c"+n,flag);
}

function nextGal(n) {
  gIndex += n;
	gshow();
}
function clkGal(n) {
  gIndex = n;
	gshow();
}

function gshow() {
	var i;
  var slide = document.getElementsByClassName("mdlimg");
  if (gIndex>= slide.length) {
    gIndex = 0;
  }
	if (gIndex< 0) {
    gIndex = slide.length-1;
  }
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
  slide[gIndex].style.display = "block";
}
/* Gallery end */
