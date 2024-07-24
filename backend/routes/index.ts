import { Router } from 'express';
import { addCoincheScore, addChessScore } from '../controllers/scoreController';

const router = Router();

router.post('/coinche', addCoincheScore);
router.post('/chess', addChessScore);

export default router;
