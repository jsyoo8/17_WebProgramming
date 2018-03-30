/* Gbook start */
ripid='rip';
function upGbk(){
  var wname = document.getElementById("wname").value;
  var wtext = document.getElementById("wtext").value;
  var dgbk = document.getElementById("downGbk");
  if(wname==='' || wtext===''){
    alert("빈칸이 있습니다.");
  }else{
    dgbk.innerHTML+='<tr> <td align="center" id="downGbk" style="background-color:#cccccc; width:40%; border: 1px solid black;">작성자 : '+wname+' </td> <td id="downGbk" style="border: 1px solid black;">'+wtext+'</td> </tr> <tr id="'+ripid+'" align="right">  <td colspan="2" style="border: 1px solid black;"><button onclick="ripple(\''+ripid+'\')">답글 등록하기</button></td>  </tr>';
    document.getElementById("wname").value='';
    document.getElementById("wtext").value='';
    ripid=ripid+ripid;
  }
}
function ripple(n){
  var rrip = document.getElementById(n);
  var uans = '답변 : ' + prompt("답글 내용을 입력하세요.",'');
  if(uans==='답변 : '){
    alert("빈칸이 있습니다.");
  }else{
    rrip.innerHTML='  <td colspan="2" style="border: 1px solid black;"> <span style="margin-left: 20%;">'+uans+'</span> </td>  ';
    rrip.style.backgroundColor="gray";
    rrip.align= "left";
  }
}
/* Gbook end */
