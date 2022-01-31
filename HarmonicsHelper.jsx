let interval= ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const intervalFlat= ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const intervalSharp= ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const intervalFlatKor= ["도","레b","레","미b","미","파","솔b","솔","라b","라","시b","시"];
const intervalSharpKor= ["도","도#","레","레#","미","파","파#","솔","솔#","라","라#","시"];
let intervalNum=[0,1,2,3,4,5,6,7,8,9,10,11];
const numSharp=["I","I#","II","II#","III","IV","IV#","V","V#","VI","VI#","VII"];
const numFlat=["I","IIb","II","IIIb","III","IV","Vb","V","VIb","VI","VIIb","VII"];
let subtituteCount=0;
let standardNum;  
let sharpCount=0;  

function sharpChange(){
  sharpCount++;
  if(sharpCount%4==1){
    document.getElementById("sharpOrFlat").innerHTML="# sharp";
    for(let i=0;i<12;i++){
        interval[i]=intervalSharp[i];
    }
  }
  else if(sharpCount%4==2){
    document.getElementById("sharpOrFlat").innerHTML="b 한글";
    for(let i=0;i<12;i++){
        interval[i]=intervalFlatKor[i];
    }
  }
  else if(sharpCount%4==3){
    document.getElementById("sharpOrFlat").innerHTML="# 한글";
    for(let i=0;i<12;i++){
        interval[i]=intervalSharpKor[i];
    }
  }
  else if(sharpCount%4==0){
    document.getElementById("sharpOrFlat").innerHTML="b flat";
    for(let i=0;i<12;i++){
        interval[i]=intervalFlat[i];
    }
  }
}
//intervalNum 범위 고정 method
function twelveUpdown(num){
  if(num<12){ return num; }
  else if(num>=12){ return (num-12);}
}

