$(function(){
	
	var winH = $(window).height();
	$('.mainvisual').outerHeight(winH);

	$(window).on('load',function(){
		setBgImg($('.fitImg'));
	});

	$(window).on('resize',function(){
		winH = $(window).height();
		$('.mainbisual').outerHeight(winH);
		setBgImg($('.fitImg'));
	});

	function setBgImg(object){
		var imgW = object.width();
		var imgH = object.height();

		var winW = $(window).width();
		var winH = $(window).height();  

		var scaleW = winW / imgW;
		var scaleH = winH / imgH;

		var fixScale = Math.max(scaleW, scaleH);

		var setW = imgW * fixScale;
		var setH = imgH * fixScale;

		var moveX = Math.floor((winW - setW) / 2);
		var moveY = Math.floor((winH - setH) / 2);

		object.css({
			'width': setW,
			'height': setH,
			'left' : moveX,
			'top' : moveY
		});     
	}
	
	var winH = $(window).height();
	$('.concept').outerHeight(winH);

	$(window).on('load',function(){
		setBgImg($('.conceptImg'));
	});

	$(window).on('resize',function(){
		winH = $(window).height();
		$('.concept').outerHeight(winH);
		setBgImg($('.conceptImg'));
	});

	function setBgImg(object){
		var imgW = object.width();
		var imgH = object.height();

		var winW = $(window).width();
		var winH = $(window).height();  

		var scaleW = winW / imgW;
		var scaleH = winH / imgH;

		var fixScale = Math.max(scaleW, scaleH);

		var setW = imgW * fixScale;
		var setH = imgH * fixScale;

		var moveX = Math.floor((winW - setW) / 2);
		var moveY = Math.floor((winH - setH) / 2);

		object.css({
			'width': setW,
			'height': setH,
			'left' : moveX,
			'top' : moveY
		});     
	}

	$('#nav-menu a').click(function(){
	var id = $(this).attr('href');
	var position = $(id).offset().top;
	$('html, body').animate({
	  'scrollTop': position 
	}, 500);
	});

	var pagetop = $('.pagetop');
	$(window).scroll(function () {
	   if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
	   } else {
			pagetop.fadeOut();
			}
	   });
	   pagetop.click(function () {
		   $('body, html').animate({ scrollTop: 0 }, 500);
			  return false;
	});

	var rwdMenu = $('#nav-menu'),
	switchPoint = 1199,
	slideSpeed = 400;

	var menuSouce = rwdMenu.html();

	$(window).load(function(){

	  function menuSet(){
		if(window.innerWidth < switchPoint){
		  if(!($('#rwdMenuWrap').length)){
			$('body').prepend('<div class="hamburger"><div id="switchBtnArea"><div id="logo"><a href="#mainvisual"><h1>Good Coffee</h1></a></div><a href="javascript:void(0);" id="switchBtn"></a></div><div id="rwdMenuWrap"></div></div>');
			$('#rwdMenuWrap').append(menuSouce);
			var switchBtn = $('#switchBtn'),
			btnRight = parseInt(switchBtn.css('right')),
			menuWrap = $('#rwdMenuWrap'),
			menuWidth = menuWrap.outerWidth();

			switchBtn.on('click', function(){
			  if($(this).hasClass('btnClose')){
				$(this).removeClass('btnClose').removeAttr('style');

				menuWrap.stop().animate({right:'-' + menuWidth + 'px'},slideSpeed);
				$('body').removeAttr('style');
			  } else {
				$(this).addClass('btnClose').css({position:'fixed'}).stop().animate({right:menuWidth + btnRight},slideSpeed);
				menuWrap.stop().animate({right:'0'},slideSpeed);
				$('body').css({position:'fixed'});
			  }
			});
		  }
		} else {
		  $('switchBtnArea,#rwdMenuWrap').remove();
		  $('body').removeAttr('style');
		}
	  }

	  $(window).on('resize', function(){
		menuSet();
	  });

	  menuSet();
	});

});// JavaScript Document