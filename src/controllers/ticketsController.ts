import { Request, Response } from "express";
import ZendeskTickets from "../models/ZendeskTickets";
import { handleServerError } from "../utils/response";
import KoreApi from "../models/KoreApi";

interface TicketIdRequest {
    ticketID: string;
}

const getZendeskByTicket = async (req: Request, res: Response) => {

    const zendeskApi = new ZendeskTickets();
    const koreIntent = new KoreApi();

    try{
        
        const { ticketID } = req.body as TicketIdRequest;
        
        const description = await zendeskApi.postDataTickets(ticketID);

        const data = await koreIntent.postDataFindIntent(description);
          
        res.json({
            message: 'Data successfully',
            data
        });
        
    }catch( error ){

        return handleServerError( res, error);

    }

}

const getDataZendeskByNumber = async (req: Request, res: Response) => {
    const zendeskApi = new ZendeskTickets();
    const { number } = req.params;
   
    try{
        const data = await zendeskApi.getDataByNumber(number);
        if(data.length === 0) return res.status(404).json({ data: [], message: 'Data empty'})
        return res.json({
            data,
            message: 'Get Data successfully'
        })
    }catch(error){

    }

    
}

export {
    getZendeskByTicket,
    getDataZendeskByNumber
}


