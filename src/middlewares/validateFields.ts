import Ajv from "ajv";
import addFormats from 'ajv-formats';

import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const validateSchema = ( schema: Object ) => {

    return (req: Request, res: Response, next: NextFunction) => {

        const ajv = new Ajv( schema );
        addFormats(ajv);

        let validate = ajv.compile(schema);

        if( validate( req.body )){
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

const existIdChest = ( req: Request, res: Response, next: NextFunction ) => {

    const validateId = /^\d{5}$/.test(req.params.id);

    if( !validateId ){
        return res.status(400).json({
            msg: 'The id chest is invalid',
            data: [],
        })
    }

    next();
}


export {
    validateSchema,
    existIdChest
    
}