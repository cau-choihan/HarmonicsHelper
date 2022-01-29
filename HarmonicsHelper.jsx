let interval= ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
let intervalNum=[0,1,2,3,4,5,6,7,8,9,10,11];

//intervalNum 범위 고정 method
function twelveUpdown(num){
  if(num<12){ return num; }
  else if(num>=12){ return (num-12);}
}
//숫자를 인터벌로 변환시켜 스케일과 다이어토닉 출력하는 method
function majorScale(i){
document.getElementById("majorInterval").innerHTML=
  "<table id=\"Atable\">"+"<tr>"+"<td align=\"center\" colspan=\"7\">"+
  interval[twelveUpdown(i)]+"메이저스케일"+"</td></tr><br>"+
  "<tr><td>I</td><td>II</td><td>III</td><td>IV</td><td>V</td><td>VI</td><td>VII</td></tr>"
  +"<tr><td>"+
  interval[twelveUpdown(i)]+"&nbsp "+"</td><td>"+          
  interval[twelveUpdown(i+2)]+"&nbsp "+"</td><td>"+
  interval[twelveUpdown(i+4)]+"&nbsp "+"</td><td>"+
  interval[twelveUpdown(i+5)]+"&nbsp "+"</td><td>"+
  interval[twelveUpdown(i+7)]+"&nbsp "+"</td><td>"+
  interval[twelveUpdown(i+9)]+"&nbsp "+"</td><td>"+
  interval[twelveUpdown(i+11)]+"</td></tr></table><br><br>"+
  "<table id=\"Atable\"><tr><td align=\"center\" colspan=\"7\">"+
  interval[twelveUpdown(i)]+"메이저다이어토닉코드</td></tr><br>"+
  "<tr><td>IM7</td><td>IIm7</td><td>IIIm7</td><td>IVM7</td><td>V7</td><td>VIm7</td><td>VIIm7-5</td></tr>"
  +"<tr><td>"+interval[twelveUpdown(i)]+"M7</td><td>"+
  interval[twelveUpdown(i+2)]+"m7</td><td>"+
  interval[twelveUpdown(i+4)]+"m7</td><td>"+
  interval[twelveUpdown(i+5)]+"M7</td><td>"+
  interval[twelveUpdown(i+7)]+"7</td><td>"+
  interval[twelveUpdown(i+9)]+"m7</td><td>"+
  interval[twelveUpdown(i+11)]+"m7-5</td></tr></table>";
  secondaryDominant7th(i);
}
//세컨더리 도미넌트 출력
function secondaryDominant7th(i){
document.getElementById("secondaryDominant7th").innerHTML=
"<table id=\"Btable\"><tr><td align=\"center\" colspan=\"11\">"+
"세컨더리 도미넌트&Related 2-5-1</td></tr>"+
"<tr><td>IIIm7</td><td>--</td><td>VI7</td><td>-></td><td>IIm7</td><td>:</td><td>"+interval[twelveUpdown(i+4)]+"m7</td><td>--</td><td>"+interval[twelveUpdown(i+9)]+"7</td><td>-></td><td>"+interval[twelveUpdown(i+2)]+"m7</td></tr><br>"+
  "<tr><td>IV#m7</td><td>--</td><td>VII7</td><td>-></td><td>IIIm7</td><td>:</td><td>"+interval[twelveUpdown(i+6)]+"m7</td><td>--</td><td>"+interval[twelveUpdown(i+11)]+"7</td><td>-></td><td>"+interval[twelveUpdown(i+4)]+"m7</td></tr><br>"+
  "<tr><td>Vm7</td><td>--</td><td>I7</td><td>-></td><td>IV7</td><td>:</td><td>"+interval[twelveUpdown(i+7)]+"m7</td><td>--</td><td>"+interval[twelveUpdown(i)]+"7</td><td>-></td><td>"+interval[twelveUpdown(i+5)]+"M7</td></tr><br>"+
  "<tr><td>VI7</td><td>--</td><td>II7</td><td>-></td><td>V7</td><td>:</td><td>"+interval[twelveUpdown(i+9)]+"m7</td><td>--</td><td>"+interval[twelveUpdown(i+2)]+"7</td><td>-></td><td>"+interval[twelveUpdown(i+7)]+"7</td></tr><br>"+
  "<tr><td>VIIm7</td><td>--</td><td>III7</td><td>-></td><td>VIm7</td><td>:</td><td>"+interval[twelveUpdown(i+11)]+"m7</td><td>--</td><td>"+interval[twelveUpdown(i+4)]+"7</td><td>-></td><td>"+interval[twelveUpdown(i+9)]+"m7</td></tr>"+
  "</table>";
}
//클릭 반응
function Cclick(){majorScale(intervalNum[0]);}
function Dbclick(){majorScale(intervalNum[1]);}
function Dclick(){majorScale(intervalNum[2]);}
function Ebclick(){majorScale(intervalNum[3]);}
function Eclick(){majorScale(intervalNum[4]);}
function Fclick(){majorScale(intervalNum[5]);}
function Gbclick(){majorScale(intervalNum[6]);}
function Gclick(){majorScale(intervalNum[7]);}
function Abclick(){majorScale(intervalNum[8]);}
function Aclick(){majorScale(intervalNum[(9)]);}
function Bbclick(){majorScale(intervalNum[10]);}
function Bclick(){majorScale(intervalNum[11]);}
