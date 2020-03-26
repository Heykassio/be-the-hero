const express = require('express');

const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');

const ProfileControlller = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', ongController.index );
routes.post('/ongs', ongController.create);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileControlller.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;






























/**
 * Rota -> é o caminho todo
 * Recurso -> é o que queremos acessar
 */

/**
 * Métodos HTTP
 * GET -> Buscar informações no back-end
 * POST -> Criar uma informação no back-end
 * PUT -> Alterar uma informação no back-end
 * DELETE -> Deletar uma informação no back-end
 */


 /**
  * Tipos de parâmetros:
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação, pesquisa) ligados com "&" acessado com request.query
  * Route Params: Parâmentros utilizados para identificar recursos "/users/:id"  acessado com request.params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * Bancos de dados:
 * SQL: MySql, SQLite...
 * NoSQL: MongoDB
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

