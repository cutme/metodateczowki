import ScrollToPlugin from 'gsap/ScrollToPlugin';

document.addEventListener('DOMContentLoaded',function() {

    const btnGoTo = document.getElementsByClassName('js-goto');

	const speed_calculate = function (target) {
    	let base_speed  = 60,
    		page_offset = window.pageYOffset || document.documentElement.scrollTop,
        	offset_diff = Math.abs(target - page_offset),
        	speed = ((offset_diff * base_speed) / 1000)/600;

    	return speed;
	};
	
	const clickAction = function(e) {
	
	    const that = e.currentTarget;

	    let src = that.getAttribute('href');
	    
	    if (!src) {
	    
	        src = that.getElementsByTagName('a')[0].getAttribute('href');
        } 

	    const window_pos = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

	    const obj = document.getElementById( src.slice(1, src.length) );

	    if (obj) {
	        let offset = that.getAttribute('data-offset');
	        let transition = 0;

            if (!offset) {
                offset = 0;
            }
            
            document.body.removeAttribute('style');
	    
			if (!obj.classList.contains('anim--visible')) {
				transition = 50;
			}
			
	        let target = window_pos + obj.getBoundingClientRect().top - offset - transition;
	        cutme.Helpers.scrollTo(target, speed_calculate(target), offset);
	        
	    } else {
    	    
    	    window.open(src, '_self');
    	    
	    }
	    
        
        if (window.e) {
            window.e.returnValue = false;
        }
        
	    e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
	};
	
    if (btnGoTo.length > 0) {
        for (let i = 0; i < btnGoTo.length; i++) {
            btnGoTo[i].addEventListener('click', clickAction);
        }
    }

    
}, false);
