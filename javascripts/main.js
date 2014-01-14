// 锚点(Anchor)间平滑跳转
// 转换为数字
function intval(v)
{
v = parseInt(v);
return isNaN(v) ? 0 : v;
}
// 获取元素信息
function getPos(e)
{
	var l = 0;
	var t  = 0;
	var w = intval(e.style.width);
	var h = intval(e.style.height);
	var wb = e.offsetWidth;
	var hb = e.offsetHeight;
	while (e.offsetParent){
		l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);
		t += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0);
		e = e.offsetParent;
	}
	l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);
	t  += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0);
	return {x:l, y:t, w:w, h:h, wb:wb, hb:hb};
}
// 获取滚动条信息
function getScroll(){
var t, l, w, h;
if (document.documentElement && document.documentElement.scrollTop) {
	t = document.documentElement.scrollTop;
	l = document.documentElement.scrollLeft;
	w = document.documentElement.scrollWidth;
	h = document.documentElement.scrollHeight;
} else if (document.body) {
	t = document.body.scrollTop;
	l = document.body.scrollLeft;
	w = document.body.scrollWidth;
	h = document.body.scrollHeight;
}
return { t: t, l: l, w: w, h: h };
}
// 锚点(Anchor)间平滑跳转
function scroller(el, duration){
	if(typeof(el) != 'object'){ 
		el = document.getElementById(el); 
	}
	if(!el) return;
	var z = this;
	z.el = el;
	z.p = getPos(el);
	z.s = getScroll();
	z.clear = function(){
		window.clearInterval(z.timer);
		z.timer=null
	};
	z.t=(new Date).getTime();
	z.step = function(){
		var t = (new Date).getTime();
		var p = (t - z.t) / duration;
		if (t >= duration + z.t) {
			z.clear();
			window.setTimeout(function(){z.scroll(z.p.y, z.p.x)},13);
		} else {
			st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.y-z.s.t) + z.s.t;
			sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.x-z.s.l) + z.s.l;
			z.scroll(st, sl);
		}
	};
	z.scroll = function (t, l){
		window.scrollTo(l, t)
	};
	z.timer = window.setInterval(function(){z.step();},13);
}

//画圆环
function drawRing(id,r){
	//jquery元素选择器选择多有类名=ring的canvas标签
	$(id).each(function() {
		//jquery去空格函数
		var text = $.trim($(this).text());     
        // 一个canvas标签
		var canvas = this;
        // 拿到绘图上下文,目前只支持"2d"
		var context = canvas.getContext('2d');
		// 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了
		context.clearRect(0, 0, r, r);
		
		// 开始画一个灰色的圆
		context.beginPath();
      	// 坐标移动到圆心
		context.moveTo(r/2, r/2);
        // 画圆,圆心是r/2,r/2,半径r/2,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
		context.arc(r/2, r/2, r/2, 0, Math.PI * 2, false);
		context.closePath();
        // 外圈画完

		//内圆于外圆之间的部分
		drawArc(context,r/2,r/2,r/2,0.0*Math.PI,Math.PI * 2 * 33 / 100,'#CC3333')
		drawArc(context,r/2,r/2,r/2,0.66*Math.PI,Math.PI * 2 * 66 / 100,'#003366')
		drawArc(context,r/2,r/2,r/2,1.32*Math.PI,Math.PI * 2 * 100 / 100,'#FFCC00')
		// 画内部空白
		drawArc(context,r/2,r/2,21,0,Math.PI * 2,'#E6E6E6');
		// 画内圆
		drawArc(context,r/2,r/2,30,0,Math.PI * 2,'#E6E6E6');

        //在中间写字
	    context.font = "bold 15pt Arial";
	    context.fillStyle = 'black';
	    context.textAlign = 'center';
	    context.textBaseline = 'middle';
	    context.moveTo(r/2, r/2);
	    context.fillText(text, r/2, r/2);
}
);
}

