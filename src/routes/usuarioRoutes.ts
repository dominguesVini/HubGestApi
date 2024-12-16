import { Router } from 'express';
import { getUsuarios, createUsuario } from '../controllers/usuarioController';

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuario);

export default router;
