项目名:博库网--博库体验店

GitHub地址  https://github.com/superprimarygod/xiangmu1905.git

<文件介绍>
项目打开方式：把projrct文件夹放到服务器WWW文件夹的根目录里，然后再用
localhost/projrct/index.html

<html>
项目文件夹名---project
首页html-------project/index/index.html
商品列表html---project/index/goods.html
商品详情页html-project/index/details.html
登录html-------project/index/login.html
注册html-------project/index/register.html
购物车html-----project/index/shopcar.html


<js>
内部js文件-----project/js/...
外部引用文件---project/js/jquery.js


<css>
内部css文件-----project/css/...

<json数据>
数据json文件----project/date/goods.json


<图片>
商品列表图片-----project/images/goods/...
其他图片---------project/images/...



<功能介绍>

1.首页功能:
	1.轮播图（鼠标划入则停止）
	2.三级菜单（右边的内容框做了内容判断，如果内容为空则不显示，默认做了三个对应内容）
	3.楼层效果（需滚动条达到一定高度才能显示，默认隐藏）
     

2.商品列表功能:
	
	json数据渲染商品列表图片(共展示12个商品)，随机点击则进入对应商品详情


3.商品列表详情功能:
	数据渲染页面
	放大缩小：点击商品主图可实现界面透明遮罩，商品放大；再次点击则回到原始状态。
	输入商品数量则加入对应数量的购物车，默认为1件，频繁点击加入购物车，则在原来基础上添加对应数量的
	商品，可添加多种商品。


	
<跳转和效果介绍>
1.首页
    1)点击导航“新品”跳转至商品列表
    2)点击对应楼层滑至目标位置
    3)点击“登录/注册”可跳转登录/注册页面
    4)登录用电话登录，如没有注册，则提示去注册，点击去注册则跳转注册页面
    5)点击右上角购物车,跳转购物车
    6)点击任意页面的logo都会跳会首页
   

2.商品列表
    1)鼠标点击商品列表会跳转至对应详情页
    2)点击右上角“购物车”会跳转到购物车页面
    3)点击导航栏的“首页”会跳转首页
    4)鼠标滑过任意商品，会有背景颜色提示


3.商品详情页
    1)点击商品主图出现遮罩，并放大商品图片，再次点击则恢复原样
    2)点击首页跳转到首页
    3)点击数量框可设置购买数量
    4)点击加入购物车则加入对应数量的商品（可数量叠加）

4.购物车页面
    1)点击数量框可改变数量,对应更改该商品的小计和总价格
    2)手动输入更改购买时数量,可以更改该商品的小计和总价格
    3)点击"删除"可以删除该类商品
    4)点击全选则选中所有商品，并显示总价；只要取消一种商品，则全选取消；选中所有商品，全选自动勾选


5.登录/注册
    1)登录/注册用正则判断，并显示错误信息

      
<特点>
    1)商品列表用json数据渲染商品
    2)商品主图采用半透明遮罩放大，便于操作
    3)购物车的所有价格可实时更改


<缺点>
    1)登录成功显示用户名功能不完善
    2)没有使用sass和模块化
    