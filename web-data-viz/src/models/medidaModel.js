var database = require("../database/config");

function buscarUltimasMedidas(fkusuario, limite_linhas) {
    console.log(`model`)
    var instrucaoSql = `SELECT fkusuario, soluco, astrid, melequento, pernadepeixe, cabecadura, cabecaquente
                            FROM resposta
                                WHERE fkusuario = ${fkusuario};
                                    ORDER BY fkusuario DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/*function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
*/
module.exports = {
    buscarUltimasMedidas
    //buscarMedidasEmTempoReal
}
