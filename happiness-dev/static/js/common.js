export default {
	// 跳转
	// @params routeParams(Obj) 跳转参数(一旦传递后不变)
	// @params passedParams(Obj) 过程参数(每次跳转都会变)
	pageNavigation(url, type, routeParams, passedParams) {
		let animationType = '';
		switch (true) {
			case type == 1:
				animationType = 'slide-in-left';
				break;
			case type == 2:
				animationType = 'fade-in';
				break;
			case type == 3:
				animationType = 'slide-in-bottom';
				break;
			default:
				animationType = 'pop-in';
		}
		uni.navigateTo({
			url,
			animationType,
			routeParams: !!routeParams ? routeParams : {},
			// 提供了基于跳转过程的过程参数对象
			passedParams: !!passedParams ? routeParams : {}
		});
	},
	// 更新组件内数据
	updateComponentData(that, name, val) {
		that.$set(that, name, val)
	},
	// 精确乘法
	accMul(num1, num2) {
		var baseNum = 0;
		try {
			baseNum += num1.toString().split(".")[1].length;
		} catch (e) {}
		try {
			baseNum += num2.toString().split(".")[1].length;
		} catch (e) {}
		return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
	},
	// 精确除法
	accDiv(arg1, arg2) {
		var t1 = this.deal(arg1);
		var t2 = this.deal(arg2);
		var r1 = Number(arg1.toString().replace(".", ""))
		var r2 = Number(arg2.toString().replace(".", ""))
		return (r1 / r2) * Math.pow(10, t2 - t1);
	},
	// 精确加法
	accPlus(num1, num2) {
		var baseNum, baseNum1, baseNum2;
		try {
			baseNum1 = num1.toString().split(".")[1].length;
		} catch (e) {
			baseNum1 = 0;
		}
		try {
			baseNum2 = num2.toString().split(".")[1].length;
		} catch (e) {
			baseNum2 = 0;
		}
		baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
		return (num1 * baseNum + num2 * baseNum) / baseNum;
	},
	// 处理小数
	deal(arg) {
		var t = 0;
		try {
			t = arg.toString().split(".")[1].length
		} catch (e) {}
		return t;
	},
	// 全局监听事件注册
	global_watcher_regist(name, handle) {
		uni.$off(name);
		uni.$on(name, res => {
			handle(res)
		})
	},
	// 验证对象值是否全真
	// @params obj(Object) 需要判真的对象
	// @params show_err 是否返回第一个假keys
	isObjectAllGreenLight(obj, show_err) {
		let arr = Object.values(obj);
		let flag = arr.every(item => item == true);
		if (show_err) {
			let arr2 = Object.keys(obj);
			let index = arr.findIndex(item => item == false);
			return {
				flag,
				err: arr2[index]
			}
		} else {
			return flag;
		}
	},
	// 创建联合请求任务(当有一个任务出错时，将返回报错任务)
	// @params taskGroup(Array) 请求任务参数联合
	// @params taskList(Array) 请求任务集合
	// @params has_error(Object) 是否有请求错误
	// @params responseGroup(Array) 处理函数
	// @params that(Object) 执行上下文
	// @params expection(Array) 期望的响应码code
	// @params all_fitable 是否都符合预期
	// @return result(Object) 请求任务结果
	async createIntegrationTask(taskGroup, expection, that, responseGroup) {
		let taskList = [];
		for (let item of taskGroup) {
			let [error, res] = await uni.request({
				url: item.url,
				method: !!item.method ? item.method : 'GET',
				data: !!item.data ? item.data : {},
				header: !!item.header ? item.header : {},
				dataType: !!item.dataType ? item.dataType : '',
			});
			taskList.push({
				error,
				res
			})
		}
		let result = null;
		let has_error = taskList.find(item => !!item.error == true)
		let pre_result = has_error ? has_error : taskList.map(item => item = item.res);

		if (pre_result.error) {
			result = pre_result;
			// failed
			responseGroup[1].handle().call(that, result)
		} else {
			let all_fitable = pre_result.every((item, index) => item.data.code == expection[index])
			if (all_fitable) {
				result = pre_result.map(item => item = {
					res: item.data.data
				})
				// success
				responseGroup[0].handle().call(that, result)
			} else {
				let code = pre_result.map(item => item = item.data.code)
				result = {
					attention: `期望:${[...expection]},结果:${[...code]}`
				}
				responseGroup[1].handle().call(that, result)
			}
		}
		// finished
		responseGroup[2].handle().call(that)
	},
	// 创建请求任务
	// @params url(String) 请求地址
	// @params method(String) 请求方法
	// @params data(Object) 传参
	// @params header(Object) 请求头
	// @params dataType(String) 指定接收数据类型
	// @callback successs 成功回调
	// @callback fail 成功回调
	// @callback complete 成功回调
	// @return 请求任务对象
	createRequestTask({
		url = '',
		method = 'GET',
		data = {},
		header = {},
		dataType = '',
		success = function() {},
		fail = function() {},
		complete = function() {}
	} = {}) {
		let task = uni.request({
			url,
			method,
			data,
			header,
			dataType,
			success: (res) => {
				success(res)
			},
			fail: (err) => {
				fail(err)
			},
			complete: () => {
				complete()
			}
		});
		return task;
	},
	// 中止请求
	// @params arr(Array) 请求任务列表
	abortAllRequestTask(arr) {
		arr.forEach(item => {
			if (!!item) item.abort();
		})
	},
	// 请求处理
	// @params that(Object) 页面上下文
	// @params args(Array) 指定code匹配成功附带参数
	// @params arr(Array) 指定数据结构响应处理函数数组
	// @params res(Object) 服务器返回数据
	// @params duration(String) modal自动消失间隔
	// @params position(String) modal显示位置(center,top,bottom)
	// @params err_args(Array) 失败附带参数 
	requestResponse(that, args, arr, res, duration, position, err_args) {
		args = args || [];
		err_args = err_args || [];

		let code_list = arr.map(item => item = item.code);
		let index = code_list.findIndex(item => item == res.data.code);
		let func = null;
		let branch = null;
		let options = null;

		if (index != -1) {
			branch = index;
			options = args.concat(res);

		} else {
			plus.nativeUI.toast(res.data.msg, {
				duration,
				verticalAlign: position
			});

			let err_handle = code_list.findIndex(item => item == -1);
			if (err_handle == -1) return;

			branch = err_handle;
			options = err_args.concat(res);
		}

		func = arr[branch].handle()
		func.apply(that, options)
	},
	// 发送验证码
	// @params timer 定时器
	// @params container(Object) 文字显示绑定数据对象
	// @params name(String) 文字显示绑定数据对象变量
	// @params countdown(Number) 倒计时秒数
	// @function cb 额外执行函数
	sendCAPTCHA(timer, container, name, countdown, cb) {
		cb = cb || function() {};
		if (!!timer) {
			return;
		} else {
			timer = setInterval(() => {
				countdown--;
				if (countdown > 0) {
					this.$set(container, name, `${countdown}s后重发`)
				} else {
					this.$set(container, name, `发送验证码`)
					clearInterval(timer)
					timer = null;
					// 倒计时
					countdown = 60;
				}
			}, 1000)
		}
		cb()
	},
	// 返回首页
	// @params pageIndex(String&Number) tabbar页面索引
	// @params sendData(obj) 返回数据
	// @params desc(String) 备注
	backToTabbarPage(pageIndex, sendData, desc) {
		desc = desc || '';
		uni.navigateBack({
			animationType: 'fade-out',
			delta: getCurrentPages().length - 2
		});
		uni.$emit('tabbarPageReturnData', {
			page: pageIndex,
			data: sendData,
			msg: desc
		})
	},
	// 获取图片
	// 参数参考官方
	fetchImage({
		count = 1,
		sizeType = ['original', 'compressed'],
		extension = [],
		sourceType = ['album', 'camera']
	} = {}) {
		return new Promise((resolve, reject) => {
			uni.chooseImage({
				count,
				sizeType,
				sourceType,
				success: function(res) {
					resolve(res)
				},
				fail: function(err) {
					reject(err)
				}
			});
		})
	},
	// 上传图片
	// 参数参考官方
	uploadImage({
		url = '',
		filePath = '',
		name = '',
		formData = {},
		success = function() {},
		fail = function() {},
		complete = function() {}
	} = {}) {
		let task = uni.uploadFile({
			url,
			filePath,
			name,
			formData,
			// res.data会变成json字符串
			success: (res) => {
				res = {
					data: JSON.parse(res.data)
				};
				success(res)
			},
			fail: (err) => {
				fail(err)
			},
			complete: () => {
				complete()
			}
		});
	},
	// 刷新结果
	refreshOver(flag, status, cb) {
		cb = cb || function() {}
		if (!flag) return;
		if (status) {
			plus.nativeUI.toast('刷新成功');
		} else {
			plus.nativeUI.toast('刷新失败');
		}
		cb()
	},
	// 弹出全局弹框
	showGlobalPopUpWindows(url, animations, duration, cb) {
		cb = cb || function() {}
		const subNVue = uni.getSubNVueById(url)
		subNVue.show(!!animations ? animations : 'fade-in', !!duration ? duration : 250, () => {
			cb()
		});
	},
	// 设置状态栏主题色
	// @params type(Boolean)颜色主题 true 深色 false 浅色
	setStatusBarColor(type){
		let color = type?'dark':'light';
		// 状态栏主题
		plus.navigator.setStatusBarStyle(color);
	},
	// 保存图片
	// @params filePath(String) 本地路径或临时路径
	savePicToAlbum(platform,filePath,cb) {
		plus.nativeUI.showWaiting()
		cb = cb ||function(){}
		if(platform=='ios'){
			uni.getImageInfo({
				src: filePath,
				success: function(image) {
					console.log(image)
					uni.saveImageToPhotosAlbum({
						filePath: image.path,
						success: function(res) {
							plus.nativeUI.toast('已保存到相册');
							cb()
						},
						fail:function(){
							plus.nativeUI.toast('保存失败');
						},
						complete:function(){
							plus.nativeUI.closeWaiting();
						}
					});
				},
				fail:function(){
					plus.nativeUI.toast('获取图片信息失败');
					plus.nativeUI.closeWaiting();
				}
			});
		}
		else{
			uni.downloadFile({
			    url: filePath,
			    success: (res) => {
			       uni.saveImageToPhotosAlbum({
			       	filePath: res.tempFilePath,
			       	success: function(res) {
			       		plus.nativeUI.toast('已保存到相册');
			       		cb()
			       	},
			       	fail:function(){
			       		plus.nativeUI.toast('保存失败');
			       	},
			       	complete:function(){
			       		plus.nativeUI.closeWaiting();
			       	}
			       });
			    },
				fail: () => {
					plus.nativeUI.toast('保存失败');
				}
			});
		}
	}

}
