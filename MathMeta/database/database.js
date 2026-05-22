const Database = require('better-sqlite3');

const db = new Database('database/MathMeta.db');

// Tabela para salvar historicos

db.prepare(`CREATE TABLE IF NOT EXISTS calculations (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    equationsType TEXT, 
    values TEXT,
    result TEXT,    
    createaAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
`).run();

module.exports = db;