var medidaModel = require("../models/medidaModel");

function resultadoQuiz(req, res) { 

    var fkusuario = req.body.idServer
    console.log(`Recebendo a `);
    medidaModel.resultadoQuiz(fkusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resultadoPersona(req, res) { 

    var fkusuario = req.body.idServer
    console.log(`Recebendo dados do quiz`);

    medidaModel.resultadoPersona(fkusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resultadoGlobal(req, res) { 

    console.log(`Recebendo dados globais`);

    medidaModel.resultadoGlobal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resultadoKpiBar(req, res) { 
var fkusuario = req.body.idServer
    console.log(`Recebendo dados globais`);

    medidaModel.resultadoKpiBar(fkusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resultadoKpiRadar(req, res) { 
var fkusuario = req.body.idServer
    console.log(`Recebendo dados globais`);

    medidaModel.resultadoKpiRadar(fkusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function resultadoKpiGlobal(req, res) { 
var fkusuario = req.body.idServer
    console.log(`Recebendo dados globais`);

    medidaModel.resultadoKpiGlobal(fkusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    resultadoQuiz,
    resultadoPersona,
    resultadoGlobal,
    resultadoKpiBar,
    resultadoKpiRadar,
    resultadoKpiGlobal
}