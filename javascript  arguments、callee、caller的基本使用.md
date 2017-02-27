# arguments、calle、caller基本使用

本文是作者的学习笔记、主要是给大家说说callee与caller的简单使用、有不足之处在所难免欢迎大家指正。


### arguments介绍

我们在使用javascript 函数(function)的过程中，往往会指定函数的参数(形参)

```javascript
function fun(f1){
	console.log(f1);		
}
```
也可以不指定函数的参数
```javascript
function fun(){
	console.log("hello 凯旋");
}
```
但其实javascript是不对函数传参个数进行语法检查的

```javascript
function fun(f1){
	console.log(f1);		
}
fun(); //undefined
```
我们并没有给fun传参、运行也没有任何的语法错误提示、只是告诉我们 undefined
如果一个函数有形参但是实际调用时没有传递参数那么也不影响程序运行、只是我们没法使用这个参数而已

但如果我们传递的参数多于形参呢？

```javascript
function fun(f1){
	console.log(f1);		
}
fun(1,2);  // 1
```
也不会有任何报错、只不过我们无法使用多出的参数而已

但其实javascript提供了一个对象、没错那就是arguments、我们先来使用它

```javascript
function fun(f1){
	console.log(f1);
	console.log(arguments[0]);
	console.log(arguments[1]);	
}
fun(1,2);  // 1 1 2
```
arguments和数组类似但不是数组、它保存着函数调用时传递过来的所有参数、下标从0开始顺序接收

一方更改也立即作用到另一方

```javascript
function fun(f1){
arguments[0]=5;
	console.log(f1);
	f1='hello';
	console.log(arguments[0]);
}
fun(1,2);  // 5 hello
```
arguments还可以帮助我们在javascript中实现函数重载
```javascript
function fun(f1) {
		if(arguments.length === 1) {
			console.log("我是一个参数的fun:"+arguments[0]);
		} else if(arguments.length === 2) {
			console.log("我是两个参数的fun:"+arguments[0]+arguments[1]);
		} else if(arguments.length === 3) {
			console.log("我是三个参数的fun:"+arguments[0]+arguments[1]+arguments[2]);
		} else{
			console.log("参数太多啦");
		}
				
}
fun(1,"kx");//我是两个参数的fun:1 kx
``` 
arguments对象不是一个Array、它类似于Array，但不具有除了length方法的任何方法，例如 sort方法、pop方法等
但它可以被转换为一个真正的Array(想要了解可以去自行查阅原型、call等方面的知识)：
```javascript
var arr = Array.prototype.slice.call(arguments);
```
### callee介绍
我们还可以用arguments来干什么呢？那我们就不得不提到callee了

callee是arguments对象的一个属性、用来指向当前执行的函数。
```javascript
function fun() {
	console.log(arguments.callee);
}
fun();//fun() { console.log(arguments.callee);}
```
返回的就是fun函数本身

我们还可以用它来验证传入的参数是否与形参相等
```javascript
function fun(fun1,fun2){
	if(arguments.length===arguments.callee.length){//function对象的length属性返回的是参数个数
		console.log("参数正确");
	} else{
		console.log("参数不正确");
	}
}
fun(1,1);
```
callee还可以用来递归调用匿名函数
```javascript
(function(){
	alert(1);
	arguments.callee();
})();
```
哈哈、这是一个死循环了
### caller介绍
接下来我们再来谈谈caller、直接用用看吧
```javascript
function fun1(){
console.log(arguments.callee.caller);
}
function fun2(){
	fun1();
}
fun1();
fun2();// null  function fun2() {fun1();}
```
caller是function对象的一个属性用于返回一个function引用、它返回调用它的function对象、若直接在全局环境下调用fun1 则返回null、在fun2里调用之后返回fun2、

本文完、若有错误欢迎指出