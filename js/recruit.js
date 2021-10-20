$(function(){
    //heaer.htmlをインクルード
    $('.headerInclude').load('/recruit/header.html');

    //footer.htmlをインクルード
    $('.footerInclude').load('/recruit/footer.html');

    //スムーススクロール
    $('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
    });

    //コンテンツのスライドイン
    AOS.init()
})