function intervalSelect(value){
    parseInt(value);
    if(sharpCount%4==1){
        for(let i=0;i<12;i++){
            if(intervalSharp[value]===intervalSharp[i]){
                majorScale(intervalNum[i]);
                secondaryDominant7th(intervalNum[i]);
                subDominantminor(intervalNum[i]);
                standardNum=intervalNum[i];
              }
            }
      }
      else if(sharpCount%4==2){
        for(let i=0;i<12;i++){
            if(intervalSharpKor[value]===intervalSharpKor[i]){
                majorScale(intervalNum[i]);
                secondaryDominant7th(intervalNum[i]);
                subDominantminor(intervalNum[i]);
                standardNum=intervalNum[i];
              }
              
            }
      }
      else if(sharpCount%4==3){
        for(let i=0;i<12;i++){
            if(intervalFlatKor[value]===intervalFlatKor[i]){
                majorScale(intervalNum[i]);
                secondaryDominant7th(intervalNum[i]);
                subDominantminor(intervalNum[i]);
                standardNum=intervalNum[i];
              }
            }
      }
      else if(sharpCount%4==0){
        for(let i=0;i<12;i++){
            if(interval[value]===interval[i]){
                majorScale(intervalNum[i]);
                secondaryDominant7th(intervalNum[i]);
                subDominantminor(intervalNum[i]);
                standardNum=intervalNum[i];
              }
            }
      }

  subtituteCount=0;
  document.getElementById("V7").innerHTML="V7";
  document.getElementById("VI7").innerHTML="VI7";
  document.getElementById("VII7").innerHTML="VII7";
  document.getElementById("I7").innerHTML="I7";
  document.getElementById("II7").innerHTML="II7";
  document.getElementById("III7").innerHTML="III7";
}
//숫자를 인터벌로 변환시켜 스케일과 다이어토닉 출력하는 method
function majorScale(i){
  document.getElementById("ID1").innerHTML=interval[twelveUpdown(i)];
  document.getElementById("ID2").innerHTML=interval[twelveUpdown(i+2)];
  document.getElementById("ID3").innerHTML=interval[twelveUpdown(i+4)];
  document.getElementById("ID4").innerHTML=interval[twelveUpdown(i+5)];
  document.getElementById("ID5").innerHTML=interval[twelveUpdown(i+7)];
  document.getElementById("ID6").innerHTML=interval[twelveUpdown(i+9)];
  document.getElementById("ID7").innerHTML=interval[twelveUpdown(i+11)];
}
//세컨더리 도미넌트 출력
function secondaryDominant7th(i){
  document.getElementById("SD1").innerHTML=interval[twelveUpdown(i+7)]+"7";
  document.getElementById("SD2").innerHTML=interval[twelveUpdown(i+9)]+"7";
  document.getElementById("SD3").innerHTML=interval[twelveUpdown(i+11)]+"7";
  document.getElementById("SD4").innerHTML=interval[twelveUpdown(i)]+"7";
  document.getElementById("SD5").innerHTML=interval[twelveUpdown(i+2)]+"7";
  document.getElementById("SD6").innerHTML=interval[twelveUpdown(i+4)]+"7";
  document.getElementById("SDA4").innerHTML=interval[twelveUpdown(i)]+"M7";
  document.getElementById("SDA5").innerHTML=interval[twelveUpdown(i+2)]+"m7";
  document.getElementById("SDA6").innerHTML=interval[twelveUpdown(i+4)]+"m7";
  document.getElementById("SDA1").innerHTML=interval[twelveUpdown(i+5)]+"M7";
  document.getElementById("SDA2").innerHTML=interval[twelveUpdown(i+7)]+"7";
  document.getElementById("SDA3").innerHTML=interval[twelveUpdown(i+9)]+"m7";
  document.getElementById("I251").innerHTML=interval[twelveUpdown(i+2)]+"m7";
  document.getElementById("III251").innerHTML=interval[twelveUpdown(i+4)]+"m7";
  document.getElementById("IV#251").innerHTML=interval[twelveUpdown(i+6)]+"m7";
  document.getElementById("V251").innerHTML=interval[twelveUpdown(i+7)]+"m7";
  document.getElementById("VI251").innerHTML=interval[twelveUpdown(i+9)]+"m7";
  document.getElementById("VII251").innerHTML=interval[twelveUpdown(i+11)]+"m7";
  

}
function secondaryDominant7thSubtitute(i){
  document.getElementById("SD1").innerHTML=interval[twelveUpdown(i+1)]+"7";
  document.getElementById("SD2").innerHTML=interval[twelveUpdown(i+3)]+"7";
  document.getElementById("SD3").innerHTML=interval[twelveUpdown(i+5)]+"7";
  document.getElementById("SD4").innerHTML=interval[twelveUpdown(i+6)]+"7";
  document.getElementById("SD5").innerHTML=interval[twelveUpdown(i+8)]+"7";
  document.getElementById("SD6").innerHTML=interval[twelveUpdown(i+10)]+"7";
 
}
//클릭 반응


function sdClick(){
  subtituteCount++;
  if(subtituteCount%2==1){
    secondaryDominant7thSubtitute(intervalNum[standardNum]);
    document.getElementById("V7").innerHTML="IIb7";
    document.getElementById("VI7").innerHTML="IIIb7";
    document.getElementById("VII7").innerHTML="IV7";
    document.getElementById("I7").innerHTML="Vb7";
    document.getElementById("II7").innerHTML="VIb7";
    document.getElementById("III7").innerHTML="VIIb7";
    }
  else{
    secondaryDominant7th(standardNum);
    document.getElementById("V7").innerHTML="V7";
    document.getElementById("VI7").innerHTML="VI7";
    document.getElementById("VII7").innerHTML="VII7";
    document.getElementById("I7").innerHTML="I7";
    document.getElementById("II7").innerHTML="II7";
    document.getElementById("III7").innerHTML="IIIb7";
  }
  }
function subDominantminor(i){
  document.getElementById("SDm1").innerHTML=interval[twelveUpdown(i+5)];
  document.getElementById("SDm2").innerHTML=interval[twelveUpdown(i+5)];
  document.getElementById("SDm3").innerHTML=interval[twelveUpdown(i+5)];
  document.getElementById("SDm4").innerHTML=interval[twelveUpdown(i+2)];
  document.getElementById("SDm5").innerHTML=interval[twelveUpdown(i+1)];
  document.getElementById("SDm6").innerHTML=interval[twelveUpdown(i+8)];
  document.getElementById("SDm7").innerHTML=interval[twelveUpdown(i+8)];
  document.getElementById("SDm8").innerHTML=interval[twelveUpdown(i+10)];
}