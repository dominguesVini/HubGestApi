import { Request, Response } from 'express';
import db from '../db';
import { Usuario } from '../models/usuario';
import { ResultSetHeader } from 'mysql2';

// Buscar todos os usuários
export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuario');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUsuario = async (req: Request, res: Response) => {
    const { nome, celular, idDepartamento, idEndereco, ativo }: Usuario = req.body;
  
    try {
      const sql = 'INSERT INTO usuario (nome, celular, idDepartamento, idEndereco, ativo) VALUES (?, ?, ?, ?, ?)';
      
      // Especifica o tipo do resultado como ResultSetHeader
      const [result] = await db.query<ResultSetHeader>(sql, [nome, celular, idDepartamento, idEndereco, ativo]);
  
      res.status(201).json({ message: 'Usuário criado com sucesso!', userId: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
