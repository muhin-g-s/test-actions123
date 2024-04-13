import { createApp } from 'vue';
import axios, { AxiosResponse } from 'axios';

import { addToEnvironment, type IRuntimeEnvironment } from './environment';

import './style.css';
import App from './app-test.vue';

axios.get(`/environment.json?${new Date().getTime()}`).then(async (data: AxiosResponse<IRuntimeEnvironment>) => {
	addToEnvironment(data.data);
});
createApp(App).mount('#app');
