class Car{
    constructor(){
        this.thead = document.querySelector("thead");
        this.url = "../date/goods.json";

        this.init();                   //渲染购物车
        
        this.addEvent();              //删除事件
    }
    addEvent(){
        var that = this;
        this.thead.onclick = function(){
            if(event.target.className == "del"){
                //获取点击商品的id
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                // console.log(that.id)
                //删除DOM元素
                event.target.parentNode.parentNode.remove();
                //删除localstorage的数据
                that.setData(function(i){
                    that.cargoods.splice(i,1);
                });
            }
            if(event.target.className=="checkAll"){
                // console.log($(".checkAll").attr("checked"))
                if($(".checkAll").is(":checked")) {
                    $(".check").prop("checked", true);        //全选复选框
                }else{
                    // console.log(1)
                    $(".check").prop("checked", false);       //取消全部复选框
                }
            }
            //如果有一个取消,全选按钮取消
            if (event.target.className=="check" && $(event.target).is(":checked") == false){    
                $(".checkAll").prop('checked', false);
            }
            var checkLength=$(".check").length;          //商品的品种数量

            // console.log($("thead").find(".check:checked").length)  
            var choiceLength=$("thead").find(".check:checked").length;           //选中的商品品种数量
            if(checkLength==choiceLength&&checkLength!=0&&choiceLength!=0){                                       //所有按钮被选中,全选按钮选中
                $(".checkAll").prop("checked", true);
            }

            that.total();
        }
        //修改数量：事件委托绑定数量框的事件
        this.thead.oninput = function(){
            if(event.target.className == "buynum"){
                //存储修改的商品的id
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                //修改localstorage的数据
                that.setData(function(i){
                    that.cargoods[i].num = event.target.value;

                });
                //计算对应金额
                that.price=event.target.parentNode.previousElementSibling.lastElementChild.innerHTML.substr(1);
                event.target.parentNode.nextElementSibling.firstElementChild.innerHTML=(Math.floor(that.price*event.target.value * 100)/100).toFixed(2);
            }
        };
    }
    //计算总价
    total(){
        var sumnumber=0;
        
        for(var i=0;i<$("thead").find(".check:checked").length;i++){
           sumnumber+=parseFloat($("thead").find(".check:checked")[i].parentNode.parentNode.children[4].firstElementChild.innerHTML);
        }
        $(".sumnumber").html(sumnumber.toFixed(2)+"元")
    }
    
    setData(callback){
        //遍历数据，查找相同id
        for(var i=0;i<this.cargoods.length;i++){
            if(this.cargoods[i].id == this.id){
                //执行回调函数：删除时传进来的是删除，修改时传进来的是修改
                callback(i);
            }
        }
        //再存回去
        localStorage.setItem("cargoods",JSON.stringify(this.cargoods));
    }
    
    init(){
        var that = this;
        ajaxPost(this.url,function(res){
            that.res = JSON.parse(res)
            console.log(that.res)
            that.getDate();
        })
    }
    getDate(){
        this.cargoods = localStorage.getItem("cargoods") ? JSON.parse(localStorage.getItem("cargoods")) : [];

        this.display();    
    }
    display(){
        var str = this.thead.innerHTML;          //thead原有的内容
        // console.log(str)                        
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.cargoods.length;j++){
                if(this.res[i].goodsId == this.cargoods[j].id){
                   var sum=(Math.floor(this.res[i].price.substr(1)*this.cargoods[j].num * 100) / 100).toFixed(2);
                   
                   str += `<tr class="tablebody" index="${this.res[i].goodsId}">
                    <td colspan="2"><input type="checkbox" class="check"></td>
                    <td>
                        <div class="bookimg" style="background: url(${this.res[i].src}) no-repeat center;background-size: 80%;">
                        </div>
                        <div class="bookname">
                        ${this.res[i].name}
                        </div>
                    </td>
                    <td>
                        <del class="reprice">${this.res[i].reprice}</del>
                        <p class="price">${this.res[i].price}</p>
                    </td>
                    <td>
                        <input class="buynum" type="number" min="1" value="${this.cargoods[j].num}">
                    </td>
                    <td>
                        <span class="sum">${sum}</span>
                    </td>
                    <td>
                        <p class="collect">添加收藏夹</p>
                        <p class="del">删除</p>
                    </td>
                </tr>`
                }
            }
        }
        this.thead.innerHTML = str;
    }

}
new Car;