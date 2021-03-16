var submit=document.getElementById("resultButton");
var team1=document.getElementById("players1");
var team2=document.getElementById("players2");
var point1=document.getElementById("point1");
var point2=document.getElementById("point2");
var scoretwo=document.getElementById("scoreTwo");
var scoreone=document.getElementById("scoreOne");
var winone=document.getElementById("WinOne");
var wintwo=document.getElementById("WinTwo");





function print()
{
    var s1=[],s2=[],k2=0,k1=0,ss1,ss2,t1="",t2="";
    ss1=team1.value;
    ss2=team2.value;
    ss1=ss1+",";
    ss2=ss2+",";
    for(i=0;i<ss1.length;i++)
    {
        if(ss1[i]!=",") {t1=t1+ss1[i];}
        else {s1[k1]=t1; k1++; t1="";}
    }
    for(i=0;i<ss2.length;i++)
    {
        if(ss2[i]!=",") {t2=t2+ss2[i];}
        else {s2[k2]=t2; k2++; t2="";}
    }
    if(  (k1==11 && k2==11) && (point1.value!=0 || point1.value<=11) && (point2.value!=0 || point2.value<=7) )
    {  
          console.log("Team1:"); 
          s1.forEach(myFunction1);
          console.log("Team2:");
          s2.forEach(myFunction2);
          function myFunction1(entry)
          {
           console.log(entry);
          }
          function myFunction2(entry)
          {
           console.log(entry); 
          }
      var n2,n1;
      n1=Number(point1.value);
      n2=Number(point2.value);
      if(n1==0 && n2==0) {scoreone.innerText="0";scoretwo.innerText="0"; }
      else if(n1==0 && n2==7) 
      { 
          switch(n2) 
          {
              case 1:scoretwo.innerText="(1)";
              break;
              case 2:scoretwo.innerText="(2) (1 1)";
              break;
              case 3:scoretwo.innerText="(3) (2 1) (1 1 1)";
              break;
              case 4:scoretwo.innerText="(4) (3 1) (2 2) (2 1 1) (1 1 1 1)";
              break;
              case 5:scoretwo.innerText="(5) (4 1) (3 2) (3 1 1) (2 2 1) (2 1 1 1) (1 1 1 1 1)";
              break;
              case 6:scoretwo.innerText="(6) (5 1) (4 2) (4 1 1) (3 3) (3 2 1) (3 1 1 1) (2 2 2) (2 2 1 1) (2 1 1 1 1) (1 1 1 1 1 1)";
              break;
              case 7:scoretwo.innerText="(7) (6 1) (5 2) (5 1 1) (4 3) (4 2 1) (4 1 1 1) (3 3 1) (3 2 2) (3 2 1 1) (3 1 1 1 1) (2 2 2 1) (2 2 1 1 1) (2 1 1 1 1 1) (1 1 1 1 1 1 1)";
              break;
              default:alert("Something wrong");
              break;
          }
          switch(n1) 
          {
              case 0:scoreone.innerText=("0");
              break;
              default:alert("Something wrong");
          }     
     }
      else if(n1==7 && n2==0) 
      {
        switch(n1) 
        {
            case 1:scoreone.innerText="(1)";
            break;
            case 2:scoreone.innerText="(2) (1 1)";
            break;
            case 3:scoreone.innerText="(3) (2 1) (1 1 1)";
            break;
            case 4:scoreone.innerText="(4) (3 1) (2 2) (2 1 1) (1 1 1 1)";
            break;
            case 5:scoreone.innerText="(5) (4 1) (3 2) (3 1 1) (2 2 1) (2 1 1 1) (1 1 1 1 1)";
            break;
            case 6:scoreone.innerText="(6) (5 1) (4 2) (4 1 1) (3 3) (3 2 1) (3 1 1 1) (2 2 2) (2 2 1 1) (2 1 1 1 1) (1 1 1 1 1 1)";
            break;
            case 7:scoreone.innerText="(7) (6 1) (5 2) (5 1 1) (4 3) (4 2 1) (4 1 1 1) (3 3 1) (3 2 2) (3 2 1 1) (3 1 1 1 1) (2 2 2 1) (2 2 1 1 1) (2 1 1 1 1 1) (1 1 1 1 1 1 1)";
            break;
            default:alert("Something wrong");
            break;
        }
       switch(n2) 
       {
           case 0:scoretwo.innerText=("0");
           break;
           default:alert("Something wrong");
       }   
     }
      else if(n1+n2<=7) 
      { 
        
        switch(n1) 
        {
            
            case 1:scoreone.innerText="(1)";
            break;
            case 2:scoreone.innerText="(2) (1 1)";
            break;
            case 3:scoreone.innerText="(3) (2 1) (1 1 1)";
            break;
            case 4:scoreone.innerText="(4) (3 1) (2 2) (2 1 1) (1 1 1 1)";
            break;
            case 5:scoreone.innerText="(5) (4 1) (3 2) (3 1 1) (2 2 1) (2 1 1 1) (1 1 1 1 1)";
            break;
            case 6:scoreone.innerText="(6) (5 1) (4 2) (4 1 1) (3 3) (3 2 1) (3 1 1 1) (2 2 2) (2 2 1 1) (2 1 1 1 1) (1 1 1 1 1 1)";
            break;
            case 7:scoreone.innerText="(7) (6 1) (5 2) (5 1 1) (4 3) (4 2 1) (4 1 1 1) (3 3 1) (3 2 2) (3 2 1 1) (3 1 1 1 1) (2 2 2 1) (2 2 1 1 1) (2 1 1 1 1 1) (1 1 1 1 1 1 1)";
            break;
            default:alert("Something wrong");
            break;
        }
        switch(n2) 
          {
              case 1:scoretwo.innerText="(1)";
              break;
              case 2:scoretwo.innerText="(2) (1 1)";
              break;
              case 3:scoretwo.innerText="(3) (2 1) (1 1 1)";
              break;
              case 4:scoretwo.innerText="(4) (3 1) (2 2) (2 1 1) (1 1 1 1)";
              break;
              case 5:scoretwo.innerText="(5) (4 1) (3 2) (3 1 1) (2 2 1) (2 1 1 1) (1 1 1 1 1)";
              break;
              case 6:scoretwo.innerText="(6) (5 1) (4 2) (4 1 1) (3 3) (3 2 1) (3 1 1 1) (2 2 2) (2 2 1 1) (2 1 1 1 1) (1 1 1 1 1 1)";
              break;
              case 7:scoretwo.innerText="(7) (6 1) (5 2) (5 1 1) (4 3) (4 2 1) (4 1 1 1) (3 3 1) (3 2 2) (3 2 1 1) (3 1 1 1 1) (2 2 2 1) (2 2 1 1 1) (2 1 1 1 1 1) (1 1 1 1 1 1 1)";
              break;
              default:alert("Something wrong");
              break;
          }
        }
        else {alert("n1+n2 must be less 7 or equal to 7");}
    
      if(n1>n2) {winone.innerText="The team 1 is winner";wintwo.innerText="The team 2 is looser";}
      else if(n1==n2) {winone.innerText="Draw"; wintwo.innerText="Draw";}
      else {wintwo.innerText="The team 2 is winner";winone.innerText="The team 1 is looser";}
    }
    else {alert("You need to input 11 players or you need to input number of score from 0 till 7");}
    
}


submit.addEventListener('click',print);



