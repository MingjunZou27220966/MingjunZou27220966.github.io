$(document).ready(function(){
	

  
	var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width();
	var slideHeight = $('.slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.slider').css({ width: slideWidth, height: slideHeight });
	
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.slider ul li:last-child').prependTo('.slider ul');

    function moveLeft() {
    	$('.news').removeClass('show');

        $('.slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
            
        });

    };

    function moveRight() {
    	$('.news').removeClass('show');

        $('.slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();

    });

    $('a.control_next').click(function () {
        moveRight();
            });



    // edit click button

	$('.slider-australia').click(function(){
		$('.news').removeClass('show');
		$('.australian').addClass('show');
	});

	$('.slider-korea').click(function(){
		$('.news').removeClass('show');
		$('.korean').addClass('show');
	});

	$('.slider-china').click(function(){
		$('.news').removeClass('show');
		$('.chinese').addClass('show');
	});

	$('.slider-hongkong').click(function(){
		$('.news').removeClass('show');
		$('.hongkong').addClass('show');
	});










})