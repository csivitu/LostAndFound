import sqlite3 from "sqlite3";

export const ConnectToDb = () => {
  const db = new sqlite3.Database("main.db");

  // Check and create users table
  const createUsersTable = `CREATE TABLE IF NOT EXISTS users ( user_id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, fName TEXT, lName TEXT)`;
  const createItemsTable = `CREATE TABLE IF NOT EXISTS items ( item_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, location TEXT, contact TEXT, email TEXT, room TEXT, block TEXT, imgPath TEXT)`;

  db.serialize(() => {
    db.run(createUsersTable);
    db.run(createItemsTable);
  });

  return db;
};

export const AddUser = async (details) => {
  const db = ConnectToDb();
  let query = `INSERT INTO users (email, password, fName, lName) VALUES (?, ?, ?, ?)`;

  const { email, password, fName, lName } = details;

  await new Promise((resolve, reject) => {
    db.run(query, [email, password, fName, lName], (err) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve();
    });
  });

  db.close();
};

export const GetUser = async (email) => {
  const db = ConnectToDb();
  const query = `SELECT * FROM users WHERE email = ?`;

  const result = await new Promise((resolve, reject) => {
    db.get(query, [email], (err, row) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve(row);
    });
  });

  db.close();
  return result;
};

export const GetUserByID = async (user_id) => {
  const db = ConnectToDb();
  const query = `SELECT * FROM users WHERE user_id = ?`;

  const result = await new Promise((resolve, reject) => {
    db.get(query, [user_id], (err, row) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve(row);
    });
  });

  db.close();
  return result;
};

export const AddItem = async (details) => {
  const db = ConnectToDb();
  let query = `INSERT INTO items (name, location, contact, email, room, block, imgPath) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const { name, location, contact, room, email, block, imgPath } = details;

  await new Promise((resolve, reject) => {
    db.run(query, [name, location, contact, email, room, block, imgPath], (err) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve();
    });
  });

  db.close();
};

export const DeleteItem = async (id) => {
  const db = ConnectToDb();
  let query = `DELETE FROM items WHERE item_id = ?`;

  await new Promise((resolve, reject) => {
    db.run(query, [id], (err) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve();
    });
  });

  db.close();
};

export const GetItems = async () => {
  const db = ConnectToDb();
  let query = `SELECT * FROM items`;

  const rows = await new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve(rows);
    });
  });

  db.close();
  return rows;
};

export const GetItemsByUser = async (email) => {
  const db = ConnectToDb();
  let query = `SELECT * FROM items WHERE email = ?`;

  const rows = await new Promise((resolve, reject) => {
    db.all(query, [email], (err, rows) => {
      if (err) {
        console.log(err);
        reject(err);
      } else resolve(rows);
    });
  });

  db.close();
  return rows;
};
