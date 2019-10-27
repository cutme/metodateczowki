document.addEventListener('DOMContentLoaded',function() {
	
	const faq = document.getElementById('faq');

	const init = function() {
	
	    const trigger = faq.getElementsByClassName('js-item');

        const toggleAnswer = function(e) {
    	    
    	    if (this.classList.contains('is-visible')) {

    	        this.classList.remove('is-visible');
    	            	    
    	    } else {
        	    
        	    for (let i = 0; i < trigger.length; i ++) {
		    	    trigger[i].classList.remove('is-visible');
			    }
			    
        	    this.classList.add('is-visible');
    	    }
	    }


	    for (let i = 0; i < trigger.length; i ++) {
    	    trigger[i].addEventListener('click', toggleAnswer);
	    }
	};


	faq ? init() : false;


}, false);
