const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./agendamentos.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS agendamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    telefone TEXT,
    data TEXT,
    servico TEXT,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

module.exports = db;