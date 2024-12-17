import { Request, Response } from 'express';
import db from '../db';

export const getFerias = async (req: Request, res: Response) => {
  try {
    // Consulta as férias e seus dados associados
    const [rows]: any[] = await db.query(
      `SELECT 
        f.idFerias AS id,
        DATE_FORMAT(f.aquisitivoDe,'%d/%m/%Y')   AS aquisitivoDe,
        DATE_FORMAT(f.aquisitivoAte,'%d/%m/%Y')  AS aquisitivoAte,
        DATE_FORMAT(f.concessivoDe,'%d/%m/%Y')   AS concessivoDe,
        DATE_FORMAT(f.concessivoAte,'%d/%m/%Y')  AS concessivoAte,
        DATE_FORMAT(f.dataInicioGozo,'%d/%m/%Y') AS dataInicioGozo,
        f.diasFerias AS saldo
      FROM ferias f`
    );

    // Formata os dados no formato desejado
    const feriasData = rows.map((row: any) => ({
      id: row.id.toString(),
      periodo: `${row.aquisitivoDe} até ${row.aquisitivoAte}`,
      concessivo: `${row.concessivoDe} até ${row.concessivoAte}`,
      saldo: row.saldo,
      aquisitivoDe: row.aquisitivoDe,
      aquisitivoAte: row.aquisitivoAte,
      concessivoDe: row.concessivoDe,
      concessivoAte: row.concessivoAte,
      dataInicioGozo: row.dataInicioGozo,
      dataFimGozo: row.dataFimGozo
    }));

    // Retorna os dados formatados
    res.status(200).json(feriasData);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
