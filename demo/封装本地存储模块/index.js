	/**
			 * @file 本地存储模块
			 * @author 李凯旋
			 * @date 2017-04-10
			 */
			var lsLib = {
				obj: window.localStorage || false,
				set: function(key, val) {
					if(!!this.obj) {
						if(typeof val === "object") {
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
						return false;
					}
				}
			};