
//const { Pool } = require("pg");
import pg from "pg";
const {Pool} = pg
const pool = new Pool({
  connectionString:
    "postgresql://root:COKvcwvMvJS5ys4ZmtSvcmAcYJYDOLWt@dpg-d0vknonfte5s739pgo20-a.oregon-postgres.render.com/database_x3mc",
  ssl: {
    rejectUnauthorized: false,
  },
});
export default pool;














/*
async function testConection() {
  try {
    const client = await pool.connect();
    console.log("Conexion exitosa");
    client.release();
    await pool.end();
  } catch (err) {
    console.err("Error al conectar", err);
  }
}

testConection();*/