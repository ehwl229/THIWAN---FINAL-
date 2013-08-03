
	$(document).ready(function() {
            var p = $("#gallery").portfolio({
             	loop: true, // loop on/off
        		easingMethod: 'easeOutQuint', // other easing methods please refer: http://gsgd.co.uk/sandbox/jquery/easing/
        		height: '500px', // gallery height
        		width: '100%', // gallery width in pixels or in percentage
        		lightbox: false, // dim off other images, highlights only currently viewing image
        		logger: false // for debugging purpose, turns on/off console.log()
			});
            p.init();
    });
