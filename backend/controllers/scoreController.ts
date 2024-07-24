import { Request, Response } from 'express';
import db from '../models/db';
/**
 * Store coinche score after game
 * Currently draft as i need to read the rules of the game first haha
 */
export const addCoincheScore = (req: Request, res: Response) => {
  const { player1, player2, score1, score2 } = req.body;
  const query = `INSERT INTO coinche (player1, player2, score1, score2) VALUES (?, ?, ?, ?)`;
  db.run(query, [player1, player2, score1, score2], function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send({ id: this.lastID });
  });
};

/**
 * Store chess score after game
 */
export const addChessScore = (req: Request, res: Response) => {
  const { winner, loser } = req.body;
  const query = `INSERT INTO chess (winner, loser) VALUES (?, ?)`;
  db.run(query, [winner, loser], function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).send({ id: this.lastID });
  });
};
