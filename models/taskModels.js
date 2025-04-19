const db = require("../config/db");

const getTareas = async () => {
  const [rows] = await db.query("SELECT * FROM tarea");
  return rows;
};

const postTareas = async (titulo, texto) => {
  const [result] = await db.query(
    "INSERT INTO tarea (titulo, texto) VALUES (?, ?)",
    [titulo, texto]
  );
  return result;
};

const updateTarea = async (id, titulo, texto) => {
  const [result] = await db.query(
    "UPDATE tarea SET titulo = ?, texto = ? WHERE id = ?",
    [titulo, texto, id]
  );
  return result;
}

const deleteTarea = async (id) => {
  const [result] = await db.query("DELETE FROM tarea WHERE id = ?", [id]);
  return result;
};

module.exports = { getTareas, postTareas, updateTarea, deleteTarea };
