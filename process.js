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
  primeiraDataDiasDoMes.setMonth(primeiraDataDiasDoMes.getMonth() + 1)
  primeiraDataDiasDoMes.setDate(primeiraDataDiasDoMes.getDate() - primeiraDataDiasDoMes.getDate())
  primeiraDataDiasDoMes = primeiraDataDiasDoMes.getDate()
  console.log(primeiraDataDiasDoMes);

  let resultadoAnos = segundaData.getFullYear() - primeiraData.getFullYear();
  let resultadoMeses;
  if (segundaData.getMonth() < primeiraData.getMonth()) {
    resultadoMeses = (segundaData.getMonth() + (12 * (resultadoAnos > 0))) - primeiraData.getMonth();
    resultadoAnos -= 1;
  }else {
    resultadoMeses = segundaData.getMonth() - primeiraData.getMonth();
  }
  
  let resultadoDias;
  if (segundaData.getDate() < primeiraData.getDate()) {
      resultadoDias = (primeiraDataDiasDoMes - primeiraData.getDate()) + segundaData.getDate();
      if (resultadoMeses > 0 ) {
          resultadoMeses -= 1;
      }else {
          resultadoMeses = 11;
          resultadoAnos -= 1; 
      }
  }else {
      resultadoDias = segundaData.getDate() - primeiraData.getDate();
  }
  
  
  document.getElementById(
    "Resultado"
  ).innerHTML = `<br><br><br><br><span class="ResultadoFull">existem  <span class="ResultadoAnos">${resultadoAnos} ano(s)</span>,
  <span class="ResultadoMeses">${resultadoMeses} meses(s)</span> 
  <span class="ResultadoDia">${resultadoDias} dia(s)</span> entre as datas</span>`;
});
