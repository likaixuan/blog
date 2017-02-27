当我们创建对象时，实际上也同时赋予了该对象构造器属性 constructor，该属性是创建该对象的构造函数的引用


1. 声明一个构造函数
```javascript 
//声明一个构造函数 构造函数首字母应大写
function Obj(name){
	this.name=name;
	this.fun=function(){
		alert(this.name);
	}
}
```
2. 用Obj构造函数创建一个对象
```javascript 
var testObj=new Obj("李凯旋");//调用方法 打印 传递过去的值 即为”李凯旋“
testObj.fun();//弹出"李凯旋"
```
>正如我们开始时所说：”当我们创建对象时，实际上也同时赋予了该对象构造器属性 constructor，该属性指向用于创建该对象的构造函数的引用“，我们现在来打印一下这个构造器属性

3.打印一下构造器属性
```javascript
alert(testObj.constructor)//弹出的就是Obj这个构造函数、由此可见constructor属性指向创建此对象的构造函数本身
```
4.再次验证
```javascript
//声明一个构造函数 构造函数首字母应大写
function Obj(name){
	this.name=name;
	this.fun=function(){
		alert(this.name);
	}
}
var testObj=new Obj("李凯旋");
testObj.fun();//弹出"李凯旋"
//通过testObj.constructor来创建一个对象
var testObj2=new testObj.constructor("我是通过testObj指向的构造函数创建的");
testObj2.fun();//弹出"我是通过testObj指向的构造函数创建的"
alert(testObj.constructor===testObj2.constructor);//弹出true 说明两个对象全等于它们是从一个构造函数上创建的
```
5.字面量方式创建对象也是由object构造函数创建的
```javascript
var test={
	name:"李凯旋"
};
alert(test.constructor);//会弹出function object()；
```