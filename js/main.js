document.addEventListener('DOMContentLoaded',function(){
    var posX = [];
    var posY = [];
    var spdX = [];
    var spdY = [];
    var rotY = [];
    var size = [];
    for(var i = 0; i<7;i++){
        posX.push(Math.random()*0.6);
        posY.push(Math.random()*0.44);
        spdX.push(Math.random()*0.05);
        spdY.push(Math.random()*0.05);
        size.push(Math.random()*80+80);
        document.getElementsByClassName('letter')[i].style.marginLeft = posX[i]*100+'%';
        document.getElementsByClassName('letter')[i].style.marginTop = posY[i]*100+'%';
        rotY.push(15+Math.random()*15);
        document.getElementsByClassName('letter')[i].style.transform = 'rotateY('+rotY[i]+'deg)';
        document.getElementsByClassName('letter')[i].style.WebkitTransform = 'rotateY('+rotY[i]+'deg)';
        document.getElementsByClassName('letter')[i].style.fontSize = size[i]+'px';
    }

    function timer(ms, i){
        setInterval(function(){
                spdX[i]=(0.05-Math.random()*0.1);
                spdY[i]=(0.05-Math.random()*0.1);
                console.log(document.getElementsByClassName('letter')[i].style.transform);
                document.getElementsByClassName('letter')[i].style.marginLeft = (posX[i]+spdX[i])*100+'%';
                document.getElementsByClassName('letter')[i].style.marginTop = (posY[i]+spdY[i])*100+'%';
                rotY[i]=-rotY[i];
                document.getElementsByClassName('letter')[i].style.transform = 'rotateY('+rotY[i]+'deg)';
                document.getElementsByClassName('letter')[i].style.WebkitTransform = 'rotateY('+rotY[i]+'deg)';
        },ms)
    }

    for(var i = 0; i <7; i++){
        timer(Math.random()*2000+3000, i);
    }
})
/**
 * Created by Lucien on 8/28/2016.
 */
