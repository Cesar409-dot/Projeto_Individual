var database = require("../database/config");

function resultadoQuiz(fkusuario) {

    var instrucaoSql = `SELECT  
    (SELECT ROUND((s.soluco / 10) * 100, 0)
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Soluço',

    (SELECT ROUND((s.astrid / 10) * 100, 0)
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Astrid',

    (SELECT ROUND((s.melequento / 10) * 100, 0)
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Melequento',

    (SELECT ROUND((s.pernadepeixe / 10) * 100, 0)
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'PernadePeixe',

    (SELECT ROUND((s.cabecadura / 10) * 100, 0)
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'CabeçaDura',

    (SELECT ROUND((s.cabecaquente / 10) * 100, 0)
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'CabeçaQuente'
		FROM resposta AS r
        WHERE fkusuario = ${fkusuario}
        ORDER BY fkquiz DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function resultadoPersona(fkusuario) {

    var instrucaoSql = `SELECT 
        (SELECT s.soluco
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Soluço',

    (SELECT s.astrid
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Astrid',

    (SELECT s.melequento
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Melequento',

    (SELECT s.pernadepeixe
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Perna_de_Peixe',

    (SELECT s.cabecadura
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Cabeça_Dura',

    (SELECT s.cabecaquente
     FROM resposta AS s
     WHERE s.fkusuario = r.fkusuario
     ORDER BY s.fkquiz DESC
     LIMIT 1) AS 'Cabeça_Quente'

FROM resposta AS r
WHERE r.fkusuario = ${fkusuario}
ORDER BY r.fkquiz DESC
LIMIT 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function resultadoGlobal() {
    var instrucaoSql = `SELECT 
    ROUND(
        (SELECT COUNT(*) 
         FROM resposta 
         WHERE soluco > astrid 
           AND soluco > melequento 
           AND soluco > pernadepeixe 
           AND soluco > cabecadura 
           AND soluco > cabecaquente)
        / (SELECT COUNT(*) FROM resposta) * 100
    , 0) AS Soluco,

    ROUND(
        (SELECT COUNT(*) 
         FROM resposta 
         WHERE astrid > soluco 
           AND astrid > melequento 
           AND astrid > pernadepeixe 
           AND astrid > cabecadura 
           AND astrid > cabecaquente)
        / (SELECT COUNT(*) FROM resposta) * 100
    , 0) AS Astrid,

    ROUND(
        (SELECT COUNT(*) 
         FROM resposta 
         WHERE melequento > soluco 
           AND melequento > astrid 
           AND melequento > pernadepeixe 
           AND melequento > cabecadura 
           AND melequento > cabecaquente)
        / (SELECT COUNT(*) FROM resposta) * 100
    , 0) AS Melequento,

    ROUND(
        (SELECT COUNT(*) 
         FROM resposta 
         WHERE pernadepeixe > soluco 
           AND pernadepeixe > astrid 
           AND pernadepeixe > melequento 
           AND pernadepeixe > cabecadura 
           AND pernadepeixe > cabecaquente)
        / (SELECT COUNT(*) FROM resposta) * 100
    , 0) AS Perna_de_Peixe,

    ROUND(
        (SELECT COUNT(*) 
         FROM resposta 
         WHERE cabecadura > soluco 
           AND cabecadura > astrid 
           AND cabecadura > melequento 
           AND cabecadura > pernadepeixe 
           AND cabecadura > cabecaquente)
        / (SELECT COUNT(*) FROM resposta) * 100
    , 0) AS Cabeca_Dura,

    ROUND(
        (SELECT COUNT(*) 
         FROM resposta 
         WHERE cabecaquente > soluco 
           AND cabecaquente > astrid 
           AND cabecaquente > melequento 
           AND cabecaquente > pernadepeixe 
           AND cabecaquente > cabecadura)
        / (SELECT COUNT(*) FROM resposta) * 100
    , 0) AS Cabeca_Quente;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

    function resultadoKpiGlobal() {
var instrucaoSql = `SELECT 
    CASE
        WHEN Soluco >= Astrid 
         AND Soluco >= Melequento 
         AND Soluco >= Perna_de_Peixe 
         AND Soluco >= Cabeca_Dura 
         AND Soluco >= Cabeca_Quente
            THEN Soluco

        WHEN Astrid >= Soluco
         AND Astrid >= Melequento
         AND Astrid >= Perna_de_Peixe
         AND Astrid >= Cabeca_Dura
         AND Astrid >= Cabeca_Quente
            THEN Astrid

        WHEN Melequento >= Soluco
         AND Melequento >= Astrid
         AND Melequento >= Perna_de_Peixe
         AND Melequento >= Cabeca_Dura
         AND Melequento >= Cabeca_Quente
            THEN Melequento

        WHEN Perna_de_Peixe >= Soluco
         AND Perna_de_Peixe >= Astrid
         AND Perna_de_Peixe >= Melequento
         AND Perna_de_Peixe >= Cabeca_Dura
         AND Perna_de_Peixe >= Cabeca_Quente
            THEN Perna_de_Peixe

        WHEN Cabeca_Dura >= Soluco
         AND Cabeca_Dura >= Astrid
         AND Cabeca_Dura >= Melequento
         AND Cabeca_Dura >= Perna_de_Peixe
         AND Cabeca_Dura >= Cabeca_Quente
            THEN Cabeca_Dura

        ELSE Cabeca_Quente
    END AS MaiorValor,

    CASE
        WHEN Soluco >= Astrid 
         AND Soluco >= Melequento 
         AND Soluco >= Perna_de_Peixe 
         AND Soluco >= Cabeca_Dura 
         AND Soluco >= Cabeca_Quente
            THEN 'Soluço'

        WHEN Astrid >= Soluco
         AND Astrid >= Melequento
         AND Astrid >= Perna_de_Peixe
         AND Astrid >= Cabeca_Dura
         AND Astrid >= Cabeca_Quente
            THEN 'Astrid'

        WHEN Melequento >= Soluco
         AND Melequento >= Astrid
         AND Melequento >= Perna_de_Peixe
         AND Melequento >= Cabeca_Dura
         AND Melequento >= Cabeca_Quente
            THEN 'Melequento'

        WHEN Perna_de_Peixe >= Soluco
         AND Perna_de_Peixe >= Astrid
         AND Perna_de_Peixe >= Melequento
         AND Perna_de_Peixe >= Cabeca_Dura
         AND Perna_de_Peixe >= Cabeca_Quente
            THEN 'Perna-de-Peixe'

        WHEN Cabeca_Dura >= Soluco
         AND Cabeca_Dura >= Astrid
         AND Cabeca_Dura >= Melequento
         AND Cabeca_Dura >= Perna_de_Peixe
         AND Cabeca_Dura >= Cabeca_Quente
            THEN 'Cabeça-Dura'
        ELSE 'Cabeça-Quente'
    END AS personagem

FROM vwGlobal;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    }

    function resultadoKpiBar() {
        var instrucaoSql = `SELECT
    CASE
        WHEN Soluco >= Astrid
         AND Soluco >= Melequento
         AND Soluco >= Perna_de_Peixe
         AND Soluco >= Cabeca_Dura
         AND Soluco >= Cabeca_Quente
            THEN 'Soluço'

        WHEN Astrid >= Soluco
         AND Astrid >= Melequento
         AND Astrid >= Perna_de_Peixe
         AND Astrid >= Cabeca_Dura
         AND Astrid >= Cabeca_Quente
            THEN 'Astrid'

        WHEN Melequento >= Soluco
         AND Melequento >= Astrid
         AND Melequento >= Perna_de_Peixe
         AND Melequento >= Cabeca_Dura
         AND Melequento >= Cabeca_Quente
            THEN 'Melequento'

        WHEN Perna_de_Peixe >= Soluco
         AND Perna_de_Peixe >= Astrid
         AND Perna_de_Peixe >= Melequento
         AND Perna_de_Peixe >= Cabeca_Dura
         AND Perna_de_Peixe >= Cabeca_Quente
            THEN 'Perna-de-Peixe'

        WHEN Cabeca_Dura >= Soluco
         AND Cabeca_Dura >= Astrid
         AND Cabeca_Dura >= Melequento
         AND Cabeca_Dura >= Perna_de_Peixe
         AND Cabeca_Dura >= Cabeca_Quente
            THEN 'Cabeça-Dura'

        ELSE 'Cabeça-Quente'
    END AS PersonagemVencedor
FROM vwPersona
LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    }

    function resultadoKpiRadar() {
        var instrucaoSql = `SELECT
    CASE
        WHEN Soluco >= Astrid
         AND Soluco >= Melequento
         AND Soluco >= Perna_de_Peixe
         AND Soluco >= Cabeca_Dura
         AND Soluco >= Cabeca_Quente
            THEN 'Inovador'

        WHEN Astrid >= Soluco
         AND Astrid >= Melequento
         AND Astrid >= Perna_de_Peixe
         AND Astrid >= Cabeca_Dura
         AND Astrid >= Cabeca_Quente
            THEN 'Determinação'

        WHEN Melequento >= Soluco
         AND Melequento >= Astrid
         AND Melequento >= Perna_de_Peixe
         AND Melequento >= Cabeca_Dura
         AND Melequento >= Cabeca_Quente
            THEN 'Sarcarsmo'

        WHEN Perna_de_Peixe >= Soluco
         AND Perna_de_Peixe >= Astrid
         AND Perna_de_Peixe >= Melequento
         AND Perna_de_Peixe >= Cabeca_Dura
         AND Perna_de_Peixe >= Cabeca_Quente
            THEN 'Sábio'

        WHEN Cabeca_Dura >= Soluco
         AND Cabeca_Dura >= Astrid
         AND Cabeca_Dura >= Melequento
         AND Cabeca_Dura >= Perna_de_Peixe
         AND Cabeca_Dura >= Cabeca_Quente
            THEN 'Impulsivo'

        ELSE 'Arrogante'
    END AS PersonalidadeVencedora
FROM vwPersona
LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    }

module.exports = {
    resultadoQuiz,
    resultadoPersona,
    resultadoGlobal,
    resultadoKpiBar,
    resultadoKpiRadar,
    resultadoKpiGlobal
}
