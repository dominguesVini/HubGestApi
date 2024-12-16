import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/api', usuarioRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
