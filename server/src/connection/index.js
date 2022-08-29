"use strict";
const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.DB_CONNECTION_URL;

const client = new MongoClient(MONGODB_URI);

// Database Name
const dbName = process.env.DB_NAME;

let dbInstance = null;

const getDBInstance = async function () {
  if (dbInstance) return dbInstance;
  await client.connect().catch((err) => console.error(err));
  dbInstance = client.db(dbName);
  return dbInstance;
};

module.exports = {
  getDBInstance,
};
