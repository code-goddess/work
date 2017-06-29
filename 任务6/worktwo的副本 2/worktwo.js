var isFist = true;

function changeSkin() {
    // body...
    // if (isFist) {
        // 1.在inner中插入一个div
        var inner = document.getElementById("inner");
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
            cancleBtn.addEventListener("click",function(){
                inner.removeChild(inner.childNodes[0]);
                isFist = true;
            });
        }
        //3、创建颜色按钮
        var fun = new Array(one,two,three,four,five,six);
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

 

// function setCookie(cname,cvalue,exdays)
// {
//     var d = new Date();
//     d.setTime(d.getTime()+(exdays*24*60*60*1000));
//     var expires = "expires="+d.toGMTString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }

// function getCookie(cname)
// {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0; i<ca.length; i++)
//     {
//       var c = ca[i].trim();
//       if (c.indexOf(name)==0) return c.substring(name.length,c.length);
//     }
//     return "";
// }

// // 当点击保存时，记录用户选择的背景
// // var saveBtn =document.getElementsByClassName("btn1");
// // saveBtn.addEventListener("click",checkCookie());

// function checkCookie()
// {
//     var user=getCookie("username");
//     if (user!="")
//       {
//           alert("Welcome again " + user);
//       }
//     else
//       {
//           user = prompt("Please enter your name:","");
//           if (user!="" && user!=null)
//             {
//                 setCookie("username",user,365);
//             }
//       }
// }
//点击按钮后inner的背景颜色变化
var one = function changeColor1() {
	var inner = document.getElementById("inner");
	inner.style.background = "AliceBlue";
}
var two= function changeColor2() {
	var inner = document.getElementById("inner");
	inner.style.background = "AntiqueWhite";
}
var three = function changeColor3() {
	var inner = document.getElementById("inner");
	inner.style.background = "Aqua";
}
var four = function changeColor4() {
	var inner = document.getElementById("inner");
	inner.style.background = "Aquamarine";
}
var five = function changeColor5() {
	var inner = document.getElementById("inner");
	inner.style.background = "DarkOliveGreen";
}
var six = function changeColor6() {
	var inner = document.getElementById("inner");
	inner.style.background = "LightGreen";
}
