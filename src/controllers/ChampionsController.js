const connection = require('../models/db');

module.exports = {
    async insereTimes(req, res){

        let body = req.body;

        let insereTime = `INSERT INTO champions_league
        (time, logo, pontos, jogos, vitorias)
        VALUES
        ("${body.time}", "${body.logo}", 0, 0, 0)`

        connection.query(insereTime, (err, result) => {
            if(err) throw err;
            console.log(body.time + " inserido na tabela champions");
            return res.status(200).send({'result': 'success'});
        });

    },

    async ListaTimeGrupoA(req, res){

        let selectTimes = "SELECT * FROM champions_league ORDER BY pontos DESC, jogos ASC, vitorias DESC, time";

        connection.query(selectTimes, (err, result) => {
            if(err) return console.log(err);
            return res.status(200).send(result);
        })
    },

    async getUpdateData(req, res){

        let select = 'SELECT * FROM update_champions';

        connection.query(select, (err, result) => {
            if(err) throw err;
            console.log('Data atualizada');
            return res.status(200).send(result);
        });

        
    },

    async insertUpdateData(req, res){

        let body = req.body
        
        let insert = `UPDATE update_champions SET dataUp = "${body.data}" WHERE nome = "data"`;

        connection.query(insert, (err, result) => {
            if(err) throw err;
            console.log('Data atualizada');
            return res.status(200).send({'result': 'success'});
        });

    },

    async zeraChampions(req, res){

        let body = req.body
        
        let insert = `DELETE FROM champions_league WHERE time = "${body.time}"`;

        connection.query(insert, (err, result) => {
            if(err) throw err;
            console.log('Time deletado');
            return res.status(200).send({'result': 'success'});
        });

    }
}