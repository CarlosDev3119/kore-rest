import express, { Application } from 'express';
import cors from 'cors';


import { ServerProps, pathRoute } from '../interfaces/interfaces';
import { panamericanRouter, ticketRouter } from '../routes';



class Server implements ServerProps{

    public app: Application;
    public port: string | number;
    public paths: pathRoute;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000
        this.paths = {
            tickets: '/sforcekore/tickets',
            panamerican: '/sforcekore/panamerican',

        }
        this.middlewares();

        this.routes();
    }

    // parse body and others middlewares 
    middlewares(){

        this.app.use( cors() );

        this.app.use( express.json() );

    }

    routes(){
        this.app.use( this.paths.tickets, ticketRouter );
        this.app.use( this.paths.panamerican, panamericanRouter );

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`listening on port: ${this.port}`)
        })
    }

}

export default Server;

