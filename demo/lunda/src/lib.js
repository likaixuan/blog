/**
 * @author 李凯旋
 * @date 2017-04-10
 * 
 * 本地存储模块
 */
export const ls = {
	obj: window.localStorage || false,
	set: function(key, val) {
		var arr = {};
		if(!!this.obj) {
			if(Array.isArray(val)) {
				for(var item in val) {
					arr[item] = val[item];
				}
				val = "<array>" + JSON.stringify(arr);
			} else if(typeof val === "object") {
				//为对象设置标识
				val = "<json>" + JSON.stringify(val);
			}
			this.obj.setItem(key, val);
			return this.get(key);
		}
		return false;
	},
	get: function(key) {
		var result;
		if(!!this.obj) {
			result = this.obj.getItem(key);
			if(!result) {
				return false;
			}
			if(result.substr(0, 6) === "<json>") {
				//返回对象
				return JSON.parse(result.slice(6));
			} else if(result.substr(0, 7) === "<array>"){
				//返回数组
				var obj = JSON.parse(result.slice(7)),arr = [];
				for(var item in obj) {
					arr.push(obj[item]);
				}
				return arr;

			} else {
				//返回字符串
				return result;
			}
		}
		return false;
	},
	del: function(key) {
		if(!!this.obj) {
			this.obj.removeItem(key);
		}
	},
	add: function(objName, key, val) {
		var result = this.get(objName);
		if(!!result) {
			if(typeof result === "object") {
				result[key] = val;
			}
			return this.set(objName, result);
		} else {
			//不存在时创建
			this.set(objName,{[key]:val});
			return false;
		}
	}
};
/**
 * @author 李凯旋
 * @date 2017-05-29
 * 
 * 事件绑定
 */
export const eventBus = {
	list:{},
	on:function(type,fun) {
		//绑定事件与回调
		
		if(!this.list[type]) {
			this.list[type] = [];
		}
		this.list[type].push(fun)
		
	},
	off:function (type,fun) {
		//解除绑定

		var funArr = this.list[type];
	
		if(!funArr) {
			return false;
		}
		if(!fun) {
			this.list[type] = [];
		} else {
			for(var i = 0;i<funArr.length;i++) {
			if(fun === funArr[i]) {
				funArr.splice(i,1);
			}
		}
		}
	},
	emit:function (type) {
		//触发事件回调

		var funArr = this.list[type];
		if(!funArr) {
			return false;
		}
		var arr = Array.prototype.slice.call(arguments,1);
		for(var i = 0;i<funArr.length;i++) {
			funArr[i].apply(this,arr);
		}
		
	}
	
}

/**
 *
 @author meizz 
 *
 @date 2017-05-05
 * 
 * 日期格式化
 */
Date.prototype.Format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


export const animate = function (obj, json, fn) { // 给谁    json
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var flag = true; // 用来判断是否停止定时器   一定写到遍历的外面
			for(var attr in json) { // attr  属性     json[attr]  值

				var current = 0; //当前属性的值
				if(attr == "opacity") {
					if("opacity" in obj.style) // 判断 我们浏览器是否支持opacity
					{
						// obj.style.opacity 为小数，我们使用整数表示的百分比计算
						current = parseInt(getStyle(obj, attr) * 100);
					} else { // obj.style.filter = alpha(opacity = 30) 截取30

						var filter = getStyle(obj, "filter");
						if(filter == "") {
							current = 0;
						} else {
							var begin = filter.indexOf("=");
							var end = filter.lastIndexOf(")");
							current = filter.substring(begin + 1, end);
						}

					}
				} else {
					current = parseInt(getStyle(obj, attr)); // 数值
				}
				// 目标位置就是  属性值
				var step = (json[attr] - current) / 10; // 步长  用目标位置 - 
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				//判断透明度
				if(attr == "opacity") // 判断用户有没有输入 opacity
				{
					if("opacity" in obj.style) // 判断 我们浏览器是否支持opacity
					{
						// obj.style.opacity
						obj.style.opacity = (current + step) / 100;
					} else { // obj.style.filter = alpha(opacity = 30)

						obj.style.filter = "alpha(opacity = " + (parseFloat(current) + parseFloat(step)) + ")";

					}
				} else if(attr == "zIndex") {
					obj.style.zIndex = json[attr];
				} else {
					obj.style[attr] = current + step + "px";
				}

				if(current != json[attr]) // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
				{
					flag = false;
				}
			}
			if(flag) // 用于判断定时器的条件
			{
				clearInterval(obj.timer);

				if(fn) // 很简单   当定时器停止了。 动画就结束了  如果有回调，就应该执行回调
				{
					fn();
				}
			}
		}, 30)
	}
	
export const getStyle = function getStyle(obj, attr) {
				if(obj.currentStyle) // ie 等
				{
					return obj.currentStyle[attr]; // 返回传递过来的某个属性
				} else {
					return window.getComputedStyle(obj, null)[attr]; // w3c 浏览器
				}
			}