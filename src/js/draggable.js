document.addEventListener('DOMContentLoaded',function() {

	const el = document.getElementsByClassName('js-draggable');

	const init = function(el) {

		for (let i = 0; i < el.length; i++) {
		
		    let initX, initY, firstX, firstY;
				
				el[i].addEventListener('mousedown', function(e) {
				
					e.preventDefault();
					initX = this.offsetLeft;
					initY = this.offsetTop;
					firstX = e.pageX;
					firstY = e.pageY;
				
					this.addEventListener('mousemove', dragIt, false);
				
					window.addEventListener('mouseup', function() {
						el[i].removeEventListener('mousemove', dragIt, false);
					}, false);
				
				}, false);
				
				el[i].addEventListener('touchstart', function(e) {
				
					e.preventDefault();
					initX = this.offsetLeft;
					initY = this.offsetTop;
					var touch = e.touches;
					firstX = touch[0].pageX;
					firstY = touch[0].pageY;
				
					this.addEventListener('touchmove', swipeIt, false);
				
					window.addEventListener('touchend', function(e) {
						e.preventDefault();
						el[i].removeEventListener('touchmove', swipeIt, false);
					}, false);
				
				}, false);
				
				function dragIt(e) {
					this.style.left = initX+e.pageX-firstX + 'px';
					this.style.top = initY+e.pageY-firstY + 'px';
				}
				
				function swipeIt(e) {
					var contact = e.touches;
					this.style.left = initX+contact[0].pageX-firstX + 'px';
					this.style.top = initY+contact[0].pageY-firstY + 'px';
				}
		}
	};
	
	el.length > 0 ? init(el) : false;
	
}, false)