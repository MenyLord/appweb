
//const { Pool } = require("pg");
import pg from "pg";
const {Pool} = pg
const pool = new Pool({
  connectionString:
    "postgresql://root:pPEbVaDEVO25WCg6SltuNSubWM1mziPL@dpg-d2f3gkmmcj7s7388m7qg-a.oregon-postgres.render.com/proyect_la6p",
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