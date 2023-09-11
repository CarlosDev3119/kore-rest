import { AxiosInstance } from "axios";
import controlApi from "../api/config";
import { TicketResponse } from "../interfaces/ticketsInterface";

const token = 'fc9b39aed3dfcfb767d5b0fb9ee97db7c955f853f010704b3d6a1f0e08408827';
const baseURL= 'https://soyueno.zendesk.com/api/v2/tickets';

type Headers = {
    Authorization: string;
}

class ZendeskTickets {

    public api: AxiosInstance;
    private headers: Headers;

    constructor(){
        this.api = controlApi(baseURL);
        this.headers = {
            Authorization: `Bearer ${token}`
        }
        
    }

    async postDataTickets( ticketID: string){

        const resp = await this.api.get<TicketResponse>(`/${ticketID}.json`, {
            headers: this.headers
        });
        
        const { description } = resp.data.ticket;
        return description;
    }

    async getDataByNumber( number: string){
        this.api = controlApi(`https://soyueno1694014071.zendesk.com/api/v2`)

        const resp = await this.api.get(`/search.json?query=phone:"+${number}"&include=users(identities)`, {
            headers: {
                Authorization: `Basic c29saWNpdGFudGUuYXBpQHVlbm8uY29tLnB5L3Rva2VuOndRTFhLWGYyNXZwTURSS1liS3JYMGVlYjJETmc2ODNuMHBKUDBiSTQ=` 
            }
        });
        
        // console.log(resp.data.results);
        // const { results } = resp.data;
        return resp.data.results;
    }

}

export default ZendeskTickets;