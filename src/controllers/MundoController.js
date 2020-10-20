const connection = require('../models/db');

module.exports = {
    async ListaTimeSeriaA(req, res){

        let selectTimes = "SELECT * FROM mundo_serie_a ORDER BY pontos DESC, jogos ASC, vitorias DESC, time";

        connection.query(selectTimes, (err, result) => {
            if(err) return console.log(err);
            return res.status(200).send(result);;
        })
    },

    async ListaTimeSeriaB(req, res){

        let selectTimes = "SELECT * FROM mundo_serie_b ORDER BY pontos DESC, jogos ASC, vitorias DESC, time";

        connection.query(selectTimes, (err, result) => {
            if(err) return console.log(err);
            return res.status(200).send(result);
        })
    },

    async ListaTimeSeriaC(req, res){

        let selectTimes = "SELECT * FROM mundo_serie_c ORDER BY pontos DESC, jogos ASC, vitorias DESC, time";

        connection.query(selectTimes, (err, result) => {
            if(err) return console.log(err);
            return res.status(200).send(result);
        })
    },

    async RebaixadosA(req, res){

        let body = req.body;

        let rebaixaTimesSerieA = `DELETE FROM mundo_serie_a WHERE time = "${body.time}"`;

        let insereTimesNaSerieB = `INSERT INTO mundo_serie_b
        (time, logo, pontos, jogos, vitorias)
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

        let rebaixaTimesSerieB = `DELETE FROM mundo_serie_b WHERE time = "${body.time}"`;

        let insereTimesNaSerieC = `INSERT INTO mundo_serie_c
        (time, logo, pontos, jogos, vitorias)
        VALUES
        ("${body.time}", "${body.logo}", 0, 0, 0)`;

        connection.query(rebaixaTimesSerieB, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        connection.query(insereTimesNaSerieC, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        return res.status(200).send({'result': 'success'});
    },

    async RebaixadosC(req, res){

        let body = req.body;

        let rebaixaTimesSerieC = `DELETE FROM mundo_serie_c WHERE time = "${body.time}"`;

        connection.query(rebaixaTimesSerieC, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        return res.status(200).send({'result': 'success'});
    },

    async AcessoSerieA(req, res){

        let body = req.body;

        let retiraOsTimesDaSerieB = `DELETE FROM mundo_serie_b WHERE time = "${body.time}"`;

        let acessoTimesParaSerieA = `INSERT INTO mundo_serie_a
        (time, logo, pontos, jogos, vitorias)
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

    async AcessoSerieB(req, res){

        let body = req.body;

        let retiraOsTimesDaSerieC = `DELETE FROM mundo_serie_c WHERE time = "${body.time}"`;

        let acessoTimesParaSerieB = `INSERT INTO mundo_serie_b
        (time, logo, pontos, jogos, vitorias)
        VALUES
        ("${body.time}", "${body.logo}", 0, 0, 0)`;

        connection.query(retiraOsTimesDaSerieC, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        connection.query(acessoTimesParaSerieB, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' deletado');
        });

        return res.status(200).send({'result': 'success'});
    },

    async zeraTabela(req, res){

        let body = req.body;

        let ZeraTabelaSerieA = `UPDATE mundo_serie_a
        SET pontos = 0, jogos = 0, vitorias = 0
        WHERE time = "${body.time}"`;

        connection.query(ZeraTabelaSerieA, err => {
            if(err) throw err;
            console.log('Tabela série a atualizada');
        });

        let ZeraTabelaSerieB = `UPDATE mundo_serie_b
        SET pontos = 0, jogos = 0, vitorias = 0
        WHERE time = "${body.time}"`;

        connection.query(ZeraTabelaSerieB, err => {
            if(err) throw err;
            console.log('Tabela série b atualizada');
        });

        let ZeraTabelaSerieC = `UPDATE mundo_serie_c
        SET pontos = 0, jogos = 0, vitorias = 0
        WHERE time = "${body.time}"`;

        connection.query(ZeraTabelaSerieC, err => {
            if(err) throw err;
            console.log('Tabela série b atualizada');
        });

        let copaDoMundial = `INSERT INTO copa_mundial
        (nome_time, logo)
        VALUES
        ("${body.time}", "${body.logo}")`;

        connection.query(copaDoMundial, err => {
            if(err) throw err;
            console.log('Time: ' + body.time + ' inserido na copa mundial');
        });

        return res.status(200).send({'result': 'success'});
    },

    async getUpdateData(req, res){

        let select = 'SELECT * FROM update_mundo';

        connection.query(select, (err, result) => {
            if(err) throw err;
            console.log('Data atualizada');
            return res.status(200).send(result);
        });

        
    },

    async insertUpdateData(req, res){

        let body = req.body

        console.log(body.data);
        
        let insert = `UPDATE update_mundo SET dataUp = "${body.data}" WHERE nome = "data"`;

        connection.query(insert, (err, result) => {
            if(err) throw err;
            console.log('Data atualizada');
            return res.status(200).send({'result': 'success'});
        });

    }
}