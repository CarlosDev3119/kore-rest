import { Request, Response } from "express";
import { handleServerError } from "../utils/response";
import { getDataById } from "../utils/data-panam";
import { generateDate } from "../plugins/date.plugin";
import moment from 'moment';


const getDataPanamById = async (req: Request, res: Response) => {


    const { id } = req.params;

    try{
        
        
        const data = getDataById(+id);
        if( data.length === 0 ) return res.status(404).json({ message: 'Data not found', data})
        
        const hourActual   = moment();
        
        if( data[0].status ){
            data[0].dateActual = generateDate(hourActual).getActualDate();
        }else{
            data[0].dateActual = generateDate(hourActual).getLastDate(2.5);
        }


        res.json({
            message: 'Data successfully',
            data
        });
        
    }catch( error ){

        return handleServerError( res, error);

    }

}



export {
    getDataPanamById,
    
}


