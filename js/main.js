var list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var a = [];
var pos = [];
var v = [];

document.addEventListener('DOMContentLoaded',function(){
    for(var i = 0; i<60; i++){
        var big = document.getElementById('background-animation');
        var newDiv = document.createElement('div');
        newDiv.innerHTML = list[parseInt(Math.random()*25)];
        newDiv.style.marginLeft = Math.random()*100+'%';
        newDiv.style.display = 'inline';
        newDiv.style.position = 'fixed';
        newDiv.style.marginTop = '-20%';
        newDiv.style.fontSize = Math.random()*80+80+'px'
        pos.push(-20-Math.random()*30);
        v.push(Math.random()*0.05+0.01);
        newDiv.className = 'letter';
        big.appendChild(newDiv)
    }

    function timer(){
        setInterval(function(){
            for(var i = 0; i<200; i++){
                var letters = document.getElementsByClassName('letter')[i];
                pos[i] = pos[i]+=v[i];
                letters.style.marginTop = pos[i]+'%';
                if(pos[i]>100){
                    letters.innerHTML = list[parseInt(Math.random()*25)];
                    letters.style.fontSize = Math.random()*80+80+'px'
                    pos[i] = -10;
                    letters.style.marginLeft = Math.random()*100+'%';
                }
            }
        },1);
    }

    timer();
});
/**
 * Created by Lucien on 9/6/2016.
 */

/**
 * Created by Lucien on 8/28/2016.
 */
