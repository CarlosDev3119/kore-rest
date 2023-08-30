import { Response } from 'express';

export const handleServerError = ( res: Response, error: unknown) => {

    return res.status(500).json({
        message: 'Something goes wrong, contact the administrator',
        error: error
    })
}