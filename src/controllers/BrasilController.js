const connection = require('../models/db');

module.exports = {
    async ListaTimeSeriaA(req, res){

        let selectTimes = "SELECT * FROM brasil_serie_a ORDER BY pontos DESC, jogos ASC, vitorias DESC, nome_time";

        connection.query(selectTimes, (err, result) => {
            if(err) return console.log(err);
            return res.status(200).send(result);
        })
    },

    async ListaTimeSeriaB(req, res){

        let selectTimes = "SELECT * FROM brasil_serie_b ORDER BY pontos DESC, jogos ASC, vitorias DESC, nome_time";

        connection.query(selectTimes, (err, result) => {
            if(err) return console.log(err);
            return res.status(200).send(result);
        })
    },

    async RebaixadosA(req, res){

        let body = req.body;

        let rebaixaTimesSerieA = `DELETE FROM brasil_serie_a WHERE nome_time = "${body.time}"`;

        let insereTimesNaSerieB = `INSERT INTO brasil_serie_b
        (nome_time, logo, pontos, jogos, vitorias)
        VALUES
        ("${body.time}", "${body.logo}", 0, 0, 0)`;

        connection.query(rebaixaTimesSerieA, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' rebaixado');
        });

        connection.query(insereTimesNaSerieB, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' inserido na série B');
        });

        return res.status(200).send({'result': 'success'});
    },

    async RebaixadosB(req, res){

        let body = req.body;

        let rebaixaTimesSerieB = `DELETE FROM brasil_serie_b WHERE nome_time = "${body.time}"`;

        connection.query(rebaixaTimesSerieB, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        return res.status(200).send({'result': 'success'});
    },

    async AcessoSerieA(req, res){

        let body = req.body;

        let retiraOsTimesDaSerieB = `DELETE FROM brasil_serie_b WHERE nome_time = "${body.time}"`;

        let acessoTimesParaSerieA = `INSERT INTO brasil_serie_a
        (nome_time, logo, pontos, jogos, vitorias)
        VALUES
        ("${body.time}", "${body.logo}", 0, 0, 0)`;

        connection.query(retiraOsTimesDaSerieB, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        connection.query(acessoTimesParaSerieA, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        return res.status(200).send({'result': 'success'});
    },

    async zeraTabela(req, res){

        let body = req.body;

        let ZeraTabelaSerieA = `UPDATE brasil_serie_a
        SET pontos = 0, jogos = 0, vitorias = 0
        WHERE nome_time = "${body.time}"`;

        connection.query(ZeraTabelaSerieA, err => {
            if(err) throw err;
            console.log('Tabela série a atualizada');
        });

        let ZeraTabelaSerieB = `UPDATE brasil_serie_b
        SET pontos = 0, jogos = 0, vitorias = 0
        WHERE nome_time = "${body.time}"`;

        connection.query(ZeraTabelaSerieB, err => {
            if(err) throw err;
            console.log('Tabela série b atualizada');
        });

        let copaDoBrasil = `INSERT INTO copa_do_brasil
        (nome_time, logo)
        VALUES
        ("${body.time}", "${body.logo}")`;

        connection.query(copaDoBrasil, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' inserido na copa do brasil');
        });

        return res.status(200).send({'result': 'success'});
    },

    async getUpdateData(req, res){

        let select = 'SELECT * FROM update_brasil';

        connection.query(select, (err, result) => {
            if(err) throw err;
            console.log('Data atualizada');
            return res.status(200).send(result);
        });

        
    },

    async insertUpdateData(req, res){

        let body = req.body

        console.log(body.data);
        
        let insert = `UPDATE update_brasil SET dataUp = "${body.data}" WHERE nome = "data"`;

        connection.query(insert, (err, result) => {
            if(err) throw err;
            console.log('Data atualizada');
            return res.status(200).send({'result': 'success'});
        });

    }
}