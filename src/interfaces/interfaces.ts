import { Application } from "express";


//class server interface

type pathRoute = {
    [key: string]: any
}

interface ServerProps {
    app: Application;
    port: string | number;
    paths: pathRoute;

    listen(): void;
    middlewares():void;
}


interface TicketAttributes {
    ticketID: string;
}

export {
    pathRoute,
    ServerProps,
    TicketAttributes
}