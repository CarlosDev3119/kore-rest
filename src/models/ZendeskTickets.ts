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

}

export default ZendeskTickets;