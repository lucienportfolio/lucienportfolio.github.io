var list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var a = [];
var pos = [];
var v = [];

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#title"})
    .setClassToggle("#nav-1","active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#work"})
    .setClassToggle("#nav-2","active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#blog"})
    .setClassToggle("#nav-3","active")
    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about"})
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

var mouseOn = [0,0,0,0,0,0,0];

function loadWorks(){
    $('#work-1')[0].style.background = "url(./images/works-1.jpg)"
    $('#work-1')[0].style.backgroundSize = "100%";
    $('#work-1')[0].style.backgroundRepeat = "no-repeat";
    $('#work-1')[0].style.backgroundPosition = "center";
    console.log( $('#work-1-title'));
    $('#work-1').hover(function(){
        $(this)[0].style.backgroundSize="200%";
        $(this)[0].style.filter = "brightness(0.3) grayscale(0.5)"
        $('#work-1-title')[0].style.opacity = "1";
        mouseOn[0] = 1;
    },function(){
        $(this)[0].style.backgroundSize="100%";
        $(this)[0].style.filter = "brightness(1) grayscale(0)"
        $('#work-1-title')[0].style.opacity = "0";
        mouseOn[0] = 0;
    } );

    $('#work-2')[0].style.background = "url(./images/works-2.jpg)";
    $('#work-2')[0].style.backgroundSize = "100%";
    $('#work-2')[0].style.backgroundRepeat = "no-repeat";
    $('#work-2')[0].style.backgroundPosition = "center";
    console.log( $('#work-1-title'));
    $('#work-2').hover(function(){
        $(this)[0].style.backgroundSize="200%";
        $(this)[0].style.filter = "brightness(0.3) grayscale(0.5)"
        $('#work-2-title')[0].style.opacity = "1";
        mouseOn[1] = 1;
    },function(){
        $(this)[0].style.backgroundSize="100%";
        $(this)[0].style.filter = "brightness(1) grayscale(0)"
        $('#work-2-title')[0].style.opacity = "0";
        mouseOn[1] =0;
    } );

    $('#work-3')[0].style.background = "url(./images/works-3.jpg)";
    $('#work-3')[0].style.backgroundSize = "100%";
    $('#work-3')[0].style.backgroundRepeat = "no-repeat";
    $('#work-3')[0].style.backgroundPosition = "center";
    console.log( $('#work-3-title'));
    $('#work-3').hover(function(){
        $(this)[0].style.backgroundSize="200%";
        $(this)[0].style.filter = "brightness(0.3) grayscale(0.5)"
        $('#work-3-title')[0].style.opacity = "1";
        mouseOn[2] = 1;
    },function(){
        $(this)[0].style.backgroundSize="100%";
        $(this)[0].style.filter = "brightness(1) grayscale(0)"
        $('#work-3-title')[0].style.opacity = "0";
        mouseOn[2] = 0;
    } );

    $('#work-4')[0].style.background = "url(./images/works-4.jpg)";
    $('#work-4')[0].style.backgroundSize = "100%";
    $('#work-4')[0].style.backgroundRepeat = "no-repeat";
    $('#work-4')[0].style.backgroundPosition = "center";
    console.log( $('#work-3-title'));
    $('#work-4').hover(function(){
        $(this)[0].style.backgroundSize="200%";
        $(this)[0].style.filter = "brightness(0.3) grayscale(0.5)"
        $('#work-4-title')[0].style.opacity = "1";
        mouseOn[3] = 1;
    },function(){
        $(this)[0].style.backgroundSize="100%";
        $(this)[0].style.filter = "brightness(1) grayscale(0)"
        $('#work-4-title')[0].style.opacity = "0";
        mouseOn[3] = 0;
    } );

    $('#work-5')[0].style.background = "url(./images/works-5.jpg)";
    $('#work-5')[0].style.backgroundSize = "100%";
    $('#work-5')[0].style.backgroundRepeat = "no-repeat";
    $('#work-5')[0].style.backgroundPosition = "center";
    console.log( $('#work-5-title'));
    $('#work-5').hover(function(){
        $(this)[0].style.backgroundSize="200%";
        $(this)[0].style.filter = "brightness(0.3) grayscale(0.5)"
        $('#work-5-title')[0].style.opacity = "1";
        mouseOn[4] = 1;
    },function(){
        $(this)[0].style.backgroundSize="100%";
        $(this)[0].style.filter = "brightness(1) grayscale(0)"
        $('#work-5-title')[0].style.opacity = "0";
        mouseOn[4] = 0;
    } );

    $('#work-6')[0].style.background = "url(./images/works-6.jpg)";
    $('#work-6')[0].style.backgroundSize = "100%";
    $('#work-6')[0].style.backgroundRepeat = "no-repeat";
    $('#work-6')[0].style.backgroundPosition = "center";
    console.log( $('#work-6-title'));
    $('#work-6').hover(function(){
        $(this)[0].style.backgroundSize="200%";
        $(this)[0].style.filter = "brightness(0.3) grayscale(0.5)"
        $('#work-6-title')[0].style.opacity = "1";
        mouseOn[5] = 1;
    },function(){
        $(this)[0].style.backgroundSize="100%";
        $(this)[0].style.filter = "brightness(1) grayscale(0)"
        $('#work-6-title')[0].style.opacity = "0";
        mouseOn[5] = 0;
    } );

    $('#work-7')[0].style.background = "url(./images/works-7.jpg)";
    $('#work-7')[0].style.backgroundSize = "100%";
    $('#work-7')[0].style.backgroundRepeat = "no-repeat";
    $('#work-7')[0].style.backgroundPosition = "center";
    console.log( $('#work-7-title'));
    $('#work-7').hover(function(){
        $(this)[0].style.backgroundSize="200%";
        $(this)[0].style.filter = "brightness(0.3) grayscale(0.5)"
        $('#work-7-title')[0].style.opacity = "1";
        mouseOn[6] = 1;
    },function(){
        $(this)[0].style.backgroundSize="100%";
        $(this)[0].style.filter = "brightness(1) grayscale(0)"
        $('#work-7-title')[0].style.opacity = "0";
        mouseOn[6] = 0;
    } );
}

