
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
console.log(workCount);

var worksContent;

$.ajax({
    dataType: "json",
    url: "./data.json",
    //data: data,
    //success: success
});

$.getJSON("./json/data.json");

//$.getJSON("./data.json", function(data){
//    var strHtml; //存储数据的变量
//    $.each(data,function(infoIndex,info){
//        console.log(infoIndex);
//        console.log(info);
//    })
//})
/**
 * Created by Lucien on 11/1/2016.
 */
