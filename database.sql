-- Criar banco
CREATE DATABASE IF NOT EXISTS estoque;
USE estoque;

-- ================= PRODUTOS =================
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  estoque INT DEFAULT 0
);

-- ================= ENTRADAS =================
CREATE TABLE entradas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL,
  data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (id_produto) REFERENCES produtos(id)
    ON DELETE CASCADE
);

-- ================= SAIDAS =================
CREATE TABLE saidas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL,
  data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (id_produto) REFERENCES produtos(id)
    ON DELETE CASCADE
);