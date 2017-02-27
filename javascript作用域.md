# javascript 作用域

本文是作者的学习笔记、主要是给大家说说作用域在javascript中是怎么一回事、有不足之处在所难免欢迎大家指正。

### 函数作用域

JavaScript 不是块级作用域而是通过函数来管理作用域，在函数内部声明的变量只能在这个函数内部使用，

1.块级作用域测试
```javascript
if(true){
	var test=1;
}
console.log(test); //1
```
2.函数级作用域测试
```javascript
(function() {
	var test = 1;
})();
console.log(test); //Uncaught ReferenceError: test is not defined
```
通过上面两个例子我们可以看出 在函数里声明的变量在外边是不能用的、而块级是可以的
### 全局变量
全局变量是在函数外定义的变量或者未定义就使用的变量(隐式全局变量)又或是直接用window.属性名=值添加的变量，每一个javascript运行环境都有一个全局对象，例如在浏览器中window就指向这个全局对象(nodeJS是global)，其实我们创建的每一个全局变量或者全局方法都是全局对象的一个属性和方法
```javascript
var a=5;
(function(){
	console.log(a);
	console.log(window.a);
})();//5 5
```
由此可见 全局变量其实就是全局对象上的一个属性、我们甚至可以通过window来添加一个全局变量
```javascript
(function(){
	window.a=7;
})();
console.log(a);//7
```
全局变量添加成功啦 ^_^

### 隐式全局变量
在javascript中不用声明就能使用变量、而且没有声明就使用的变量也会默认成为全局对象的属性
```javascript
(function(){
	a=7;
})();
console.log(a);//7
```
这就很尴尬了，既然直接用就是全局变量,那么我们为啥还要用var来定义全局变量，它们之间到底有啥区别?
听我慢慢说来:
1.没有用var 声明就使用的变量在严格模式下会报错的
```javascript
"use strict";
a=1;
console.log(a);//Uncaught ReferenceError: a is not defined
```
2 var声明的全局变量会被提升，隐式全局变量不会被提升(提升一会就会说到)

未提升
```javascript
console.log(a);//Uncaught ReferenceError: a is not defined
a=1;
```
提升
```javascript
console.log(a);// undefined
var a=1;
```
3 var声明的全局变量不可用delete删除、隐式全局变量可以
```javascript
var a=1;
b=2;
delete a;
delete b;
console.log(a);//1
console.log(b);////Uncaught ReferenceError: b is not defined
```
### 变量提升
在Javascript中，函数及变量的声明都将被提升到函数的最顶部，也就是说我们可以先使用后声明, 
但函数表达式和变量表达式只是将函数或者变量的声明提升到函数顶部，函数表达式和变量的初始化将不被提升我们来看一下案例
```javascript
fun();//hello,world哥
function fun(){
	console.log("hello,world哥");
}
```
方法先使用后声明这显然是没有问题的、那么我们接着看变量的提升
```javascript
console.log(a);//undefined
console.log(b);//Uncaught ReferenceError: b is not defined
var a=5;
```
a的声明被提升，但是初始化值并没有提升、打印a的值为undefined、说明有这个变量但是它没有值、没有声明的b直接报了错，说明变量的声明是会提升的但是变量的初始化不会提升

我们接着来看
```javascript
var fun=function(){
console.log("本事啦,我的弟");
}
fun();//本事啦,我的弟
```
显然没有任何问题，我们把声明和使用颠倒位置
```javascript
fun();
var fun=function(){
	console.log("本事啦,我的弟");//Uncaught TypeError: fun is not a function
}
```
我们发现报错了，但如果我们直接使用fun则会报一个"Uncaught ReferenceError: fun is not defined"的错误(和不声明fun报错是不一样的)，其实fun也是一个变量，只不过他是function(){console.log("本事啦,我的弟");}的一个引用，fun的声明被提升了，但是初始化没有被提升。

再给大家来一个比较有趣的关于提升的例子
```javascript
var a=1;
(function(){
	console.log(a);
	var a=2;
	console.log(a);
})();
```
大家认真的思考一下、打印结果是什么？
正确答案:undefined 2 大家应该想的是1,2 其实这个结果就是变量提升的原因
###词法作用域
在javascript中每个函数都有一个属于自己的词法作用域，在定义时而非执行时都会创建一个自己的作用域
```javascript
function fun1(){var a=1;fun2();}
function fun2(){return a;}
fun1();//Uncaught ReferenceError: a is not defined
```
大家应该想的是返回1吧，报错的原因是在fun2定义时(而非执行时)，a是不可见的，它只能访问自身作用域和全局作用域，如果大家还是不明白那么可以仔细想想 这句话 "在定义时而非执行时都会创建一个自己的作用域"
