/*/parallax initialization
new universalParallax().init({
speed: 6.0
});*/

//init waves
Waves.init();
Waves.attach('.flat-icon', ['waves-circle']);
Waves.attach('.flat-icon-light', ['waves-circle','waves-light']);
Waves.attach('.float-icon', ['waves-circle', 'waves-float']);
Waves.attach('.float-icon-light', ['waves-circle', 'waves-float', 'waves-light']);
Waves.attach('.flat-buttons', ['waves-button']);
Waves.attach('.flat-buttons-light', ['waves-button','waves-light']);
Waves.attach('.float-buttons', ['waves-button', 'waves-float']);
Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
Waves.attach('.flat-box', ['waves-block']);
Waves.attach('.flat-box-light', ['waves-block','waves-light']);
Waves.attach('.float-box', ['waves-block', 'waves-float']);
Waves.attach('.float-box-light', ['waves-block', 'waves-float','waves-light']);
Waves.attach('.waves-image');


// init wow
wow = new WOW(
	{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
		}
	)
wow.init();
//aos init
//AOS.init({offset:0});
