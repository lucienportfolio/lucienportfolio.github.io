window.location.href;
var everLoaded = false;

function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r!=null)
        return unescape(r[2]);

    return null; //返回参数值
}

var workCount = getUrlParam('work');
var worksContent = [];


var fetchData = $.getJSON("../json/data.json", function(data){
    $.each(data,function(infoIndex,info){
            worksContent.push(
                {
                    "title": info["title"],
                    "time": info["time"],
                    "res": info["responsibility"],
                    "type": info["type"],
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
        show();
    });

function show(){
    if(workCount==0){
        $('#works-title')[0].innerHTML = worksContent[1].title;
        $('#works-header-bg')[0].style.background = 'url('+worksContent[1].bg+')';
        $('#works-header-bg')[0].style.backgroundSize = "100%";
        $('#works-header-bg')[0].style.backgroundPosition = "center";
        loadAll(1)
        moreWorks();
    }else{
        console.log(worksContent);
        $('#works-title')[0].innerHTML = worksContent[workCount].title;
        $('#works-header-bg')[0].style.background = 'url('+worksContent[workCount].bg+')';
        $('#works-header-bg')[0].style.backgroundSize = "100%";
        $('#works-header-bg')[0].style.backgroundPosition = "center";
        loadAll(workCount)
    }
}

function loadAll(iCount){
    for(var i = 0; i < worksContent[iCount].concept.length; i++){
        var newP = $("<p>"+worksContent[iCount].concept[i]+"</p>");
        $('#concept-content').append(newP);
    }

    for(var i = 0; i< worksContent[iCount].gallery.length;i++){
        var newI = $("<div class='gallery-item' onclick='galleryIn("+i+","+iCount+")'></div>");
        newI[0].style.background = "url("+worksContent[iCount].gallery[i]+")";
        newI[0].style.backgroundSize = "auto 100%";
        newI[0].style.backgroundRepeat="no-repeat";
        newI[0].style.backgroundPosition ="center";
        $('#gallery-content').append(newI);
        $('.gallery-item').hover(function(){
            $(this)[0].style.filter = "brightness(1.2)";
        },function(){
            $(this)[0].style.filter = "brightness(1)";
        })
    }

    if(worksContent[iCount].video!=undefined){
        $('#youtube')[0].src=worksContent[iCount].video;
    }else{
        $('#video')[0].style.visibility = "hidden";
        $('#video')[0].style.height = "0";
    }

    $('#proj-time').html(worksContent[iCount].time);
    $('#proj-res').html(worksContent[iCount].res);
    $('#proj-type').html(worksContent[iCount].type);
    $('#proj-skills').html(worksContent[iCount].skills);
    $('#proj-final').html(worksContent[iCount].final);
    if(worksContent[iCount].github!=undefined){
        $('#proj-github')[0].href=worksContent[iCount].github;
    }else{
        $('#proj-code')[0].style.visibility="hidden";
    }
}


function galleryIn(itemCount, iCount){
    var left = 0;
    var right = 0;
    $('#gallery-big')[0].style.zIndex = '1';
    $('#gallery-big')[0].style.opacity = '1';
    $('#works-navigation')[0].style.filter="blur(10px)";
    $('#works-header-bg')[0].style.filter="blur(10px)";
    $('#works-big-container')[0].style.filter="blur(10px)";
    $('#gallery-big-image')[0].src = worksContent[iCount].gallery[itemCount];
    if(itemCount>0) left = itemCount-1;
    else left = worksContent[iCount].gallery.length-1;
    if(itemCount<worksContent[iCount].gallery.length-1) right = itemCount+1;
    else right = 0;
    $('#g-left').click(function(){
        itemCount = left;
        $('#gallery-big-image')[0].src = worksContent[iCount].gallery[itemCount];
        if(itemCount>0) left = itemCount-1;
        else left = worksContent[iCount].gallery.length-1;
        if(itemCount<worksContent[iCount].gallery.length-1) right = itemCount+1;
        else right = 0;
    });
    $('#g-right').click(function(){
        itemCount = right;
        $('#gallery-big-image')[0].src = worksContent[iCount].gallery[itemCount];
        if(itemCount>0) left = itemCount-1;
        else left = worksContent[iCount].gallery.length-1;
        if(itemCount<worksContent[iCount].gallery.length-1) right = itemCount+1;
        else right = 0;
    });
}

$('#nav-1').click(function(){
    $('#work-cover')[0].style.zIndex = '1';
    setTimeout(function(){
        $('#work-cover')[0].style.opacity = '1';
        $('#works-title')[0].style.marginLeft="-100%";
        $('#works-header-bg')[0].style.top="-400px";
        $('#works-header-bg')[0].style.opacity="0";
        $('#works-big-container')[0].style.marginTop="-200px";
        $('#works-big-container')[0].style.opacity="0";
        $('#works-navigation')[0].style.left="110%";
    },200);
    setTimeout(function(){
        window.location.href='./index.html';
    },1000);
});

$('#nav-3').click(function(){
    $('#work-cover')[0].style.zIndex = '1';
    setTimeout(function(){
        $('#works-navigation')[0].style.left="50%";
        $('#works-navigation')[0].style.opacity="0";
        $('#work-cover')[0].style.opacity = '1';
        $('#works-title')[0].style.marginLeft="-100%";
        $('#works-header-bg')[0].style.left="-100%";
        $('#works-header-bg')[0].style.opacity="0";
        $('#works-big-container')[0].style.marginLeft="-100%";
        $('#works-big-container')[0].style.opacity="0";
    },200);
    setTimeout(function(){
        //if(workCount==0) workCount = worksContent.length-1;
        if(workCount>1) workCount--;
        else workCount = worksContent.length-1;
        window.location.href='./works.html?work='+workCount;
    },1000);
});

$('#nav-4').click(function(){
    $('#work-cover')[0].style.zIndex = '1';
    setTimeout(function(){
        $('#works-navigation')[0].style.left="50%";
        $('#works-navigation')[0].style.opacity="0";
        $('#work-cover')[0].style.opacity = '1';
        $('#works-title')[0].style.marginLeft="-100%";
        $('#works-header-bg')[0].style.left="-100%";
        $('#works-header-bg')[0].style.opacity="0";
        $('#works-big-container')[0].style.marginLeft="-100%";
        $('#works-big-container')[0].style.opacity="0";
    },200);
    setTimeout(function(){
        if(workCount==0) workCount = 2;
        if(workCount<worksContent.length-1) workCount++;
        else workCount = 1;
        window.location.href='./works.html?work='+workCount;
    },1000);
});

$('#nav-2').click(function(){
    moreWorks();
    setTimeout(function(){
    },200);
});

$('#close').click(function(){
    $('#menu')[0].style.zIndex = "1";
    $('#menu')[0].style.opacity = "0";
    $('#works-navigation')[0].style.filter="blur(0px)";
    $('#works-header-bg')[0].style.filter="blur(0px)";
    $('#works-big-container')[0].style.filter="blur(0px)";
    setTimeout(function(){
        $('#menu')[0].style.zIndex = "-1";
    },500);
});

$('#close-2').click(function(){
    $('#gallery-big')[0].style.zIndex = "1";
    $('#gallery-big')[0].style.opacity = "0";
    $('#works-navigation')[0].style.filter="blur(0px)";
    $('#works-header-bg')[0].style.filter="blur(0px)";
    $('#works-big-container')[0].style.filter="blur(0px)";
    setTimeout(function(){
        $('#gallery-big')[0].style.zIndex = "-1";
        $('#works-navigation')[0].style.zIndex = '1';
    },500);
});

function moreWorks(){
    $('#menu')[0].style.zIndex = "1";
    $('#menu')[0].style.opacity = "1";
    $('#works-navigation')[0].style.filter="blur(10px)";
    $('#works-header-bg')[0].style.filter="blur(10px)";
    $('#works-big-container')[0].style.filter="blur(10px)";
    if(everLoaded==false) loadWorks();
}

function mouseOverItem(count){
    $('#'+count)[0].style.marginTop='0';
}

function mouseOutItem(count){
    $('#'+count)[0].style.marginTop='100%';
}

function loadWorks(){
    everLoaded = true;
    for(var i = 1; i<worksContent.length;i++){
        var col = (i-1)%3;
        var newItem = $("<div class='menu-item' onclick='workClick("+i+")' onmouseover='mouseOverItem("+i+")' onmouseout='mouseOutItem("+i+")'></div>");
        var newItemdescription = $("<div class='menu-description' id='"+i+"'></div>");
        newItem[0].style.background= 'url('+worksContent[i].tn+')';
        newItem[0].style.backgroundSize='100%';
        newItem[0].style.backgroundPosition='center';
        newItemdescription.html(worksContent[i].title);
        newItem.append(newItemdescription);
        console.log($('#menu-col-'+col));
        $('#menu-col-'+col).append(newItem);
    }
}

function workClick(getCount){
    $('#work-cover')[0].style.zIndex = '1';
    setTimeout(function(){
        $('#menu')[0].style.opacity = "0";
        $('#works-navigation')[0].style.opacity="0";
        $('#work-cover')[0].style.opacity = '1';
        $('#works-header-bg')[0].style.opacity="0";
        $('#works-big-container')[0].style.opacity="0";
    },200);
    setTimeout(function(){
        window.location.href='./works.html?work='+getCount;
    },800);
}

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        $('#work-cover')[0].style.opacity = '0';
        $('#works-title')[0].style.marginLeft="5%";
        $('#works-header-bg')[0].style.top="0";
        $('#works-header-bg')[0].style.opacity="1";
        $('#works-big-container')[0].style.marginTop="200px";
        $('#works-big-container')[0].style.opacity="1";
        $('#works-navigation')[0].style.left="84%";
    },300);
    setTimeout(function(){
        $('#work-cover')[0].style.zIndex = '-1';
    },800);
});
/**
 * Created by Lucien on 11/1/2016.
 */
