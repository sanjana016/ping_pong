const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const resetB=document.querySelector('#reset');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');
let winSelect=document.querySelector('#playto');
let p1score=0;
let p2score=0;
let win=3;
let isGameover=false;

winSelect.addEventListener('change', function(){
    win=parseInt(this.value);
    reset();
});

p1button.addEventListener('click',function(){
    if(!isGameover){
        p1score +=1;
    }
    if(p1score === win){
       isGameover=true;
       p1display.classList.add('winner');
       p2display.classList.add('loser');
    }
    p1display.textContent=p1score;
});

p2button.addEventListener('click',function(){
    if(!isGameover){
        p2score +=1;
    }
    if(p2score === win){
       isGameover=true;
       p1display.classList.add('winner');
       p2display.classList.add('loser');
    }
    p2display.textContent=p2score;
});

resetB.addEventListener('click',reset)

function reset()
{
    isGameover=0;
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('winner');
    p2display.classList.remove('loser');
}