const DIVprimeiraData = document.getElementById("Data1");
const DIVsegundaData = document.getElementById("Data2");

document.getElementById("DIVenviar").addEventListener("click", (e) => {
  let primeiraData = new Date(DIVprimeiraData.value);
  let segundaData = new Date(DIVsegundaData.value);
  let resultado;
  if (primeiraData == undefined && segundaData == undefined) {
    return console.log("coloca as datas");
  } else if (primeiraData >= segundaData) {
    primeiraData = new Date(DIVprimeiraData.value);
    segundaData = new Date(DIVsegundaData.value);
    resultado = primeiraData - segundaData;
  } else if (primeiraData < segundaData) {
    primeiraData = new Date(DIVprimeiraData.value);
    segundaData = new Date(DIVsegundaData.value);
    resultado = segundaData - primeiraData;
  } else {
    return console.log("Erro no codigo");
  }
  let meses = (primeiraData.getMonth()) - segundaData;

  const resultadoSegundos = Math.floor(resultado / 1000);
  const resultadoMinutos = Math.floor(resultado / 1000 / 60);
  const resultadoHoras = Math.floor(resultado / 1000 / 60 / 60);
  const resultadoDias = Math.floor(resultado / 1000 / 60 / 60 / 24);
  const resultadoAnos = Math.floor(resultado / 1000 / 60 / 60 / 24 / 365);
  /* console.log(resultadoSegundos - (resultadoMinutos * 60) + " Segundos");
  console.log(resultadoMinutos - (resultadoHoras * 60) + " Minutos");
  console.log(resultadoHoras - (resultadoDias * 24) + " Horas"); */
  document.getElementById(
    "Resultado"
  ).innerHTML = `<br><br><br><br><span class="ResultadoFull">existem  <span class="ResultadoAnos">${resultadoAnos} ano(s)</span> e 
  <span class="ResultadoDia">${resultadoDias  - (resultadoAnos * 365)} dia(s)</span> entre as datas</span>`;
});
