import axios from 'axios';

const baseURL= 'https://soyueno.zendesk.com/api/v2/tickets';

const controlApi = axios.create({
    baseURL
});

export default controlApi;
