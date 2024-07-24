import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE coinche (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player1 INTEGER,
    player2 INTEGER,
    score1 INTEGER,
    score2 INTEGER
  )`);

  db.run(`CREATE TABLE chess (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    winner INTEGER,
    loser INTEGER
  )`);
});

export default db;
