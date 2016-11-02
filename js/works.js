window.location.href;

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
                    "bg": info["background"]
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
    $('#works-title')[0].innerHTML = worksContent[workCount].title;
    $('#works-header-bg')[0].style.background = 'url('+worksContent[workCount].bg+')';
    console.log('url+('+worksContent[workCount].bg+')');
}



document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        $('#work-cover')[0].style.opacity = '0';
        $('#works-title')[0].style.marginLeft="5%";
        $('#works-header-bg')[0].style.top="0";
        $('#works-header-bg')[0].style.opacity="1";
        $('#works-body-container')[0].style.marginTop="200px";
        $('#works-body-container')[0].style.opacity="1";
    },300);
    setTimeout(function(){
        $('#work-cover')[0].style.zIndex = '-1';
    },800);
});
/**
 * Created by Lucien on 11/1/2016.
 */
