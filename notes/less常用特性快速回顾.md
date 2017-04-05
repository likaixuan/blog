# less快速回顾

之前学过less发现一段时间没用，就有点忘了，网上也不容易找到合适的教程，要么啰嗦，要么太生涩，于是自己总结了一下这些常用特性的代码，给学习过less的人进行快速回顾
#变量
```
编译前
@weight:300px;
.box{
    width:@weight;
    background:red;
}
编译后
.box {
  width:300px;
  background: red;
}
```

# 混合 
```
编译前
.box{
    width:100px;
    height:100px;
    background:red;
    .box-border;
  }
.box-border{
    border:solid 4px green;
}
编译后
.box {
  width: 100px;
  height: 100px;
  background: red;
  border: solid 4px green;
}
.box-border {
  border: solid 4px green;
}
```
 ### 带参数的混合
```
编译前
.box{
    width:100px;
    height:100px;
    background:red;
    .box-border(10px);
  }
/*调用时不传值 默认是20px*/
.box-border(@weigint:20px){
    border:solid @weight green;
}
编译后
.box {
  width: 100px;
  height: 100px;
  background: red;
  border: solid 10px green;
}

```
 ### arguments
```
编译前
.box {
  .border(solid,red,20px);
}
.border(@style,@color,@weight) {
  border:@arguments;

}
编译后
.box {
  border: solid red 20px;
}
```
### 匹配模式
```
编译前
.box{
    width:100px;
    height:100px;
    .back(y);
}

.back(r){
    background:red;
}
.back(b){
    background:blue;
}
.back(y){
    background:yellow;
}
编译后
.box {
  width: 100px;
  height: 100px;
  background: yellow;
}
```
### 运算
```
编译前
/*运算符前后都要有一个空格*/
@test:100px;
.box{
    width:@test - 20;
    height:@test;
    background:red;
}
编译后
.box {
  width: 80px;
  height: 100px;
  background: red;
}
```
### 避免编译
```
编译前
/*比如ie滤镜之类的可以用它 ~*/
.box{
    width:~'calc(300px - 30px)';
    background:red;
}
编译后
.box {
  width: calc(300px - 30px);
  background: red;
}
```
### !important
```
编译前
.box{
    width:~'calc(300px - 30px)';
    background:red;
    .border !important;
}
.border{
    border:1px solid green;
    height:200px;
}

编译后
.box {
  width: calc(300px - 30px);
  background: red;
  border: 1px solid green !important;
  height: 200px !important;
}
.border {
  border: 1px solid green;
  height: 200px;
}
```
### 嵌套规则
```
编译前
.content{
    a{
        color:red;
        &:hover{
            color:yellow;
        }
    }
    .left{
        float:left;
        background: green;
        .box{
            background:red;
        }
    }
}


编译后
.content a {
  color: red;
}
.content a:hover {
  color: yellow;
}
.content .left {
  float: left;
  background: green;
}
.content .left .box {
  background: red;
}
```
### 注释
//只会保留在less文件中，不会编译到css文件中
/**/ 会编译到css文件中
```
编译前
//我是两道杠
/*我是星杠*/
编译后
/*我是星杠*/
```
