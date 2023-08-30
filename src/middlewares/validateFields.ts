import Ajv from "ajv";
import addFormats from 'ajv-formats';

import { NextFunction, Request, Response } from "express";

const validateSchema = ( schema: Object ) => {

    return (req: Request, res: Response, next: NextFunction) => {

        const ajv = new Ajv( schema );
        addFormats(ajv);

        let validate = ajv.compile(schema);

        if( validate( req.body ) ){
            next();
        }else{
            return res.status(400).json({ 
                errors: validate.errors?.map( ({params, instancePath, message}) => {
                    return {
                        param: params,
                        location: instancePath,
                        msg: message
                    }
                })
            })
        }

    }

}

export {
    validateSchema
}