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

const getRutaPanamericano = (req: Request, res: Response) => {
    let data = [
        {
            "ruta": 14,
            "zonas": [
                "Mixcoac",
                "Coyoacan (Miguel Angel)",
                "Insurgentes"
            ],
            "fechasOriginales": "lunes, miércoles y viernes",
            "id": "1"
        },
        {
            "ruta": 15,
            "zonas": [
                "Pilares",
                "Narvarte"
            ],
            "fechasOriginales": "Martes y viernes",
            "id": "2"
        },
        {
            "ruta": 16,
            "zonas": [
                "Miguel Angel de Quevedo"
            ],
            "fechasOriginales": "viernes y sábado",
            "id": "3"
        }
    ]

    return res.json(
        data
    )
}

export {
    getZendeskByTicket,
    getRutaPanamericano
}


