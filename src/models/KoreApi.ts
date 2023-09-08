import { AxiosInstance } from "axios";
import controlApi from "../api/config";
import { ApiResponse } from "../interfaces/koreIntentInterface";

const baseURL= 'https://bots.kore.ai/api/v1.1/rest/bot/st-9f0f6a67-ac59-525c-8be0-d1ad2387ff30/findIntent';

type Headers = {
    auth: string;
    [key: string]: any;
}

class KoreApi {

    public api: AxiosInstance;
    private headers: Headers;

    constructor(){
        this.api = controlApi(baseURL)
        this.headers = {
            "Content-Type": "application/json",
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJrb3JlYWkuYWRtaW5AdWVuby5jb20ucHkiLCJhcHBJZCI6ImNzLWViNWU1MTM4LTdmNjQtNWZlOS05ZWExLWFkMzAyNzdjZmFkNyJ9.mAq40zcIUeVobbHuLnVvgrY_x5cUq_8kNhzIeCHuWQA'
        }
        
    }

    async postDataFindIntent( input: string  ){
        const dataToSend = {
            input,
            streamName: "UENO Produccion"
        }
        const resp = await this.api.post<ApiResponse>('', dataToSend, {
            headers: this.headers
        });

        return resp.data.response.finalResolver.ranking[0].intent;
    }

}

export default KoreApi;