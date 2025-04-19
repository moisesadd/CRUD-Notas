Este es un proyecto backend donde puedes crear, leer, actualizar y eliminar tareas o notas de dos partes titulo y contenido. Está desarrollado con Node.js, Express y MySQL, siguiendo el patrón Modelo Vista Controlador (MVC) para mantener el código organizado.

Tecnologías usadas

Node.js

Express

MySQL

dotenv

mysql2

Endpoints de la API


GET http://localhost:3000/tareas/               Obtener todas las tareas

POST http://localhost:3000/tareas/add            Crear una nueva tarea

PUT http://localhost:3000/tareas/update/1        Actualizar una nota existente

DELETE http://localhost:3000/tareas/delete/1     Eliminar una nota por ID

Cómo usar el proyecto

Clona este repositorio:

git clone https://github.com/moisesadd/CRUD-Notas.git

Instala las dependencias:

npm install

Crea un archivo .env con tu configuración de base de datos:

HOST=localhost
USER=root
PASSWORD=tu_clave
DATABASE=nombre_de_tu_base

Ejecuta el servidor:

npm run dev

Prueba los endpoints con Postman

Cosas por mejorar (pendientes)

Autenticación (JWT)

Autor

Desarrollado por Moises Ramirez, desarrollador backend en formación desde Colombia, con el objetivo de mejorar profesionalmente y vivir de la programación.
