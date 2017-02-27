Promise是异步编程的一种解决方案，可以帮助我们解决回调地狱的问题，网络上有很多这方面的教程，但都很晦涩难懂，本文尽可能让大家更容易的理解promise

ES6规定，Promise对象是一个构造函数，用来生成Promise实例。

### 基本使用
1.我们直接上代码，看看运行结果
```javascript
var Obj=new Promise(function(){
    console.log("hello 凯旋");
});
//hello 凯旋
```
Promise构造函数接受一个函数当做参数，而且创建后会立即执行这个函数 

2.有了对上面那些粗浅的认识，我们现在就可以完成一个回调的案例（这只是我的一个恶趣味（逃····）
 有三个方法t1、t2、t3 ，要求 t1执行完后执行t2，t2执行完后执行t3
```javascript
//正常来说是这样去做 t1(t2(t3))
```
```javascript
function t1(){
    console.log("老子是t1");
    return new Promise(t2);
}
function t2(){
    console.log("老子是t2");
    return new Promise(t3);
}
function t3(){
    console.log("老子是t3");
}
new Promise(t1);//依次执行 t1、t2、t3 
```
这个案例就是借助了 Promise创建后会立即执行这个特点 接下来我们开始正经的说说Promise

3.上面说了Promise构造函数接受一个函数当参数 也就是这样
```javascript
var Obj=new Promise(function(){});
```
但其实这个函数也接收两个参数
```javascript
var promise = new Promise(function(resolve, reject) {})
```
这两个参数分别是resolve和reject。它们是两个函数，这俩函数是JavaScript引擎提供的，不用咱们自己管。
那么他们是干啥的，我们看案例
```javascript
var promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("我是数据");
    },3000);
})
promise.then(function(data){
    console.log(data);
});
```
运行后发现 三秒后会打印 我是数据 那么这是咋回事呢 
 Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。
resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

上面的字好长啊，实际浓缩一下就是这样 我们调用 resolve这个方法的时候 就说明我们这个操作完成了 它会触发promise.then这个方法 这个方法实际上也有俩参数（可以只写一个），也是俩函数，第一个是 当执行resolve后 调用的，第二个是执行reject时候调用的， 这俩函数的参数就是调用resolve和reject时传过来的值

4.来看个案例吧 这么多字写的我也头疼
```javascript
var promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        reject("我是错误");
    },3000);
})
promise.then(function(data){
    console.log(data);
},function(error){
    console.log(error)
});
```
上面代码就会打印出 我是错误 
5.then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
```javascript
var promise = new Promise(function(resolve, reject) { 
    console.log('Promise'); resolve();
});
promise.then(function() { 
    console.log('Resolved.');
});
console.log('Hi!');
// Promise
// Hi!
// Resolved
```
6.then的链式操作 案例
```javascript

function t1() {
    var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("t1");
    }, 1000);
    });
    return promise;
}
function t2() {
    var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("t2");
    }, 1000);
    });
    return promise;
}
function t3() {
    var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("t3");
    }, 1000);
    });
    return promise;
}
t1().then(function(data) {
    console.log(data);
    return t2();
}).then(function(data) {
    console.log(data);
    return t3();
}).then(function(data) {
    console.log(data);
});
```
每一次调用then必须返回一个新的promise来实现这个链式调用
### catch
其实它和then的第二个参数一样，用来指定reject的回调
```javascript
function t1() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("出错了");
        }, 1000);
  });
  return promise;
}
t1().then(function(data) {
    console.log(data);
    return t2();
}).catch(function(error){
    console.log(error)
 }
);
我们没有指定reject回调的时候 就执行它 它还有个功能就是 假设我们执行了resolve的回调 里面出错了 它不会中断执行 而是进入catch 
```
### all与race

1.arr的基本使用
```javascript
function t1() {
    var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("t1");
    }, 1000);
    });
    return promise;
}
function t2() {
    var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("t2");
    }, 2000);
    });
    return promise;
}
function t3() {
    var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("t3");
    }, 3000);
    });
    return promise;
}
Promise.all([t1(), t2(), t3()]).then(function(results) {
    console.log(results);
});
//["t1", "t2", "t3"]
```
其实就是等所有的异步操作做完，才执行when 而且返回的是个数组(所有异步操作的)
race与all不同之处就是在于 谁先完成这个异步操作，谁就执行when操作 返回的是最先完成异步操作的