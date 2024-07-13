const sqlite3 = require('sqlite3').verbose();
const xlsx = require('xlsx');

// 讀取 Excel 檔案
const excelFile = 'products.xlsx';
const workbook = xlsx.readFile(excelFile);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// 連接到 SQLite 資料庫（如果資料庫不存在則會自動創建）
const db = new sqlite3.Database('products.db');

// 創建產品列表表格
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            description TEXT,
            price REAL NOT NULL,
            stock INTEGER NOT NULL,
            imageUrl TEXT
        )
    `);

    // 檢查並更新資料
    const stmtInsert = db.prepare(`
        INSERT INTO Products (name, description, price, stock, imageUrl)
        VALUES (?, ?, ?, ?, ?)
    `);

    const stmtUpdate = db.prepare(`
        UPDATE Products SET description = ?, price = ?, stock = ?, imageUrl = ?
        WHERE name = ?
    `);

    const promises = data.map(row => {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM Products WHERE name = ?', [row.name], (err, existingRow) => {
                if (err) {
                    reject(err);
                } else if (existingRow) {
                    stmtUpdate.run(row.description, row.price, row.stock, row.imageUrl, row.name, (err) => {
                        if (err) reject(err);
                        else resolve();
                    });
                } else {
                    stmtInsert.run(row.name, row.description, row.price, row.stock, row.imageUrl, (err) => {
                        if (err) reject(err);
                        else resolve();
                    });
                }
            });
        });
    });

    Promise.all(promises)
        .then(() => {
            stmtInsert.finalize();
            stmtUpdate.finalize();
            console.log("Data imported successfully.");
            db.close();
        })
        .catch(err => {
            console.error(err);
            stmtInsert.finalize();
            stmtUpdate.finalize();
            db.close();
        });
});
