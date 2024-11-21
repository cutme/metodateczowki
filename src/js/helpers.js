import { TweenLite, ScrollToPlugin } from "gsap/all";
const scrollPlugin = ScrollToPlugin;
 
(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
	        debounce: debounce,
	        detach: detach,
        	isInView: isInView,
        	scrollTo: scrollTo,
        	setInputFilter: setInputFilter
        };
    };
    
    const debounce = (func, wait, immediate) => {
	    var timeout;
	    return () => {
	        const context = this, args = arguments;
	        const later = function() {
	            timeout = null;
	            if (!immediate) func.apply(context, args);
	        };
	        const callNow = immediate && !timeout;
	        clearTimeout(timeout);
	        timeout = setTimeout(later, wait);
	        if (callNow) func.apply(context, args);
	    };
	};
    
	const detach = function(node, target) {
		let parent = node.parentNode;
		let next = node.nextSibling;
	
		if (!parent) { return; }
		
		parent.removeChild(node);	// Detach node from DOM.		
		target.append(node, next);	// Append
	};
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
    
    const scrollTo = function (target, speed, offset) {    
		TweenLite.to(window, speed, {
			scrollTo: {
				y: target - offset,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};
    
  
    
    // Restricts input for the given textbox to the given inputFilter.
    const setInputFilter = function(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            textbox.addEventListener(event, function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        });
    };

    cutme.Helpers = new Helpers();



	// Remove Topbar

    (function() {
	    
	    const topbar = document.getElementById('topbar');
	    
	    const init = function() {
		    
		    const close = topbar.getElementsByClassName('js-close')[0];
		    
		    close.addEventListener('click', function() {
			   
			   topbar.classList.add('is-out');
			    
		    });
	    };
	    
	    topbar ? init() : false;
	    
    })();



    
    // Filter inputs
    
    (function() {
    
        const digits = document.getElementsByClassName('js-digits');

        const digitsOnly = function() {
            for (let i = 0; i < digits.length; i ++) {
                setInputFilter(digits[i], function(value) {
                    return /^\d*\.?\d*$/.test(value);
                });
            }
        };

        digits ? digitsOnly() : false;
    
    })();
    
    
    
    

}(window, document, window.cutme = window.cutme  || {}));