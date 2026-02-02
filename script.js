let currentCard = 0;

// Simple floating hearts in background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 50,
    size: Math.random()*20+10,
    speed: Math.random()*2 +1,
    opacity: Math.random()*0.5 +0.5
  });
}
function drawHearts() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<hearts.length;i++){
    let h=hearts[i];
    ctx.fillStyle = `rgba(255,77,109,${h.opacity})`;
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.arc(h.x, h.y, h.size,0,Math.PI*2);
    ctx.fill();
    h.y -= h.speed;
    if(h.y < -50) hearts.splice(i,1);
  }
  requestAnimationFrame(drawHearts);
}
setInterval(createHeart, 300);
drawHearts();

// Quiz navigation
function nextCard(){
  document.getElementById(`card${currentCard}`).classList.remove('active');
  currentCard++;
  document.getElementById(`card${currentCard}`).classList.add('active');
}

// FUN NO button
function moveNo(){
  const noBtn = document.querySelector('.no');
  const x=Math.random()*200-100;
  const y=Math.random()*200-100;
  noBtn.style.transform=`translate(${x}px,${y}px)`;
}

// Gift popup
function showGift(id){
  const gift=document.getElementById(id);
  gift.style.display='block';
  setTimeout(()=>gift.style.display='none',2000);
}

// YES button with heart explosion
function yesAnswer(){
  document.getElementById('card7').classList.remove('active');
  document.getElementById('card8').classList.add('active');
  heartExplosion();
}

function heartExplosion(){
  const container = document.getElementById('heart-explosion');
  for(let i=0;i<40;i++){
    const h=document.createElement('div');
    h.classList.add('gift');
    h.innerText='💖';
    h.style.position='absolute';
    h.style.left=Math.random()*200-100+'px';
    h.style.top=Math.random()*200-100+'px';
    h.style.fontSize=Math.random()*30+15+'px';
    container.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
}

// Responsive canvas
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
