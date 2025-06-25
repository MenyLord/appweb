import pool from "./db.js";
import express from "express";
import cors from "cors";

const app = express();
//const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.delete("/DELETE-data-table", async (req, res) => {
  try {
    const tableName = "data";

    const checkTable = await pool.query(`SELECT to_regclass($1) AS exists`, [
      tableName,
    ]);

    if (checkTable.rows[0].exists) {
      await pool.query(`
        DROP TABLE ${tableName};
      `);

      return res.status(201).json({ message: "✅ Tabla Eliminada exitosamente" });
    } else {
      return res.status(200).json({ message: "ℹLa tabla no existe" });
    }
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});



app.post("/create-data-table", async (req, res) => {
  try {
    const tableName = "data";

    const checkTable = await pool.query(
      `SELECT to_regclass('${tableName}') AS exists`
    );

    if (!checkTable.rows[0].exists) {
      await pool.query(`
        CREATE TABLE ${tableName} (
          id SERIAL PRIMARY KEY,
          nombre_completo TEXT NOT NULL,
          matricula TEXT NOT NULL,
          value TEXT
        );
      `);

      return res.status(201).json({ message: "✅ Tabla creada exitosamente" });
    } else {
      return res.status(200).json({ message: "ℹ️ La tabla ya existe" });
    }
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});






app.post("/savedata", async (req, res) => {
  const tableName = "data";
  const { nombre_completo, matricula, value } = req.body;
  console.log("Recibido:", { nombre_completo, matricula, value });

  try {
    await pool.query(
      `INSERT INTO ${tableName}(nombre_completo, matricula, value) VALUES($1, $2, $3)`,
      [nombre_completo, matricula, value]
    );

    return res
      .status(201)
      .json({ message: "✅ Datos insertados exitosamente" });
  } catch (err) {
    console.error("Error al insertar datos:", err);
    res.status(500).json({
      error: "Error al procesar la solicitud",
    });
  }
});


































const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto, ${PORT}`);
});

app.get("/Nana", (req, res) => {
  res.json({ nombre: "Nana", apellido: "Osaki" });
});

app.get("/velocidad", (req, res) => {
  res.json({ nombre: "Nubia", apellido: "sanchez" });
});

app.get("/temperatura", (req, res) => {
  res.json({ valor: "10°C", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
console.log(`servidor corriendo en puerto ${PORT}`);
});