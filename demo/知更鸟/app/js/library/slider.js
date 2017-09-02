/*
 * Created by likaixuan on 2017/8/31
 */
(function ($) {
	$.fn.slideBox = function (options) {
		var self = this;
		var slideClass = function (options) {
			var defaultOptions = {
				direction: 'left',//left,top
				duration: 0.6,//unit:seconds
				easing: 'swing',//swing,linear
				delay: 3,//unit:seconds
				startIndex: 0,
				hideClickBar: false,
				clickBarRadius: 5,//unit:px
				hideBottomBar: false,
				width: null,
				height: null,
			};
			this.options = $.extend(defaultOptions, options || {});

			this.eventMap = {
				'mouseover .tips i': this.onSwitch,
			};


			// 绑定元素到this上
			slidebox = $(self);
			this.slidebox = slidebox;//轮播容器
			this.itemBox = slidebox.find('ul');//轮播项容器
			this.items = this.itemBox.find('li'); //轮播项数组

			this.firstPicture = this.items.find('img').eq(0) //第一张图片

			var imgLoader = new Image();
			var that = this;
			imgLoader.onload = function () {
				imgLoader.onload = null;
				that.init();
			}
			imgLoader.src = this.firstPicture.attr('src');


		}

		slideClass.prototype = {
			constructor: slideClass,
			init: function () {
				this.setDefault().creatEl().bindEvent().start();

			},
			setDefault: function () {
				//设置参数
				var slidebox = this.slidebox,
					items = this.items,
					itemBox = this.itemBox,
					itemNum = items.size(),
					firstPicture = this.firstPicture;


				var options = this.options;
				this.index = options.startIndex;

				options.width = options.width || slidebox.width();
				options.height = options.height || items.eq(0).height();

				slidebox.css({ width: options.width + 'px' });
				items.css({ width: options.width + 'px' });

				itemBox.css('width', itemNum * options.width + 'px');


				//首选项
				this._setActive(this.index);

				return this;
			},
			creatEl: function () {
				var slidebox = this.slidebox,
					items = this.items;
				var options = this.options;
				var nums = $('<div class="nums"></div>').appendTo(slidebox);

				items.each(function (i, n) {
					var css = '';
					i == options.startIndex && (css = 'active');
					$('<i>').data('index', i).addClass(css).css('borderRadius', options.clickBarRadius + 'px').appendTo(nums);
				});

				return this;
			},
			bindEvent: function () {
				var self = this,
					slidebox = this.slidebox;

				self.numsMouseover = self.numsMouseover.bind(self);
				self.next = self.next.bind(self);
				self.prev = self.prev.bind(self);
				slidebox.find('.nums').on('mouseover', 'i', self.numsMouseover);
				slidebox.find('.next').on('click', self.next);
				slidebox.find('.prev').on('click', self.prev);
				// this.slidebox.hover(function () {
				// 	self.stop();
				// }, function () {
				// 	self.start();
				// });
				return self;
			},
			unbindEvent: function () {
				$('.nums').off('mouseover', this.numsMouseover);
				return this;
			},
			start: function () {
				var self = this;
				var slidebox = self.slidebox,
					itemBox = self.itemBox,
					itemsSize = self.items.size(),
					index = self.index;
				var options = self.options;

				var param = null,
					offset = 0;

				offset = index * options.width * -1;
				param = { 'left': offset + 'px' };

				self._setActive(index);
				itemBox.stop().animate(param, options.duration * 1000, options.easing, function () {
					self._setIndex(1);
				});
				slidebox.data('timerId', window.setTimeout(self.start.bind(self), options.delay * 1000));
				return self;
			},
			stop: function () {
				clearTimeout(this.slidebox.data('timerId'));
				return this;
			},
			_setActive: function (index) {
				var slidebox = this.slidebox,
					items = this.items,
					nums = slidebox.find('.nums i');
				nums.eq(index).addClass('active').siblings().removeClass('active');
				items.eq(index).addClass('active').siblings().removeClass('active');
			},
			_setIndex: function (i) {
				var itemsSize = this.items.size(),
					index = this.index;
				index += i;
				if (index < 0 || index === itemsSize) {
					this.index = 0;
				} else {
					this.index = index;
				}
			},
			prev: function () {
				var itemsSize = this.items.size();
				this._setIndex(-2);
				this.stop().start();
			},
			next: function () {
				this.stop().start();
			},
			numsMouseover: function (e) {
				//选择幻灯片
				var target = $(e.target);
				this.index = target.data('index');
				this._setActive(this.index);
				this.stop().start();

			}
		}
		new slideClass(options);
	}

})(jQuery);
