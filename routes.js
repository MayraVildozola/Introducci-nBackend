//Cargue la conexión del grupo MySQL 
const pool = require(`../data/config`);

//Ruta de la app
const router = app =>{
    //Mostrar mensaje de bienvenida de root
    app.get(`/`, (request, response) =>{
        response.send({
            message: `Bienvenido a Node.js Express REST API!`
    });
});

//Mostrar todos los usuarios
app.get(`/users`, (request, response) =>{
    pool.query(`SELECT * FROM users`, (error, result) =>{
        if (error) throw error;
        response.send(reslt);
    });
});

//Mostrar un solo usuario por ID
app.get(`/user/:id`, (request, response)=> {
    const id = request.params.id;

    pool.query(`SELECT * FROM users WHERE id = ?`, id, (error, result) =>{
        if (error) throw error;
        response.send(result);
    });
});