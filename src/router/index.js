// Modules
import { createRouter, createWebHistory } from 'vue-router';

// Component
import About from '@/views/About';
import Home from '@/views/Home';

// Definisikan route url
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
];

// Buat routernya
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
