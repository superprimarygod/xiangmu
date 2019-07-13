//随机生成验证码
var suiNum=document.querySelector(".suijishu");
suiNum.onclick=function(){
    createCode();
}
function createCode(){ 
    code = "";   
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数  
    for(var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random()*62);//取得随机数的索引（0~61）  
        code += random[index];//根据索引取得随机数加到code上  
    }  
    suiNum.innerHTML = code;//把code值赋给验证码 
} 

var ophone=document.querySelector(".phone");   //状态为x
var opass=document.querySelector(".password")  //状态为y
var tZhengma=document.querySelector(".tianzhengma")  //状态为z
var denglubtn=document.querySelector(".denglubtn")
var defalt=document.querySelector(".defalt")

var x=y=z=0;

ophone.onblur=function(){
    var myPhone =localStorage.getItem(this.value);
    if(myPhone){
        defalt.innerHTML=""
        x=1;
    }else{
        defalt.innerHTML="还没账号？立即注册？"
    } 
}
opass.onblur=function(){
    var myPhone =localStorage.getItem(ophone.value);
    if(this.value == myPhone){
        defalt.innerHTML=""
        y=1;
    }else{
        defalt.innerHTML="密码错误，请检查！！！"
    }    
}
tZhengma.onblur=function(){
    if(this.value == suiNum.innerHTML){
        defalt.innerHTML=""
        z=1;
    }else{
        defalt.innerHTML="请正确输入验证码"
    }
}

denglubtn.onclick = function(){
    if(x && y && z){
        localStorage.setItem("visitor",ophone.value)
        alert("登录成功")
        location = "../index/index.html"//跳转到首页
    }
}
