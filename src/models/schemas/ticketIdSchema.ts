
import { JSONSchemaType } from 'ajv';
import { TicketAttributes } from '../../interfaces/interfaces';


export const TicketSchema: JSONSchemaType<TicketAttributes> = {

    type: "object",
    properties: {
        ticketID:{
            type: "string",
            minLength: 6,
            maxLength: 6,
            pattern: "^[0-9]+$"
        },
    },
    required: ["ticketID"]

}