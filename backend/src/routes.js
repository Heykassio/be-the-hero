const express = require('express');
const {Joi, celebrate, Segments} = require('celebrate');

const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');

const ProfileControlller = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', ongController.index );

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(13),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}) , ongController.create);

routes.post('/session', SessionController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}) ,ProfileControlller.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}),incidentsController.index);

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
  })
}),incidentsController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
}), incidentsController.delete);

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

