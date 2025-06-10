let gameSeq = [];
let userSeq = [];

let btns=["green","pink","blue","orange"];

let level = 0,cnt=0,highest = 0;
let started = false;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
  if(started == false){
    console.log("game is started");
    started = true;
  }
  levelup();
});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },500);
}

function levelup(){
  level++; cnt=0; userSeq=[];
  h2.textContent = `Level : ${level}`;

  if(level > highest){
    highest = level;
    h3.innerText = `Highest Score : ${highest}`;
  }

  //random number choose:
  let num=Math.floor(Math.random()*4);
  let color = btns[num];
  let randombtn = document.querySelector(`.${color}`);

  gameSeq.push(color);
  console.log(gameSeq);
  btnFlash(randombtn);
}

function check(){
  if(cnt == level-1 & userSeq[cnt] == gameSeq[cnt]){
    setTimeout(levelup,1000);
  }
  else if(cnt<level & userSeq[cnt] == gameSeq[cnt]) cnt++;
  else{
    h2.innerHTML = `Game is over! Your score is <b>${level}</b> <br> Press any key to start`;
    
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },500);
    
    cnt=0; userSeq=[]; gameSeq=[]; level=0; started=false;
  }
}

function press(){
    let btn=this;
    btnFlash(btn);
    
    let color=btn.getAttribute("id");
    userSeq.push(color);
    
    check();
}

let allbtns=document.querySelectorAll(".btn");
for(allbtn of allbtns){
  allbtn.addEventListener("click",press);
}
