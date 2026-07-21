import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root',      
  password: 'root',      // Senha do seu MySQL 
  database: 'devblog', // Nome do banco de dados
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(() => console.log('Estoque conectado! Conexão com o MySQL bem sucedida. 📦'))
  .catch((err) => console.error('Erro ao conectar com o banco de dados:', err));

export default pool;