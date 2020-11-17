jQuery(document).ready(function(){
	var option={
			'speed':500, //속도
			'initTop':250, //기본 top 위치
			'alwaTop':false, //항상고정 true 이동 false
			'default_x':'#wrap',//레이아웃이 가운데 정렬일때 레이어가 붙는 아이디값_x->가로축
		}
		/*플로팅버튼*/
		$('#floatdiv').Floater(option);
			$('#btn01').click(function(){
				$('html,body').animate({scrollTop:$('#main').offset().top},800)
				
			})
			$('#btn02').click(function(){
				$('html,body').animate({scrollTop:$('#profile').offset().top},800)
				
			})
			$('#btn03').click(function(){
				$('html,body').animate({scrollTop:$('#webstd').offset().top},800)
				
			})
			$('#btn04').click(function(){
				$('html,body').animate({scrollTop:$('#jquery').offset().top},800)
				
			})
			$('#btn05').click(function(){
				$('html,body').animate({scrollTop:$('#response').offset().top},800)
				
			})	
			$('#btn06').click(function(){
				$('html,body').animate({scrollTop:$('#bstrap').offset().top},800)
				
			})	
			$('#btn07').click(function(){
				$('html,body').animate({scrollTop:$('#mobile').offset().top},800)
				
			})	
			$('#btn08').click(function(){
				$('html,body').animate({scrollTop:$('#design').offset().top},800)
				
			})	
	/*
	var contents=$('#contents > div')
	var btn=$('#floatdiv ul li')
	$(window).scroll(function(){
		var sct=$(window).scrollTop(); //top에서 얼마나 떨어졌는지를 확인해서 변수에 담는다.
		contents.each(function(){ //순환문 여러개돌릴때
			var tg=$(this) //this는 현재 스크롤 되는 contents
			var i=tg.index();
			if(tg.offset().top<=sct){
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
		})
		
	})
	*/
	var menu=$('.menuWrap>ul>li');
	var contents=$('#contents>div');
	var btn=$('#floatdiv ul li');
	
	menu.click(function(event){
		event.preventDefautl(); 
		var tg=$(this);
		var i=tg.index();
		var section = contents.eq(i);
		var tt=section.offset().top;
		$('html,body').stop().animate({scrollTop:tt});
	})
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		contents.each(function(){
			var tg=$(this);
			var i=tg.index();
			if(tg.offset().top<=sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
			
		})
	})
});
   