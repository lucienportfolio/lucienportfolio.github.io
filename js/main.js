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

var worksContent = [];
var fetchData = $.getJSON("../json/data.json", function(data){
    $.each(data,function(infoIndex,info){
        worksContent.push(
            {
                "title": info["title"],
                "time": info["time"],
                "res": info["responsibility"],
                "type": info["type"],
                "design": info["design"],
                "skills": info["skills"],
                "final": info["final"],
                "bg": info["background"],
                "tn": info["thumbnail"],
                "concept": info["concept"],
                "gallery": info["gallery"],
                "video": info["video"],
                "github": info["github"]
            }
        )
        console.log('a');
    })
}).done(function() {
    console.log( "second success" );
})
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        loadWorks();
    });


function mouseOverItem(count){
    $('#des'+count)[0].style.marginTop='0';
    $('#itm'+count)[0].style.backgroundSize = '120%';
}

function mouseOutItem(count){
    $('#des'+count)[0].style.marginTop='100%';
    $('#itm'+count)[0].style.backgroundSize = '100%';
}

function loadWorks(){
    var workCol1 = $('#work-col-1')[0];
    var workCol1 = $('#work-col-2')[0];
    var workCol1 = $('#work-col-3')[0];

    for(var i = 1; i<worksContent.length; i++){
        var col = (i-1)%3;
        var newItem = $("<div class='works-item' id='itm"+i+"' onclick='workClick("+i+")' onmouseover='mouseOverItem("+i+")' onmouseout='mouseOutItem("+i+")'></div>");
        var newItemDescription = $("<div class='works-description' id='des"+i+"'></div>");

        var newItemTitle = $("<p class='des-title'>"+worksContent[i].title+"</p>");
        var newItemType = $("<p class='des-type'>"+worksContent[i].design+"</p>");
        var newItemTime = $("<p class='des-time'>"+worksContent[i].time+"</p>");

        newItem[0].style.background= 'url('+worksContent[i].tn+')';
        newItem[0].style.backgroundSize='100%';
        newItem[0].style.backgroundRepeat = "no-repeat";
        newItem[0].style.backgroundPosition='center';

        newItemDescription.append(newItemTitle);
        newItemDescription.append(newItemType);
        newItemDescription.append(newItemTime);
        newItem.append(newItemDescription);

        $("#work-col-"+col).append(newItem);
    }
}

function workClick(getCount){
        $('#navigation')[0].style.marginLeft = "100%";
        $('#work-col-0')[0].style.marginTop = "-30%";
        $('#work-col-1')[0].style.marginTop = "30%";
        $('#work-col-2')[0].style.marginTop = "-30%";
        $('#body-cover')[0].style.zIndex = "1";
        $('#body-cover')[0].style.opacity = "1";
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

    // loadWorks();

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
