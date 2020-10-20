const connection = require('../models/db');

module.exports = {

    async Create(req, res){

        let body = req.body;

        console.log(body);

        let insereCampeao = `INSERT INTO campeoes 
        (times, campeonato, ano)
        VALUES
        ("${body.time}", "${body.campeonato}", "${body.ano}")`

        connection.query(insereCampeao, (err, result) => {
            if(err) return console.log(err);
            console.log('Atualizado no banco: ' + body.campeonato + ' para o time: ' + body.time);
            return res.status(200).send({'success': 'result'});
        });
    },

    async Lista(req, res){

        let selectCampeoes = "SELECT * FROM campeoes ORDER BY ano DESC";

        connection.query(selectCampeoes, (err, result) => {
            if(err) return console.log(err);
            return res.status(200).send(result);;
        })

    }
}