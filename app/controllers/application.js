import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		toggleBar() {
			this.toggleProperty('isOpen');
		},
		toggleBarOn() {
			this.set('isOpen', true);
		},
		toggleBarOff() {
			this.set('isOpen', false);
		}
	}
});
