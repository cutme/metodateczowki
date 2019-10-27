import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const opinions = document.getElementById('opinionsCarousel');
   
    const opinionsCarousel = function() {
	    
	    let current = opinions.getElementsByClassName('js-current')[0],
	    	all = opinions.getElementsByClassName('js-all')[0],
	    	all_length = opinions.getElementsByClassName('js-item').length;
	    	
    
        const glide = new Glide(opinions, {
            type: 'carousel',
            animationDuration: 600,
            autoplay: false,
            hoverpause: true,
            gap: 0,
        })
        
        setTimeout(function() {
            glide.mount();
        }, 1000)
        

	        glide.on('move.after', function(event) {
            let index = glide.index + 1;
            
            if (index < 10) {
            	current.innerHTML = '0' + index;
            } else {
	            current.innerHTML = index;
            }
        });

        if (all_length < 10) {
	        all.innerHTML = '0' + all_length;
	    } else {
		    all.innerHTML = all_length;
	    }
    };
        

    opinions ? opinionsCarousel() : false;

}, false)