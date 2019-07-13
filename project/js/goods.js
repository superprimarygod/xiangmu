//商品渲染
class GetGoods{
    constructor(){
        this.cont=document.querySelector(".cont")

        this.url="../date/goods.json"

        this.init();

        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.cont.onclick = function(eve){
            var e = eve || window.event;
            var t = e.target || e.srcElement;
                //获取当前的商品ID
                that.id = t.parentNode.getAttribute("index");
                // console.log(that.id)
                that.setData();
        }
    }
    setData(){
        localStorage.setItem("goods",this.id)
    }
    init(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);        //json数据
            console.log(that.res);

            that.display()
        })
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str += `<li class="bookbox" index="${this.res[i].goodsId}">
                        <div class="book" index="${this.res[i].goodsId}">
                            <a href="details.html" style="background: url(${this.res[i].src}) no-repeat center;background-size: contain;"></a>
                        </div>
                        <a class="bookname" href="details.html">${this.res[i].name}</a> 
                        <p class="bookprice" index="${this.res[i].goodsId}">
                            <span>${this.res[i].price}</span>
                            <span>|</span>
                            <del>${this.res[i].reprice}</del>
                        </p>
                    </li>`;
        }
        this.cont.innerHTML = str;
    }
}
new GetGoods();