const connection = require('../models/db');

module.exports = {
    async insereTimes(req, res){

        let body = req.body;

        let insereTime = `INSERT INTO libertadores
        (time, logo, pontos, jogos, vitorias)
        VALUES
        ("${body.time}", "${body.logo}", 0, 0, 0)`

        connection.query(insereTime, (err, result) => {
            if(err) throw err;
            console.log(body.time + " inserido na tabela libertadores");
            return res.status(200).send({'result': 'success'});
        });

    }
}