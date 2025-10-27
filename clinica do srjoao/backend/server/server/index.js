const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..'))); // serve front

app.post('/api/agendar', (req, res) => {
  const { nome, telefone, data, servico } = req.body;
  db.run(
    `INSERT INTO agendamentos (nome, telefone, data, servico) VALUES (?, ?, ?, ?)`,
    [nome, telefone, data, servico],
    function(err) {
      if (err) return res.status(500).json({ message: 'Erro interno.' });
      res.json({ message: 'Agendamento recebido! Entraremos em contato em até 1h.' });
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));