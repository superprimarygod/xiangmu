    //轮播图
    var oul=document.querySelector("#banner ul")
    var obtnl=document.querySelector(".btnl")
    var obtnr=document.querySelector(".btnr")
    var alis=document.querySelectorAll("#banner ul li")

    var index=0;
    var z=1;
    var ltimer;

    ltimer=setInterval(function(){
        if (index==alis.length-1) {
            index=0;
        }else{
            index++;
        }

        alis[index].style.zIndex=z++;
        alis[index].style.left="-1920px";
        move(alis[index],{left:0});
    },3000)

    oul.onmouseover=function(){
        clearInterval(ltimer);
    }
    oul.onmouseout=function(){
        clearInterval(ltimer);
        ltimer=setInterval(function(){
        if (index==alis.length-1) {
            index=0;
        }else{
            index++;
        }
        alis[index].style.zIndex=z++;
        alis[index].style.left="-1920px";
        move(alis[index],{left:0});
    },3000)}

    obtnr.onclick=function () {
        clearInterval(ltimer);
        if (index==alis.length-1) {
            index=0;
        }else{
            index++;
        }
        alis[index].style.zIndex=z++;
        alis[index].style.left="-1920px";
        move(alis[index],{left:0});
    }

    obtnl.onclick=function(){
        clearInterval(ltimer);
        if (index==0) {
            index=alis.length-1;
        }else{
            index--;
        }
        alis[index].style.zIndex=z++;

        alis[index].style.right="-1920px";
        move(alis[index],{right:0})
    }

    // 楼层效果
    $("#side-l").children("li").click(function(){
	//获取点击的索引
	var index = $(this).index();
	//根据索引获取对应的楼层
	var iNowFloor = $(".floor").eq(index);
	//计算楼层距离顶部的位置
	var t = iNowFloor.offset().top;
	//将这个位置设置给滚动条
	$("html").stop().animate({
		scrollTop:t
	})
})


//楼层的显示隐藏
$(document).scroll(function(){   
　　var distance = $(document).scrollTop();  //获取滚动条距离
　　if(distance >= 632) {
　　　　$("#side-l").css("display","block")  
　　} else {
    　　$("#side-l").css("display","none")  
　　}
})


//三级导航
$(function(){
    //鼠标点击左侧内容栏   滑动出弹层
    $(".banner-l .casebox p").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var thisIndex=$(".banner-l .casebox p").index($(this));
       
        if ($(".casebox-r .case").eq(thisIndex).html()) {
            $(".casebox-r").addClass("active");
            $(".case").hide();
            $(".case").eq(thisIndex).show();
        }else{
            $(".casebox-r").removeClass("active");
        }
    }); 

    $(".banner-l .casebox p").mouseleave(function(){
        $(".casebox-r").removeClass("active");
        // $(this).removeClass("active");
    });
    
    $(".casebox-r").mouseenter(function(){
        $(".casebox-r").addClass("active");
    });
    $(".casebox-r .case a").mouseenter(function(){
        $(this).addClass("active")
        $(this).parent().siblings().children().removeClass("active")
    });
    $(".casebox-r").mouseleave(function(){
        $(".casebox-r").removeClass("active");
        $(".casebox-r .case p a").removeClass("active")
    });
    $(".banner-l").mouseleave(function(){
        // $(".casebox-r").removeClass("active");
        $(".banner-l .casebox p").removeClass("active");
    });
}); 

//渲染用户名
var visitor=localStorage.getItem("visitor")
window.onload=function(){
    if(visitor){
        $(".denglu").html("您好！");
        $(".telephone").html(visitor);
    }  
}

































