// mosaic.js
(function(){

$.fn.lunbotu = function(height , width , x , y , num_of_pics ,interval){
	//init
	var _this = this;
	$(_this).css({
		height:height+"px",
		width:width+"px",
		position:"relative",
		borderRadius: "3px",
		overflow :"hidden",
	});
	var X = x;
	var Y = y;
	var amount = x * y ;
	var cells = new Array(amount);
	var cellss = new Array(amount);
	var C = [cells,cellss];
	var one_x = width / x ;
	var one_y = height / y ;
	var controler = 0;
	while(x --){
		while(y --){
			cells[x * Y + y] = $("<div></div>");
			cellss[x * Y + y] = $("<div></div>");
			cellss[x * Y + y].css({
				height:one_y + "px",
				width:one_x + "px",
				background:"url(imgs/img2.jpg)",
				backgroundPosition: -(x*one_x)+"px" +" "+ -(y*one_y)+"px",
				backgroundSize: width+"px "+height+"px",
				position:'absolute',
				top:(y*one_y)+"px",
				left:(x*one_x)+"px",
				zIndex:99999
			}).appendTo(_this);
			cells[x * Y + y].css({
				height:one_y + "px",
				width:one_x + "px",
				background:"url(imgs/img1.jpg)",
				backgroundPosition: -(x*one_x)+"px" +" "+ -(y*one_y)+"px",
				backgroundSize: width+"px "+height+"px",
				position:'absolute',
				top:(y*one_y)+"px",
				left:(x*one_x)+"px",
				zIndex:100000
			}).appendTo(_this);
		}
		y = Y;
	}
	x = X;
	y = Y;
	//start
	var cur_id = 0 ;
	setInterval(function(){
		cur_id ++ ;
		cur_id %= 5 ;
		var A = amount;
		var time = 0;
			
		while(x --){
			while(y --){
				(function(x,y,time,controler){

					C[controler%2][x * Y + y].delay(time).animate({
						// height:'20px',
						// top:(y*one_y)/2 + "px",
						// left:(x*one_x)/2+"px"
						opacity:0

					},800,function(){
						$(this).css({
							background:"url(imgs/img"+((cur_id)%5+1)+".jpg)",
							backgroundPosition: -(x*one_x)+"px" +" "+ -(y*one_y)+"px",
							backgroundSize: width+"px "+height+"px",
							position:'absolute',
							opacity:1,
							zIndex:$(this).css('z-index')-2
						})
					});
					-function(){
						// debugger;
						C[(controler+1)%2][x * Y + y].css({
							background:"url(imgs/img"+(cur_id+1)+".jpg)",
							backgroundPosition: -(x*one_x)+"px" +" "+ -(y*one_y)+"px",
							backgroundSize: width+"px "+height+"px",
							position:'absolute'
						})	
					}();
				})(x,y,time,controler);
			time+=100;
			}
			y = Y;
		}
		x = X;
		controler++;	
	},interval);
}

})(jQuery);