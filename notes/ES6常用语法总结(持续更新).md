## 参考- 
《ECMAScript 6入门》- 阮一峰
《全栈javascript教程》- 廖雪峰
《实战ES2015》- 小问
#### let  const
>具有块级作用域 且不存在变量提升 只能先声明后使用 而且不能重复声明

1  块外访问不到
```javascript
 {
     let a = 10;
     var b = 1;
 }
 a // ReferenceError: a is not defined.
 b // 1
```
2  如果使用let，声明的变量仅在块级作用域内有效，最后输出的是6。
```javascript
 var a = [];
 for (let i = 0; i < 10; i++) {
     a[i] = function () { 
         console.log(i);
     };
 }
 a[6](); // 6
```
3 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
```javascript
 var tmp = 123;
 if (true) {
     tmp = 'abc'; // ReferenceError
     let tmp;
  }
```
4 从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
```javascript
var a = 1;// 如果在Node的REPL环境，可以写成global.a// 或者采用通用方法，写成this.a
window.a // 1
let b = 1;
window.b // undefined
```
#### 解构赋值

1 两边模式相同，左边就可以顺序赋予相应值

```javascript
var [a,b]=[1,2];
console.log('a='+a+',b='+b); //a=1,b=2
//必须一一对应
var [,,test]=[1,2,3];
console.log('test='+test); //test=3
//这属于不完全解构，解构不成功返回undefined
var [a1,a2]=[1];
console.log('a1='+a1+',a2='+a2); //a1=1,a2=undefined
```
2 解构默认值

```javascript
//若右边少于左边 右边则按默认值，无默认值则是undefined
 var [x,y=2]=[1];
 console.log('x='+x+',y='+y); //x=1,y=2
//右边可以覆盖默认值
 var [c,d=5]=[3,4];
 console.log('c='+c+',d='+d); //c=3,d=4
//undefined不成功
 var [a,b=2]=[1,undefined];
 console.log('a='+a+',b='+b); //a=1,b=2
 var [i,j=2]=[1,null];
 console.log('i='+i+',j='+j); //i=1,j=null
```
3  默认值引用解构赋值变量
```javascript
 var [x=1,y=x]=[];
 console.log('x='+x+',y='+y); //x=1,y=1
//var因为存在变量提升但不提示初始化所以是undefined,若用let声明变量 因存在暂存性死区 则会报错
 var [a=b,b=1]=[];
 console.log('a='+a+',b='+b); //a=undefined,b=2
```
4 对象的解构赋值
```javascript
//对象解构属性顺序没有要求，但是变量名必须与属性同名
 var {a,b}={b:2,a:1};
 console.log('a='+a+',b='+2);
```
5  将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上
```javascript
var { log, sin, cos } = Math;
```
6.交换变量值
```javascript
var [x,y]=[y,x]
```
7.从函数返回多个值
```javascript
// 返回一个数组
function example() { 
    return [1, 2, 3];
}
    var [a, b, c] = example();
// 返回一个对象
function example() { 
    return { foo: 1, bar: 2 };
}
var { foo, bar } = example();
```
8.无序传参
```javascript
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);
// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
```
9.提取json数据
```javascript
var jsonData = {
 id: 42, status: "OK", data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
```

#### map  set  iterable
1 创建一个map
```javascript
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
```
2  map的一些方法
```javascript
    var m = new Map(); // 空
    Mapm.set('Adam', 67); // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam'); // 是否存在key 'Adam': true
    m.get('Adam'); // 67
    m.delete('Adam'); // 删除key 'Adam'
    m.get('Adam'); // undefined
```
3 若存在同样的key则后面的覆盖前面的
```javascript
 var m=new Map([['name','lkx'],['age',19],['age',18]]);
     console.log(m.get('age'));//18
```
4 创建set 
```javascript
var s1 = new Set(); // 空Setvar 
s2 = new Set([1,2,3,3]); // 含1, 2, 3 set会过滤重复的元素
```
5 set常用方法
```javascript
var s = new Set([1, 2, 3 ,'3',3]);
console.log(s);//Set {1, 2, 3, "3"}
s.delete(3);
console.log(s);//Set {1, 2,"3"}
s.add('lkx');
console.log(s);//Set {1, 2, "3", "lkx"}
```
6 for ...of遍历
```
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array 
    alert(x);
}
for (var x of s) { // 遍历Set 
    alert(x);
}
for (var x of m) { // 遍历Map 
    alert(x[0] + '=' + x[1]);
}
```

####  箭头函数

1.使用方法
```javascript
var f=v=>v;
//等同于
var f=function(v) {
    return v;
}

```
2.不需要参数，或者多个参数时候，用圆括号代表参数部分

```javascript
var f=()=>v;
//等同于
var f=function () {
    return v;
}

var f=(a,b)=>a;
//等同于
var f=function(a,b){
    return a;    
}
```
3.绑定作用域
```javascript
//普通写法 函数体内的this对象，是使用时所在的对象。
let obj1 = {
         msg: 'obj1',
         fun: function() {
	      return this.msg;
         }
    },
    obj2 = {
	    msg: "obj2"
    };
obj2.fun = obj1.fun;
var fun = obj1.fun;
console.log(obj1.fun()); //obj1
console.log(obj2.fun());//obj2
console.log(fun());//undefined
var msg = "window";	
console.log(fun()); //window
//绑定作用域的写法 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
let obj = {
          texts: 'hello world',
          fun: function () {
                return() => this.texts;
	       }
     },
    test = obj.fun();
 console.log(test());//hello world
```
5.绑定作用域会导致的问题
```javascript
let obj = {
	texts:"我是obj",
	fun:() => {
		return this.texts;
	}
};
console.log(obj.fun());//undefined
var texts = "我是window";
console.log(obj.fun());//我是window
```
4.使用注意点

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
( 5 ) 无法通过 apply 或 call 方法改变其上下文。

#### rest传参
rest和argument类似，不同的是rest变量其实就是一个数组，它可以用数组的各种方法
1.传参案例
```javascript
function fun(...args) {
	console.log(args);
}
fun("#111","#222","#333");// ["#111", "#222", "#333"]
```
2.rest变量前面可以有参数
```javascript
//错误示例
function fun(x,...args) {
	console.log(x);
	console.log(args);
}
fun("#111","#222","#333");
//#111
//["#222", "#333"]
```
3.rest变量后面不可以有参数
```javascript
//错误示例
function fun(...args,x) {
    console.log(args);
}
```
#### 扩展运算符
理解了rest传参再来理解扩展运算符就很简单了
直接上案例
1.简单使用
```javascript
function fun(x,y,z) {
	console.log(x);
	console.log(y);
}
fun(...["#111","#222","#333"]);//#111 #222
```
其实就是把一个数组转换为逗号分隔的变量序列
2.合并数组
```javascript
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [...arr1,...arr2];
console.log(arr3);//[1, 2, 3, 4, 5, 6]
```
3.配合解构赋值使用
```javascript
let [x,...test] = [1,2,3,4];
console.log(x);//1
console.log(test);//[2, 3, 4]
```
4.字符串转数组
```javascript
var str = [..."lkx"];
console.log(str);
```
需要注意的是如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
未完 待更 
　

　
