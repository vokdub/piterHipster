document.addEventListener('DOMContentLoaded', function() {
	var slider = document.getElementById('slider');
	var startingX;
	var left;
	function startSwipe(evt){
		left = document.getElementById('slider').offsetLeft;
		startingX = evt.touches[0].clientX - left;

	};
	function moveSwipe(evt){
		var touch = evt.touches[0];
		var change = startingX - touch.clientX ;

		if (change < 0){
			slider.style.left = '-' + change + 'px';
		} 
		slider.style.left = '-' + change + 'px';
		evt.preventDefault();
	};
	function endSwipe(evt){ 
		var change = startingX - evt.changedTouches[0].clientX + left;
		var width = document.getElementById('img').offsetWidth;

		if (((change < width/3)&&(change > 0))||(( -change < width/3)&&(change < 0))) {
			slider.style.left = left + 'px';
			slider.style.transition = 'all .1s';
		}
		else{

			if ((change > 0)&&((-left < 3 * width - width/2)||(-left > 3 * width + width/2))){
				slider.style.transition = 'all .3s';
				slider.style.left = '-' + (- left + width) + 'px';

			}
			else{
				slider.style.transition = 'all .1s';
				slider.style.left = 0 + 'px';
			};
			if (change < 0){
				slider.style.transition = 'all .3s';
				slider.style.left = '-' + (- left - width) + 'px';

			};
		}			
	} 
}, false);