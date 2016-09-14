var list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var a = [];
var pos = [];
var v = [];

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#title"})
    .setClassToggle("#nav-1","active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about"})
    .setClassToggle("#nav-2","active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#work"})
    .setClassToggle("#nav-3","active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#blog"})
    .setClassToggle("#nav-4","active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact"})
    .setClassToggle("#nav-5","active")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#about", duration: 600})
    .setClassToggle("#line-about", "line-2")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#work", duration: 600})
    .setClassToggle("#line-work", "line-2")
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#blog", duration: 600})
    .setClassToggle("#line-blog", "line-2")
    .addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#contact", duration: 600})
    .setClassToggle("#line-contact", "line-2")
    .addTo(controller);

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded',function(){
    for(var i = 0; i<30; i++){
        var big = document.getElementById('background-animation');
        var newDiv = document.createElement('div');
        newDiv.innerHTML = list[parseInt(Math.random()*25)];
        newDiv.style.marginLeft = Math.random()*100+'%';
        newDiv.style.display = 'inline';
        newDiv.style.position = 'fixed';
        newDiv.style.marginTop = '-20%';
        newDiv.style.fontSize = Math.random()*80+140+'px'
        pos.push(-20-Math.random()*30);
        v.push(Math.random()*0.05+0.01);
        newDiv.className = 'letter';
        big.appendChild(newDiv)
    }

    function timer(){
        setInterval(function(){
            for(var i = 0; i<30; i++){
                var letters = document.getElementsByClassName('letter')[i];
                pos[i] = pos[i]+=v[i];
                letters.style.marginTop = pos[i]+'%';
                if(pos[i]>100){
                    letters.innerHTML = list[parseInt(Math.random()*25)];
                    letters.style.fontSize = Math.random()*80+140+'px'
                    pos[i] = -20;
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
