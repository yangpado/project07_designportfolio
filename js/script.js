jQuery(document).ready(function(){
	/*글자쓰는 플러그인*/
	$('.ptitle').typed({
		strings:["뭐라고 쓸지 고민 쓰지말까요"],
		typeSpeed:150, //타이핑되는 시간
		backDelay:200, //재실행시 대기시간
		loop:true //연속재생
	})
	/*프로파일 롤링 1*/
	var work=$('.work>li'); //.work1,.work2,.work3 size0,size1,size2
	var currentWork=0;  //초기화를 위한 0 current:현재의
	setInterval(function(){ //시간마다 실행해주는 함수
		var prevW=work.eq(currentWork); //.work1~3 중 eq가 0번째인 요소
		movework(prevW, 0, '-100%'); //사용자정의함수 실행
		//현재보이는eq, 시작값(top), 끝나는값(top)
		currentWork++;	 //1씩 증가	

		if(currentWork==work.size()){currentWork=0;}
		/*만약에 currentWork가 1씩 증가하다 변수 work의 사이즈와 같으면
		currentWork에 0을 대입	*/
		var nextW=work.eq(currentWork);
		//nextW변수에 
		movework(nextW, '100%', 0);
	},3000);
	
	function movework(tg, start, end){
		tg.css('top', start).stop().animate({top:end},500);
	}
	//사용자정의함수 movework(setInterval 내의 movework에 전달할 값)
	//(tg,start,end)->(setInterval 내의 movework에 전달할 값)
	//(tg,start,end) ->(대상eq,start(top),end(top))
	
		/*프로파일 롤링 2*/
	var company=$('.company>li'); 
	var currentCompany=0;  
	setInterval(function(){ 
		var prevC=company.eq(currentCompany); 
		movecompany(prevC, 0, '-100%'); 
		currentCompany++;	

		if(currentCompany==company.size()){currentCompany=0;}
		var nextC=company.eq(currentCompany);

		movecompany(nextC, '100%', 0);
	},3000);
	
	function movecompany(tg, start, end){
		tg.css('top', start).stop().animate({top:end},500);
	}

	
	/*webstd*/
	//윈도우창에 스크롤 이벤트가 발생하면 실행
	$(window).scroll(function(){
		//변수sct에 스크롤의 위치값 담음
		var sct=$(window).scrollTop();
		//console.log(sct) 좌표값 확인용
		//console.log(webstd) =2104-150 150은 패딩값
		//변수webstd에 #webstd의 위치좌표 담음
		var webstd=$('#webstd').offset();
		//만약에 윈도우 스크롤이 #webstd의 위치 Top-150보다 크면
		if(sct>webstd.top-150){ //윈도우스크롤이 1954보다 크면
			//좌측요소는 left:10, 우측요소는 right:10
			$('.webstd_cont .webstd_left').stop().
			animate({left:'10px'},1000);
			$('.webstd_cont .webstd_right').stop().
			animate({right:'10px'},1000);
		}else{
			//만약에 윈도우 스크롤이 #webstd의 위치 Top-150보다 크지 않은 모든경우
			$('.webstd_cont .webstd_left').stop().animate({left:'-600px'},1000);
			//좌,우의 요소가 모두 화면밖으로 이동
			$('.webstd_cont .webstd_right').stop().animate({right:'-600px'},1000);
		}
	});
		$('.hidden').hover(
		function(){
				var ah=$(this).innerHeight();
				var img=$(this).find('img');
				var imgh=img.innerHeight();
				
				img.stop().animate({top:ah-imgh},3000);
		},function(){
				var img=$(this).find('img');
				img.stop().animate({top:0},6000)
		})
	
	/*jquery*/
	$(window).scroll(function(){
		
		var sct=$(window).scrollTop();
		var jquery=$('#jquery').offset();
		if(sct>jquery.top-150){
			$('.jquery_text_one').fadeIn(2000);
			$('.jquery_text_two').slideDown(2000);
		}
	});
		$('.hidden02').hover(
		function(){
				var ah=$(this).parent().innerHeight();
				//hidden02에는 heigt가 없고 그 부모태그에 heigt값이 있음
				var img=$(this).find('img');
				var imgh=img.innerHeight();
				
				img.stop().animate({top:ah-imgh},7000);
		},function(){
				var img=$(this).find('img');
				img.stop().animate({top:0},6000)
		})
	
	/*response*/
	//윈도우창에 스크롤 이벤트가 발생하면 실행
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var response=$('#response').offset();
		
		if(sct>response.top-150){ 
			$('.response_cont .response_left').stop().
			animate({left:'10px'},1000);
			$('.response_cont .response_right').stop().
			animate({right:'10px'},1000);
		}else{
			$('.response_cont .response_left').stop().animate({left:'-600px'},1000);
			//좌,우의 요소가 모두 화면밖으로 이동
			$('.response_cont .response_right').stop().animate({right:'-600px'},1000);
		}
	});
		$('.hidden').hover(
		function(){
				var ah=$(this).innerHeight();
				var img=$(this).find('img');
				var imgh=img.innerHeight();
				
				img.stop().animate({top:ah-imgh},3000);
		},function(){
				var img=$(this).find('img');
				img.stop().animate({top:0},6000)
		})	
	/*bstrap*/
	$(window).scroll(function(){
		
		var sct=$(window).scrollTop();
		var bstrap=$('#bstrap').offset();
		if(sct>bstrap.top-150){
			$('.bstrap_text_one').fadeIn(2000);
			$('.bstrap_text_two').slideDown(2000);
		}
	});
		$('.hidden02').hover(
		function(){
				var ah=$(this).innerHeight();
				//hidden02에는 heigt가 없고 그 부모태그에 heigt값이 있음
				var img=$(this).find('img');
				var imgh=img.innerHeight();
				
				img.stop().animate({top:ah-imgh},3000);
		},function(){
				var img=$(this).find('img');
				img.stop().animate({top:0},6000)
		})

		
	//design
	var menu=$('.tab_content ul li');
	menu.find('.hover').hide();
	menu.hover(function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		ti.fadeIn(300);
	},function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		ti.fadeOut(300);
		
	})
});