function workClick(getCount){
        $('#work-title')[0].style.marginLeft = "100%";
        $('#navigation')[0].style.marginLeft = "100%";
        $('#work-row-1')[0].style.marginLeft = "-100%";
        $('#work-row-2')[0].style.marginLeft = "100%";
        $('#work-row-3')[0].style.marginLeft = "-100%";
        $('#body-cover')[0].style.zIndex = "1";
        $('#body-cover')[0].style.opacity = "1";
        for(var i= 1 ; i<8; i++) {
            $('#work-' + i + '-title')[0].style.marginLeft = "-200%";
        }
        setTimeout(function(){
            window.location.href='./works.html?work='+getCount;
        },1000);
    }


//window.setInterval(timeInterval,500);
//console.log($('.work-item'));
//function timeInterval(){
//    for(var i = 0; i < $('.work-item').length; i++){
//        if(mouseOn[i]==0){
//        //$('.work-title')[i].style.opacity = Math.random()*0.5;
//        }
//    }
//}

document.addEventListener('DOMContentLoaded',function(){
    $('#work-cover')[0].style.opacity = '1';
    $('#navigation')[0].style.marginLeft = "91%";
    setTimeout(function(){
        $('#work-cover')[0].style.opacity = '0';
    },500);
    setTimeout(function(){
        $('#work-cover')[0].style.zIndex = '-1';
    },1300);

    loadWorks();

    for(var i = 0; i<20; i++){
        var big = document.getElementById('background-animation');
        var newDiv = document.createElement('div');
        newDiv.innerHTML = list[parseInt(Math.random()*25)];
        newDiv.style.marginLeft = Math.random()*100+'%';
        newDiv.style.display = 'inline';
        newDiv.style.position = 'fixed';
        newDiv.style.marginTop = '-20%';
        newDiv.style.fontSize = Math.random()*80+140+'px'
        pos.push(-20-Math.random()*20);
        v.push(Math.random()*0.05+0.01);
        newDiv.className = 'letter';
        big.appendChild(newDiv)
    }

    function timer(){
        setInterval(function(){
            for(var i = 0; i<20; i++){
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
