var inner = document.getElementById("inner");
var isFist = true; //判断是否执行过一次

/***************改变皮肤的效果 beging*************/
function changeSkin() {
    // body...
    // if (isFist) {
    // 1.在inner中插入一个div
    var div = document.createElement("DIV");
    div.className = "skinDiv";
    if (isFist) {
        var skinDiv = inner.insertBefore(div, inner.childNodes[0]);
        isFist = false;
    }
    //2、在div中加入按钮
    var btnName = new Array("取消", "保存")
    for (var i = 0; i < 2; i++) {
        var btn = document.createElement("BUTTON");
        var cancleBtn = skinDiv.appendChild(btn);
        btn.innerHTML = btnName[i];
        // alert(btnName[0]);
        var t = "btn";
        cancleBtn.className = t + i;
        //当点击取消按钮和保存按钮的时候，关闭换肤页面
        // 删除元素
        // removeChild(div)
        cancleBtn.addEventListener("click", function() {
            inner.removeChild(inner.childNodes[0]);
            isFist = true;
        });
    }
    //3、创建颜色按钮
    var fun = new Array(one, two, three, four, five, six);
    var colorArr = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "DarkOliveGreen ", "LightGreen"];
    for (var i = 0; i < 6; i++) {
        var btn = document.createElement("BUTTON");
        var colorBtn = skinDiv.appendChild(btn);
        colorBtn.style.background = colorArr[i];
        var t = "colorBtn";
        colorBtn.className = t + i;
        var name = "changeColor" + i;
        colorBtn.onclick = fun[i];
    }

    // }
}
//4.使用localstorae保存颜色换肤效果
var themeColor = localStorage.getItem("themeColor");
if (themeColor) {
    inner.style.background = themeColor;
}
//点击按钮后inner的背景颜色变化
var one = function changeColor1() {
    inner.style.background = "AliceBlue";
    localStorage.setItem("themeColor", "AliceBlue");
}
var two = function changeColor2() {
    inner.style.background = "AntiqueWhite";
    localStorage.setItem("themeColor", "AntiqueWhite");
}
var three = function changeColor3() {
    inner.style.background = "Aqua";
    localStorage.setItem("themeColor", "Aqua");
}
var four = function changeColor4() {
    inner.style.background = "Aquamarine";
    localStorage.setItem("themeColor", "Aquamarine");
}
var five = function changeColor5() {
    inner.style.background = "DarkOliveGreen";
    localStorage.setItem("themeColor", "DarkOliveGreen");
}
var six = function changeColor6() {
        inner.style.background = "LightGreen";
        localStorage.setItem("themeColor", "LightGreen");
    }
/***************改变皮肤的效果 end*************/

/***********悬浮百度的效果 begin***************/
window.onscroll = function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var baiduid = document.getElementById('baiduid');
        var fixedbaidu = baiduid.cloneNode(true);
        fixedbaidu.id = "search-fixed";
        if (t > 0) {
            if (isFist) {
                inner.insertBefore(fixedbaidu, inner.childNodes[0]);
                isFist = false;
            }
        } else {
            var delBaidu = document.getElementById("search-fixed");
            inner.removeChild(delBaidu);
            isFist = true;
        }
    }
    /***********悬浮百度的效果 end******************/

/******** 页面加载完成后加载左边栏 begin**********/
function leftFiexd() {
    // alert("hellow word");
    var container = document.getElementById("container");
    var left = document.createElement("DIV");
    var leftDiv = document.body.appendChild(left);
    leftDiv.className = "column";
}
/******** 页面加载完成后加载左边栏 end************/
