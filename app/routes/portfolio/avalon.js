import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		didTransition() {
			let mainWindow = document.getElementById('main');
			if (mainWindow) {
				mainWindow.scrollTop = 0;			
			}
		}
	}
});
