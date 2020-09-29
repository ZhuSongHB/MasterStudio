import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from '../views/default.vue';
import showStudio from '../components/showStudio/index.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Default',
		component: Default,
	},
	{
		path: '/showStudio',
		name: 'showStudio',
		component: showStudio,
	},
];

const router = new VueRouter({
	routes,
});

export default router;
