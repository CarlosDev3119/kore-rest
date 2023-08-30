import { Router } from 'express';
import { validateSchema } from '../middlewares/validateFields';
import { TicketSchema } from '../models/schemas/ticketIdSchema';
import { getZendeskByTicket } from '../controllers/ticketsController';

const router: Router = Router();

router.post('/', [ validateSchema( TicketSchema )], getZendeskByTicket);


export {
    router as ticketRouter
}