function pontuacaoRankeadas(quantVitorias, quantDerrotas){
    let saldo = quantVitorias - quantDerrotas
    let resultado = "0"
    if (saldo <= 10){
        resultado = "Ferro"
    } else if(saldo <= 20){
        resultado = "Bronze"
    } else if(saldo <= 50){
        resultado = "Prata"
    } else if(saldo <= 80){
        resultado = "Ouro"
    } else if(saldo <= 90){
        resultado = "Diamante"
    } else if(saldo <= 100){
        resultado = "Lendário"
    } else{
        resultado = "Imortal"
    }
    return `O Herói tem de saldo de ${saldo} está no nível de ${resultado}`

}
console.log(pontuacaoRankeadas(100, 20))