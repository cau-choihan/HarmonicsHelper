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
  interval[twelveUpdown(i)]+"메이저스케일<br>"+
  interval[twelveUpdown(i)]+"&nbsp "+          interval[twelveUpdown(i+2)]+"&nbsp "+
  interval[twelveUpdown(i+4)]+"&nbsp "+
  interval[twelveUpdown(i+5)]+"&nbsp "+
  interval[twelveUpdown(i+7)]+"&nbsp "+
  interval[twelveUpdown(i+9)]+"&nbsp "+
  interval[twelveUpdown(i+11)]+"<br><br>"+
  interval[twelveUpdown(i)]+"메이저다이어토닉코드<br>"+
  "IM7 : &nbsp&nbsp&nbsp"+
  interval[twelveUpdown(i)]+"M7"+
  "<br>IIm7 : &nbsp&nbsp"+
  interval[twelveUpdown(i+2)]+"m7"+
  "<br>IIIm7 :&nbsp "+
  interval[twelveUpdown(i+4)]+"m7"+
  "<br>IVm7 : &nbsp"+
  interval[twelveUpdown(i+5)]+"M7"+
  "<br>V7 :&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+
  interval[twelveUpdown(i+7)]+"7"+
  "<br>VIm7 : &nbsp"+
  interval[twelveUpdown(i+9)]+"m7"+
  "<br>VIIm7 : "+
  interval[twelveUpdown(i+11)]+"m7-5";
  secondaryDominant7th(i);
}
//세컨더리 도미넌트 출력
function secondaryDominant7th(i){
document.getElementById("secondaryDominant7th").innerHTML=
  "( VI7 -> IIm7 ) "+interval[twelveUpdown(i+9)]+"7 -> "+interval[twelveUpdown(i+2)]+"m7<br>"+
  "( VII7 -> IIIm7 ) "+interval[twelveUpdown(i+11)]+"7 -> "+interval[twelveUpdown(i+4)]+"m7<br>"+
  "( I7 -> IV7 ) "+interval[twelveUpdown(i)]+"7 ->"+interval[twelveUpdown(i+5)]+"M7<br>"+
  "( II7 -> V7 ) "+
  interval[twelveUpdown(i+2)]+"7 -> "+            interval[twelveUpdown(i+7)]+"7<br>"+
  "( III7 -> VIm7 ) "+
  interval[twelveUpdown(i+4)]+"7 -> "+
  interval[twelveUpdown(i+9)]+"m7";
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
