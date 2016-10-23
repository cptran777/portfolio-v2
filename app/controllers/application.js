import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		toggleBar() {
			this.toggleProperty('isOpen');
		}
	}
});
