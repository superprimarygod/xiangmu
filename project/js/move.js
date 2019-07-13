function move(ele,json,callback){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var onoff = true;
        for(var attr in json){
            if(attr == "opacity"){
                var iNow = getStyle(ele,attr)*100;
            }else{
                var iNow = parseInt(getStyle(ele,attr));
            }

            var speed = (json[attr] - iNow)/8;

            speed = speed<0 ? Math.floor(speed) : Math.ceil(speed);

            if(attr == "opacity"){
                iNow += speed;
                ele.style[attr] = iNow/100;
            }else{
                ele.style[attr] = iNow + speed + "px";
            }

            if(iNow != json[attr]){
                onoff = false;
            }
        }
        if(onoff){
            clearInterval(ele.timer);
            callback && callback();
        }
    },30)
}
function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr]
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}

// move(obox,{left:300},function(){

// })