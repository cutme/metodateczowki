document.addEventListener('DOMContentLoaded',function() {

    const authorDetails = document.getElementsByClassName('js-authorDetails')[0];
	

    const authorDetailsInit = function() {    	
    	
    	let status = false,
    	    targetMobile = document.getElementsByClassName('js-authorDetailsMobile')[0],
    	    targetDesktop = document.getElementsByClassName('js-authorDetailsDesktop')[0];
  
    	const action = function(e) {
	    	
	    	let ww = window.innerWidth;

	    	if (ww <= 1024) {
		    	if (status === false) {

					cutme.Helpers.detach(authorDetails, targetMobile);
		        	status = true;
		        }
	        	
	        } else {
		        if (status === true) {

			        cutme.Helpers.detach(authorDetails, targetDesktop);
		        	status = false;
			    }
	        }
	    };
	    
        action();
        
        window.addEventListener('resize', cutme.Helpers.debounce(() => action(), 100, false));
    };

	
	authorDetails ? authorDetailsInit() : false;
    
    

}, false);
