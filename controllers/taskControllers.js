const tareasModels = require('../models/taskModels.js');

const getTareas = async (req, res) => {

    try{
        const tareas = await tareasModels.getTareas();
        res.json(tareas);
    }catch(error) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }

}

const postTareas = async (req, res) => {
    try{
        const { titulo, texto } = req.body;
        if (!titulo || !texto) {
            return res.status(400).json({ error: 'Faltan datos' });
        }
        const result = await tareasModels.postTareas(titulo, texto);
        res.json({ message: 'Tarea creada', id: result.insertId });
    }catch(error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
}

const updateTarea = async (req, res) => {
    try{
        const { id } = req.params;
        const { titulo, texto } = req.body;
        if (!titulo || !texto) {
            return res.status(400).json({ error: 'Faltan datos' });
        }
        const result = await tareasModels.updateTarea(id, titulo, texto);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json({ message: 'Tarea actualizada' });
    }catch(error) {
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
}

const deleteTarea = async (req, res) => {
    const { id } = req.params;
    try{
        const result = await tareasModels.deleteTarea(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json({ message: 'Tarea eliminada' });
    }catch(error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
}

module.exports = { getTareas, postTareas, updateTarea, deleteTarea };