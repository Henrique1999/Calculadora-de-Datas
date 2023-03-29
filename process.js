const DIVprimeiraData = document.getElementById("Data1");
const DIVsegundaData = document.getElementById("Data2");

document.getElementById("DIVenviar").addEventListener("click", (e) => {
  let primeiraData = new Date(DIVprimeiraData.value + "GMT-0300");
  let segundaData = new Date(DIVsegundaData.value + "GMT-0300");
  if (primeiraData == undefined && segundaData == undefined) {
    return console.log("coloca as datas");
  } else if (primeiraData <= segundaData) {
    primeiraData = new Date(DIVprimeiraData.value + "GMT-0300");
    segundaData = new Date(DIVsegundaData.value + "GMT-0300");
  } else if (primeiraData > segundaData) {
    primeiraData = new Date(DIVsegundaData.value + "GMT-0300");
    segundaData = new Date(DIVprimeiraData.value + "GMT-0300");
  } else {
    return console.log("Erro no codigo");
  }
  resultado = segundaData - primeiraData;
  let primeiraDataDiasDoMes = new Date(primeiraData);
  primeiraDataDiasDoMes.setDate(primeiraDataDiasDoMes.getDate() - primeiraDataDiasDoMes.getDate())
  primeiraDataDiasDoMes = primeiraDataDiasDoMes.getDate()

  const resultadoDias = Math.floor(resultado / 1000 / 60 / 60 / 24);

  let resultadoMeses = (segundaData.getMonth() + (12 * (primeiraData.getMonth() > segundaData.getMonth()))) - primeiraData.getMonth() - (primeiraData.getMonth() > segundaData.getMonth()) + 1;

  console.log(resultadoMeses);
  
  let resultadoAnos = "*";
  document.getElementById(
    "Resultado"
  ).innerHTML = `<br><br><br><br><span class="ResultadoFull">existem  <span class="ResultadoAnos">${resultadoAnos} ano(s)</span>,
  <span class="ResultadoMeses">${resultadoMeses} meses(s)</span> 
  <span class="ResultadoDia">${resultadoDias} dia(s)</span> entre as datas</span>`;
});

/* 

  02/03/2023
  01/02/2024


  2024 - 2023 = 1
  (02 + (12 * (booleanoMes(1))) ) - 03 = 11
  ano = ano - (booleanoMes(1) ) = 0 • Anos
  (01 + (quantidadeDiasMesMin(31) * (booleanoDia(1) ) ) ) - 02  = 30 • Dias
  mes = mes - (booleanoDia(1) ) = 10 • Meses

  10 meses e 30 dias

  (diaMin > diaMax) : booleano = (0 ou 1)
  

  (mesMin > mesMax) : booleano = (0 ou 1)
  

  (anoMin > anoMax) : booleano = (0 ou 1)
  

 */



























/*   const resultadoSegundos = Math.floor(resultado / 1000);
  const resultadoMinutos = Math.floor(resultado / 1000 / 60);
  const resultadoHoras = Math.floor(resultado / 1000 / 60 / 60);
  const resultadoDias = Math.floor(resultado / 1000 / 60 / 60 / 24);
  const resultadoAnos = Math.floor(resultado / 1000 / 60 / 60 / 24 / 365); */
/* console.log(resultadoSegundos - (resultadoMinutos * 60) + " Segundos");*/
