const connection = require('../models/db');

module.exports = {
    async PontosSerieA(req, res){

        let body = req.body;

        let UpdateVitoria = `UPDATE brasil_serie_a SET 
        pontos = pontos + 3,
        jogos = jogos + 1,
        vitorias = vitorias + 1
        WHERE nome_time = "${body.time}"`;

        let UpdateEmpate = `UPDATE brasil_serie_a SET 
        pontos = pontos + 1,
        jogos = jogos + 1
        WHERE nome_time = "${body.time}"`;

        let UpdateDerrota = `UPDATE brasil_serie_a SET 
        jogos = jogos + 1
        WHERE nome_time = "${body.time}"`;

        if(body.resultado === 'vitoria'){
            connection.query(UpdateVitoria, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'empate'){
            connection.query(UpdateEmpate, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'derrota'){
            connection.query(UpdateDerrota, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });
        }

    },

    async PontosSerieB(req, res){

        let body = req.body;

        let UpdateVitoriaB = `UPDATE brasil_serie_b SET 
        pontos = pontos + 3,
        jogos = jogos + 1,
        vitorias = vitorias + 1
        WHERE nome_time = "${body.time}"`;

        let UpdateEmpateB = `UPDATE brasil_serie_b SET 
        pontos = pontos + 1,
        jogos = jogos + 1
        WHERE nome_time = "${body.time}"`;

        let UpdateDerrotaB = `UPDATE brasil_serie_b SET 
        jogos = jogos + 1
        WHERE nome_time = "${body.time}"`;


        if(body.resultado === 'vitoria'){
            connection.query(UpdateVitoriaB, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'empate'){
            connection.query(UpdateEmpateB, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'derrota'){
            connection.query(UpdateDerrotaB, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });
            
        }


    },

    async PontosSerieAMundo(req, res){

        let body = req.body;

        let UpdateVitoria = `UPDATE mundo_serie_a SET 
        pontos = pontos + 3,
        jogos = jogos + 1,
        vitorias = vitorias + 1
        WHERE time = "${body.time}"`;

        let UpdateEmpate = `UPDATE mundo_serie_a SET 
        pontos = pontos + 1,
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        let UpdateDerrota = `UPDATE mundo_serie_a SET 
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        if(body.resultado === 'vitoria'){
            connection.query(UpdateVitoria, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'empate'){
            connection.query(UpdateEmpate, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'derrota'){
            connection.query(UpdateDerrota, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });
        }

    },

    async PontosSerieBMundo(req, res){

        let body = req.body;

        let UpdateVitoria = `UPDATE mundo_serie_b SET 
        pontos = pontos + 3,
        jogos = jogos + 1,
        vitorias = vitorias + 1
        WHERE time = "${body.time}"`;

        let UpdateEmpate = `UPDATE mundo_serie_b SET 
        pontos = pontos + 1,
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        let UpdateDerrota = `UPDATE mundo_serie_b SET 
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        if(body.resultado === 'vitoria'){
            connection.query(UpdateVitoria, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'empate'){
            connection.query(UpdateEmpate, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'derrota'){
            connection.query(UpdateDerrota, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });
        }

    },

    async PontosSerieCMundo(req, res){

        let body = req.body;

        let UpdateVitoria = `UPDATE mundo_serie_c SET 
        pontos = pontos + 3,
        jogos = jogos + 1,
        vitorias = vitorias + 1
        WHERE time = "${body.time}"`;

        let UpdateEmpate = `UPDATE mundo_serie_c SET 
        pontos = pontos + 1,
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        let UpdateDerrota = `UPDATE mundo_serie_c SET 
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        if(body.resultado === 'vitoria'){
            connection.query(UpdateVitoria, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'empate'){
            connection.query(UpdateEmpate, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'derrota'){
            connection.query(UpdateDerrota, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });
        }

    },
    async PontosChampions(req, res){

        let body = req.body;

        let UpdateVitoria = `UPDATE champions_league SET 
        pontos = pontos + 3,
        jogos = jogos + 1,
        vitorias = vitorias + 1
        WHERE time = "${body.time}"`;

        let UpdateEmpate = `UPDATE champions_league SET 
        pontos = pontos + 1,
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        let UpdateDerrota = `UPDATE champions_league SET 
        jogos = jogos + 1
        WHERE time = "${body.time}"`;

        if(body.resultado === 'vitoria'){
            connection.query(UpdateVitoria, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'empate'){
            connection.query(UpdateEmpate, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });

        } else if(body.resultado === 'derrota'){
            connection.query(UpdateDerrota, (err, result) => {
                if(err) return console.log(err);
                console.log('Atualizado no banco: ' + body.resultado + ' para o time ' + body.time);
                return res.status(200).send(result);
            });
        }

    },
}