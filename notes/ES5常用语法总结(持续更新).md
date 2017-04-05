##参考- 
《javascript高级程序设计》
《javascript权威指南》
   MDN

####1 ES5 数组方法

>  大多数ES5数组方法第一个参数是一个函数，第二个参数是可选的，如果有第二个参数则第一个参数被看做是第二个参数的方法，也是说调用函数时传递进去的第二个参数作为它的this关键值（如果传this的话，需要注意一下箭头函数绑定作用域的问题）

######1. Array.prototype.forEach方法
```javascript
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) { 
// element: 指向当前元素的值
 // index: 指向当前索引
 // array: 指向Array对象本身 
alert(element);
});
//set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
//Map的回调函数参数依次为value、key和map本身：
```
> 高阶函数 **用函数做参数或返回一个函数。**

###### 2. Array.prototype.map
map是定义在array上的方法，map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
```javascript
function pow(x) { 
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
```
###### 3. Array.prototype.filter
filter是定义在array上的方法,filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素
 在一个Array中，删掉偶数，只保留奇数，可以这么写：
```javascript
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
 return x % 2 !== 0;
});
r; // [1, 5, 9, 15]
```
 把一个Array中的空字符串删掉，可以这么写：
```javascript
var arr = ['A', '', 'B', null, undefined, 'C', ' '];
var r = arr.filter(function (s) { 
return s && s.trim(); // 注意：IE9以下的版本没有trim()方法});
r; // ['A', 'B', 'C']
```
###### 4. Array.prototype.every
every方法是用来判断数组中所有的元素调用判断函数都返回true的时候它才返回true
```javascript
var arrT = [1,2,3,4,5,6,7],
    bool = arrT.every(function(v) {
    console.log(1);
    return v<10;
});
console.log(bool);
//7个1 一个true
//假设有一个元素条件不成立则遍历结束返回false
var arrF= [1,2,11,4,5,6,7],
    bool = arrF.every(function(v) {
    console.log(1);
    return v<10;
});
console.log(bool);
//3个1 一个false
```
###### 5. Array.prototype.some
some和every方法差不多，它是数组中有一个元素调用判断函数返回true时就返回true，若第一个条件真则停止遍历直接返回true
###### 6. Array.prototype.reduce
reduce方法使用指定的函数将数组元素进行组合，生成单个值
```javascript
    var arr = [1,2,3,4,5,6,7],
    bool = arr.reduce(function(x,y) {
        console.log(x);
        return x+y;
    });
    console.log(bool);
/*
1
 3
 6
10
15
 21
 28*/
```
>这个方法和其他方法有些不同，它第一个参数没什么变化还是一个函数，但此函数第一个参数为是目前为止累计的结果就如同上面的1、3、6·····，2~4 个参数对应之前的1~3 ：元素、元素索引、数组本身。此方法第二个参数也不是this了，而是累计结果的初始值不传的话默认为第一个元素、元素值为第二个元素。

###### 7. Array.prototype.reduceRight
它和reduceRight的区别是一个从左往右，一个从右往左算
###### 8. Array.prototype.indexOf
查询元素在数组的索引号，查不到返回-1，查到返回找到的第一个元素的索引
```javascript
var arr = [1,2,3,4,5,3,7];
console.log(arr.indexOf(3));
console.log(arr.indexOf(3,4));
//2 5
```
第二个参数用来指定在哪里开始搜索，不指定默认从头开始
###### 9. Array.prototype.lastIndexOf
和indexOf的区别是 一个从左边开始找、一个从右边
###### 10. Array.isArray
isArray是Array的一个静态方法它用来判断一个对象是不是数组
```javascript
//  案例来自mdn
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```
####2 ES5对象


###### 1.Object.keys
Object.keys接收一个参数，这个参数是一个对象，它返回一个数组，数组元素为对象（参数）自身的所有可枚举的属性名
```javascript
var obj = {a:"lkx",age:18};
console.log(Object.keys(obj));
//["a","age"]
```
###### 2.Object.getOwnPropertyNames
Object.getOwnPropertyNames和Object.keys方法类似、只不过它也会把不可枚举的属性返回
```javascript
var obj =["凯旋哥哥好帅呀！","是的呢！"];
console.log(Object.getOwnPropertyNames(obj));
//["0","1","length"]
```