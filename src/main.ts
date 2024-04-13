import { createApp } from 'vue';
import axios, { AxiosResponse } from 'axios';

import './style.css';
import { addToEnvironment, type IRuntimeEnvironment } from './environment';
// import { BASE_URL } from './constants';

import App from './app-test.vue';

axios.get('/environment.json').then(async (data: AxiosResponse<IRuntimeEnvironment>) => {
	addToEnvironment(data.data);
	console.log(data.data);
});
console.log('fff');

console.log(import.meta.env.BASE_URL);
console.log(import.meta.env.PROD);

createApp(App).mount('#app');
