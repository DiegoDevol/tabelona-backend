const express = require('express');

const routes = new express.Router();

const CampeoesController = require('./controllers/CampeoesController');
const TimesController = require('./controllers/TimesController');
const BrasilController = require('./controllers/BrasilController');
const PontuacaoController = require('./controllers/PontuacaoController');
const ChampionsController = require('./controllers/ChampionsController');
const LibertadoresController = require('./controllers/LibertadoresController');
const MundoController = require('./controllers/MundoController');

routes.post('/campeoes', CampeoesController.Create);
routes.get('/campeoes', CampeoesController.Lista);

routes.post('/times', TimesController.CreateTimesBrasil);
routes.post('/times-mundo', TimesController.CreateTimesMundo);

routes.get('/brasil-serie-a', BrasilController.ListaTimeSeriaA);
routes.get('/brasil-serie-b', BrasilController.ListaTimeSeriaB);
routes.post('/rebaixados-serie-a', BrasilController.RebaixadosA);
routes.post('/rebaixados-serie-b', BrasilController.RebaixadosB);
routes.post('/acesso-serie-a', BrasilController.AcessoSerieA);
routes.post('/zera-tabela', BrasilController.zeraTabela);
routes.get('/getUpdateDataBrasil', BrasilController.getUpdateData);
routes.post('/updateDataBrasil', BrasilController.insertUpdateData);

routes.post('/pontosSeriaA', PontuacaoController.PontosSerieA);
routes.post('/pontosSeriaB', PontuacaoController.PontosSerieB);
routes.post('/pontosSeriaAmundo', PontuacaoController.PontosSerieAMundo);
routes.post('/pontosSeriaBmundo', PontuacaoController.PontosSerieBMundo);
routes.post('/pontosSeriaCmundo', PontuacaoController.PontosSerieCMundo);
routes.post('/pontosChampions', PontuacaoController.PontosChampions);

routes.post('/champions', ChampionsController.insereTimes);
routes.get('/getChampions', ChampionsController.ListaTimeGrupoA);
routes.get('/getUpdateDataChampions', ChampionsController.getUpdateData);
routes.post('/zeraChampions', ChampionsController.zeraChampions);

routes.post('/libertadores', LibertadoresController.insereTimes);

routes.get('/mundo-serie-a', MundoController.ListaTimeSeriaA);
routes.get('/mundo-serie-b', MundoController.ListaTimeSeriaB);
routes.get('/mundo-serie-c', MundoController.ListaTimeSeriaC);
routes.post('/rebaixados-serie-a-mundo', MundoController.RebaixadosA);
routes.post('/acesso-serie-a-mundo', MundoController.AcessoSerieA);
routes.post('/rebaixados-serie-b-mundo', MundoController.RebaixadosB);
routes.post('/acesso-serie-b-mundo', MundoController.AcessoSerieB);
routes.post('/rebaixados-serie-c-mundo', MundoController.AcessoSerieB);
routes.post('/zera-tabela-mundo', MundoController.zeraTabela);
routes.get('/getUpdateData', MundoController.getUpdateData);
routes.post('/updateData', MundoController.insertUpdateData);

module.exports = routes;