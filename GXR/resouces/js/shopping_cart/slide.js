$(document).ready(function() {
	// 滑动设置
	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		// grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			autoplayDisableOnInteraction: false,
			clickable: true,
			// renderBullet: function(index, className) {
			// 	index=index + 1;
			// 	if(index<10){
			// 		index='0'+index;
			// 	}
			// 	return '<span class="' + className + '"><h5 class="bullet-font">' + index + '</h5></span>';
			// }
		}
	});
});
