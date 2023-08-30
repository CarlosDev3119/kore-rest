import { Request, Response } from "express";
import ZendeskTickets from "../models/ZendeskTickets";
import { handleServerError } from "../utils/response";

interface TicketIdRequest {
    ticketID: string;
}

const getZendeskByTicket = async (req: Request, res: Response) => {

    const zendeskApi = new ZendeskTickets();
    try{
        const { ticketID } = req.body as TicketIdRequest;
        
        const data = await zendeskApi.getDataTickets(ticketID);
          
        res.json({
            message: 'Get Data successfully',
            data
        });
        
    }catch( error ){

        return handleServerError( res, error);

    }

}

export {
    getZendeskByTicket
}


