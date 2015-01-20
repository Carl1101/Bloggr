import Ember from 'ember';
import Posts from '../../fixtures/posts';

export default Ember.Route.extend({
	model: function(params) {
		Posts.findBy('id', params.post_id);
	}
});
