import Ember from 'ember';
import Posts from '../fixtures/posts';

export default Ember.Route.extend({
	model: function() {
		return Posts;
	}
});
