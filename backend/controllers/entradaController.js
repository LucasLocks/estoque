const db = require('../config/db');

exports.registrarEntrada = (req, res) => {
  const { id_produto, quantidade } = req.body;

  db.query(
    'INSERT INTO entradas (id_produto, quantidade) VALUES (?, ?)',
    [id_produto, quantidade]
  );

  db.query(
    'UPDATE produtos SET estoque = estoque + ? WHERE id = ?',
    [quantidade, id_produto],
    (err) => {
      if (err) return res.send(err);
      res.send("Entrada registrada!");
    }
  );
};