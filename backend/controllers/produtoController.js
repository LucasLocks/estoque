const db = require('../config/db');

exports.criarProduto = (req, res) => {
  const { nome, preco } = req.body;

  db.query(
    'INSERT INTO produtos (nome, preco) VALUES (?, ?)',
    [nome, preco],
    (err) => {
      if (err) return res.send(err);
      res.send("Produto criado!");
    }
  );
};

exports.listarProdutos = (req, res) => {
  db.query('SELECT * FROM produtos', (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
};

exports.deletarProduto = (req, res) => {
  db.query(
    'DELETE FROM produtos WHERE id = ?',
    [req.params.id],
    (err) => {
      if (err) return res.send(err);
      res.send("Produto removido!");
    }
  );
};