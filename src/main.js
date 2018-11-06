// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './../src/store/index';
import utils from './utils/utils';
import VueBus from 'vue-bus';
import Raphael from 'raphael';
import {DataCenter} from './store/dataCenter'

Vue.use(elementUI);
Vue.use(VueBus);

window.Raphael = Raphael;

Vue.prototype.utils = utils;
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.directive('focus', {
	update: function (el, {value}) {
		if (value) {
			setTimeout(()=>{
				el.querySelector('input').focus();
			},100);
		}
	}
});
/* eslint-disable no-new */
let vue = new Vue({
    el: '#app',
	router,
	store,
    components: { App },
    template: '<App/>'
});

const dataCenter = new DataCenter(vue);

window.VM = vue;

Vue.prototype.dataCenter = dataCenter;
