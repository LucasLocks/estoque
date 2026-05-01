const db = require('../config/db');

exports.registrarSaida = (req, res) => {
  const { id_produto, quantidade } = req.body;

  db.query(
    'UPDATE produtos SET estoque = estoque - ? WHERE id = ?',
    [quantidade, id_produto]
  );

  db.query(
    'INSERT INTO saidas (id_produto, quantidade) VALUES (?, ?)',
    [id_produto, quantidade],
    (err) => {
      if (err) return res.send(err);
      res.send("Saída registrada!");
    }
  );
};