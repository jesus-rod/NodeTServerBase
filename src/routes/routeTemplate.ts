import { Router } from 'express';
import { createSomething, getSomething, updateSomething, deleteSomething } from '../controllers/controllerTemplate';

const router = Router();

router.post('/', createSomething);
router.get('/', getSomething);
router.patch('/:id', updateSomething);
router.delete('/:id', deleteSomething);

export default  router;