//画圆环
function drawBigRing(id,r){
	//jquery元素选择器选择多有类名=ring的canvas标签
	$(id).each(function() {
		//jquery去空格函数
		var text = $.trim($(this).text());     
        // 一个canvas标签
		var canvas = this;
        // 拿到绘图上下文,目前只支持"2d"
		var context = canvas.getContext('2d');
		// 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了
		context.clearRect(0, 0, r, r);
		
		// 开始画一个灰色的圆
		context.beginPath();
      	// 坐标移动到圆心
		context.moveTo(r/2, r/2);
        // 画圆,圆心是r/2,r/2,半径r/2,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
		context.arc(r/2, r/2, r/3, 0, Math.PI * 2, false);
		context.closePath();
        // 外圈画完

		//内圆于外圆之间的部分
		drawArc(context,r/2,r/2,r/2.5,0,Math.PI * 2 * 10 / 100,'#00c09e')
        drawArc(context,r/2,r/2,r/2.5,0.2*Math.PI,Math.PI * 2 * 30 / 100,'#003366')
        drawArc(context,r/2,r/2,r/2.5,0.6*Math.PI,Math.PI * 2 * 50 / 100,'#FFCC00')
        drawArc(context,r/2,r/2,r/2.5,1*Math.PI,Math.PI * 2 * 90 / 100,'#333333')
        drawArc(context,r/2,r/2,r/2.5,1.8*Math.PI,Math.PI * 2 * 100 / 100,'#CC3333')


		// 画内部空白
		drawArc(context,r/2,r/2,105,0,Math.PI * 2,'#E6E6E6')
		// 画内圆
		context.beginPath();
		context.arc(r/2, r/2, 38, 0, Math.PI * 2, true);
		context.closePath();
        // 与画实心圆的区别,fill是填充,stroke是画线
		context.fillStyle = '#E6E6E6';
		context.fill();
		// context.strokeStyle = 'yellow';  
  		//context.stroke();
		
        //在中间写字
	    context.font = "bold 20pt Arial";
	    context.fillStyle = 'black';
	    context.textAlign = 'center';
	    context.textBaseline = 'middle';
	    context.moveTo(r/2, r/2);
	    context.fillText(text, r/2, r/2);
}
);
}


//画柱状图
function drawBar(id,str1,str2,str3,str4,str5,str6,color1,color2){
	//jquery元素选择器选择多有类名=ring的canvas标签
	$(id).each(function() {
        // 一个canvas标签
		var canvas = this;
        // 拿到绘图上下文,目前只支持"2d"
		var context = canvas.getContext('2d');
		// 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了
		context.clearRect(0, 0, 500, 500);

  		drawRect(context,100,0,650,25,color1)
  		drawRect(context,100,45,500,25,color2)
  		drawRect(context,100,90,450,25,color1)
  		drawRect(context,100,135,350,25,color2)
  		drawRect(context,100,180,300,25,color1)
  		drawRect(context,100,225,200,25,color2)
		
	    drawWord(context,90,10,str1)
	    drawWord(context,90,55,str2)
	    drawWord(context,90,100,str3)
	    drawWord(context,90,145,str4)
	    drawWord(context,90,190,str5)
	    drawWord(context,90,235,str6)
	    
}
);
}

function drawArc(context,x,y,radius,start,end,color){
	context.beginPath();
	context.moveTo(x, y);
	context.arc(x, y, radius, start, end, false);
	context.closePath();
	context.fillStyle = color;
	context.fill();

}
function drawRect(context,x,y,w,h,color){
	context.beginPath();
	context.rect(x,y,w,h);
	context.fillStyle = color;
	context.fill();
	context.closePath();
}
function drawWord(context,x,y,value){
    // 在左侧写入模块名
    context.font = "bold 14pt Arial";
    context.fillStyle = 'black';
    context.textAlign = 'end';
    context.textBaseline = 'middle';
    context.fillText(value, x, y);
}
