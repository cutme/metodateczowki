document.addEventListener('DOMContentLoaded', function() {

	const el = document.getElementsByClassName('js-nts')[0];
 
	const init = function() {
	
		const trigger = el.getElementsByClassName('js-variantsTrigger')[0],
		      current = el.getElementsByClassName('js-current')[0];
			  variants = el.getElementsByClassName('js-variant'),
			  variantContent = document.getElementsByClassName('js-variantContent'),
			  plain = document.getElementsByClassName('js-plain'),
			  daily = document.getElementsByClassName('js-daily');
		
		const changeContent = function(e) {
			el.classList.remove('is-active');
			
			let target = e.currentTarget.getAttribute('data-target'),
			    title = e.currentTarget.innerHTML;
			
			for (let i = 0; i < variantContent.length; i ++) {
				variantContent[i].classList.add('is-hidden');
			}

			current.innerHTML = title;
			
/*
			
*/

			let obj = document.getElementsByClassName(target);
			
			for (let j = 0; j < obj.length; j ++ ) {
				obj[j].classList.remove('is-hidden');
			}
			
			//document.querySelectorAll('.js-plain').classList.remove('is-hidden');
		};
		
		for (let i = 0; i < variants.length; i ++) {
			variants[i].addEventListener('click', changeContent);			
		}
		
		const action = function() {
		
			if (el.classList.contains('is-active')) {
				el.classList.remove('is-active');
			} else {
				el.classList.add('is-active');
			}
			
		};
		
		trigger.addEventListener('click', action);
		
	};
        
    
    el ? init() : false;
    
}, false);
