const connection = require('../models/db');

module.exports = {
    async CreateTimesBrasil(req, res){

        let body = req.body;
        
        let InsertIntoBrasilSeriaA = `INSERT INTO brasil_serie_a
            (nome_time, logo, pontos, jogos, vitorias) 
            VALUES 
            ("${body.time}", "${body.logo}", 0, 0, 0)`;

        let InsertIntoBrasilSeriaB = `INSERT INTO brasil_serie_b
            (nome_time, logo, pontos, jogos, vitorias) 
            VALUES 
            ("${body.time}", "${body.logo}", 0, 0, 0)`;

        if(body.campeonato === 'Brasil série A'){

            connection.query(InsertIntoBrasilSeriaA, (err, result) => {
                if(err) return console.log(err);
                return res.status(200).send(result);
            })

        } else {

            connection.query(InsertIntoBrasilSeriaB, (err, result) => {
                if(err) return console.log(err);
                return res.status(200).send(result);;
            })

        }
    },

    async CreateTimesMundo(req, res){

        let body = req.body;

        let InsertIntoMundoSeriaA = `INSERT INTO mundo_serie_a
            (time, logo, pontos, jogos, vitorias) 
            VALUES 
            ("${body.time}", "${body.logo}", 0, 0, 0)`;

        let InsertIntoMundoSeriaB = `INSERT INTO mundo_serie_b
            (time, logo, pontos, jogos, vitorias) 
            VALUES 
            ("${body.time}", "${body.logo}", 0, 0, 0)`;

        let InsertIntoMundoSeriaC = `INSERT INTO mundo_serie_c
            (time, logo, pontos, jogos, vitorias) 
            VALUES 
            ("${body.time}", "${body.logo}", 0, 0, 0)`;

        if(body.campeonato === 'Mundo série A'){

            connection.query(InsertIntoMundoSeriaA, (err, result) => {
                if(err) return console.log(err);
                console.log('Time ' + body.time + ' inserido com sucesso na série A');
                return res.status(200).send(result);
            })

        } else if(body.campeonato === 'Mundo série B') {

            connection.query(InsertIntoMundoSeriaB, (err, result) => {
                if(err) return console.log(err);
                console.log('Time ' + body.time + ' inserido com sucesso na série B');
                return res.status(200).send(result);
            })

        } else {
            connection.query(InsertIntoMundoSeriaC, (err, result) => {
                if(err) return console.log(err);
                console.log('Time ' + body.time + ' inserido com sucesso na série C');
                return res.status(200).send(result);
            })
        }
    }
}