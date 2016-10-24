import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('portfolio', function() {
    this.route('avalon');
    this.route('reeltime');
    this.route('labit');
    this.route('syrup');
    this.route('music');
    this.route('recast');
    this.route('twitchvr');
    this.route('pocketmondex');
    this.route('other');
  });
  this.route('interests');
});

export default Router;
