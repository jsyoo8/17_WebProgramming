/* AllMenu start */
cngnum=1;
function posMove(cname){
  var pos = document.getElementsByClassName(cname)[0].offsetTop;
  window.scroll(0, pos);
}
function showMenu(){
  if (cngnum%2==1){
    document.getElementsByTagName("button")[5].className="AllMenu_CLK";
  }
  else{
    document.getElementsByTagName("button")[5].className="AllMenu";
  }
  cngimg();
}
function cngimg(){
  var origsrc = document.getElementById("change");
  if (cngnum%2==1){
    origsrc.src='./img/menu_button/up.PNG';
    cngnum++;
  }
  else{
    origsrc.src='./img/menu_button/down.PNG';
    cngnum--;
  }
}
/* AllMenu end */
