import { Router } from 'express';
import { getUsuarios, createUsuario, getCursosDoUsuario } from '../controllers/usuarioController';
import { getFerias } from '../controllers/feriasController';

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuario);
router.get('/ferias', getFerias);
router.get('/cursos/:id', getCursosDoUsuario);

export default router;
