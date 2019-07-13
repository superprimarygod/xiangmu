//随机生成验证码
var getNum=document.querySelector(".getnum");
getNum.onclick=function(){
    createCode();
}

function createCode(){ 
    code = "";   
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//随机数  
    for(var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random()*62);//取得随机数的索引（0~61）  
        code += random[index];//根据索引取得随机数加到code上  
    }  
    getNum.innerHTML = code;//把code值赋给验证码 
} 

//注册验证
var otel=document.querySelector(".tel");
var opass=document.querySelector(".pass");
var repass=document.querySelector(".repass");
var oynum=document.querySelector(".yanzhengma");
var oerror=document.querySelector(".error");
var zhucebtn=document.querySelector(".zhucebtn")
var t=p=e=y=0;

otel.onblur = function(){
    var reg = /^1[3456789]\d{9}$/;
    if(reg.test(this.value)){
        oerror.innerHTML = "";
        t = 1;
    }else{
        oerror.innerHTML = "请输入正确的手机号码！！！";
        alert("请输入正确的11位手机号");
        t = 0;
    }
}
opass.onblur = function(){
    var reg = /^.{6,20}$/;
    if(reg.test(this.value)){
        oerror.innerHTML = "";
        p = 1;
    }else{
        oerror.innerHTML = "密码不符！！！";
        alert("密码错误请输入字母、数字、“-”“_”的组合，6-20个字符");
        p = 0;
    }
}
repass.onblur = function(){
    if(this.value == opass.value){
        oerror.innerHTML = "";
        e = 1;
    }else{
        oerror.innerHTML = "密码不一致!!!";
        alert("密码不一致");
        e = 0;
    }
}

oynum.onblur = function(){
    if(this.value == getNum.innerHTML){
        oerror.innerHTML = "";
        y = 1;
    }else{
        oerror.innerHTML = "请正确输入验证码";
        alert("验证码错误");
        y = 0;
    }
}


zhucebtn.onclick = function(){
    if(t && p && e && y){
        alert("注册成功")
        localStorage.setItem(otel.value,opass.value);
        location = "../index/login.html";
    }
    if(t == 0){
        alert("手机号错误");
    } 
    if(p == 0){
        alert("密码错误");
    }
    if(e == 0){
        alert("密码不一致");
    }
    if(y == 0){
        alert("验证码错误");
    }
}


//渲染用户名
var visitor=localStorage.getItem("visitor")
window.onload=function(){
    if(visitor){
        $(".denglu").html("您好！");
        $(".telephone").html(visitor);
    }  
}



