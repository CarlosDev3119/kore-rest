import { Router } from 'express';
import { existIdChest } from '../middlewares/validateFields';
import { getDataPanamById } from '../controllers';

const router: Router = Router();

router.get('/:id', [existIdChest], getDataPanamById);




export {
    router as panamericanRouter
}