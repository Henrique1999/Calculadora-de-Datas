const DIVprimeiraData = document.getElementById("Data1");
const DIVsegundaData = document.getElementById("Data2");

document.getElementById("Data1").addEventListener("change", (e) => {
  console.log(e.target.value);
  // document.getElementById("Data1").insertAdjacentHTML("afterend", `<span>${e.target.value}</span>`)
  if (DIVprimeiraData.value !== "" && DIVsegundaData.value !== "") {
    Calculardatas();
    return;
  }
  console.log("ta vazio");
});

document.getElementById("Data2").addEventListener("change", (e) => {
  if (DIVsegundaData.value !== "" && DIVprimeiraData.value !== "") {
    Calculardatas();
    return;
  }
  console.log("ta vazio");
});

function Calculardatas() {
  let primeiraRecebeValor = DIVprimeiraData.value.split("-");
  let primeiraAno = primeiraRecebeValor[0];
  let primeiraMes = primeiraRecebeValor[1];
  let primeiraDia = primeiraRecebeValor[2];

  let segundaRecebeValor = DIVsegundaData.value.split("-");
  let segundaAno = segundaRecebeValor[0];
  let segundaMes = segundaRecebeValor[1];
  let segundaDia = segundaRecebeValor[2];

  let primeiraData = new Date(`${primeiraAno}-${primeiraMes}-${primeiraDia}T10:00:00-03:00`);
  let segundaData = new Date(`${segundaAno}-${segundaMes}-${segundaDia}T10:00:00-03:00`);

  if (primeiraData == undefined && segundaData == undefined) {
    return console.log("coloca as datas");
  } else if (primeiraData <= segundaData) {
    primeiraData = new Date(`${primeiraAno}-${primeiraMes}-${primeiraDia}T10:00:00-03:00`);
    segundaData = new Date(`${segundaAno}-${segundaMes}-${segundaDia}T10:00:00-03:00`);
  } else if (primeiraData > segundaData) {
    primeiraData = new Date(`${segundaAno}-${segundaMes}-${segundaDia}T10:00:00-03:00`);
    segundaData = new Date(`${primeiraAno}-${primeiraMes}-${primeiraDia}T10:00:00-03:00`);
  } else {
    return console.log("Erro no codigo");
  }
  resultado = segundaData - primeiraData;
  let primeiraDataDiasDoMes = new Date(primeiraData);
  primeiraDataDiasDoMes.setMonth(primeiraDataDiasDoMes.getMonth() + 1);
  primeiraDataDiasDoMes.setDate(
    primeiraDataDiasDoMes.getDate() - primeiraDataDiasDoMes.getDate()
  );
  primeiraDataDiasDoMes = primeiraDataDiasDoMes.getDate();

  let resultadoAnos = segundaData.getFullYear() - primeiraData.getFullYear();
  let resultadoMeses;
  if (segundaData.getMonth() < primeiraData.getMonth()) {
    resultadoMeses =
      segundaData.getMonth() +
      12 * (resultadoAnos > 0) -
      primeiraData.getMonth();
    resultadoAnos -= 1;
  } else {
    resultadoMeses = segundaData.getMonth() - primeiraData.getMonth();
  }

  let resultadoDias;
  if (segundaData.getDate() < primeiraData.getDate()) {
    resultadoDias =
      primeiraDataDiasDoMes - primeiraData.getDate() + segundaData.getDate();
    if (resultadoMeses > 0) {
      resultadoMeses -= 1;
    } else {
      resultadoMeses = 11;
      resultadoAnos -= 1;
    }
  } else {
    resultadoDias = segundaData.getDate() - primeiraData.getDate();
  }

  let respostaHTML = `
    <br><span class="ResultadoFull">existem
  `;

  let resultadoArray =[];

  if (resultadoDias > 0) {
    if (resultadoDias > 1) {
      respostaHTML += `<span class="ResultadoDia">${resultadoDias} dias</span>`
      resultadoArray.push(`<span class="ResultadoDia">${resultadoDias} dias</span>`);
    } else {
      respostaHTML += `<span class="ResultadoDia">1 dia</span>`
      resultadoArray.push(`<span class="ResultadoDia">${resultadoDias} dia</span>`);

    }
  }

  if (resultadoMeses > 0) {
    if (resultadoMeses > 1) {
      respostaHTML += `<span class="ResultadoMeses">${resultadoMeses} meses</span>, `;
      resultadoArray.push(`<span class="ResultadoMeses">${resultadoMeses} meses</span>`);
    } else {
      respostaHTML += `<span class="ResultadoMeses">1 mes</span>, `;
      resultadoArray.push(`<span class="ResultadoMeses">${resultadoMeses} mes</span>`);
    }
  }

  if (resultadoAnos > 0) {
    if (resultadoAnos > 1) {
      respostaHTML += `<span class="ResultadoAnos">${resultadoAnos} anos</span>, `;
      resultadoArray.push(`<span class="ResultadoAnos">${resultadoAnos} anos</span>`);
    } else {
      respostaHTML += `<span class="ResultadoAnos">1 ano</span>, `;
      resultadoArray.push(`<span class="ResultadoAnos">${resultadoAnos} ano</span>`);
    }
  }


 respostaHTML += ` entre as datas</span>`;
 let RespostaV2 = ``;
if (resultadoArray.length === 3) {
  RespostaV2 = `<br><span class="ResultadoFull">existem ${resultadoArray[2]}, ${resultadoArray[1]} e ${resultadoArray[0]} entre as datas</span>`;
}

if (resultadoArray.length === 2) {
  RespostaV2 = `<br><span class="ResultadoFull">existem ${resultadoArray[1]} e ${resultadoArray[0]} entre as datas</span>`;
}

if (resultadoArray.length === 1) {
  RespostaV2 = `<br><span class="ResultadoFull">existem ${resultadoArray[0]} entre as datas</span>`;
}
 if (resultadoArray.length === 0) {
  RespostaV2 = `<br><span class="ResultadoFull">é o mesmo dia</span>`
 }

/*  let ArrayRespostaHTML = [];

 if (resultadoAnos > 0) {ArrayRespostaHTML.push(resultadoAnos)}
 if (resultadoMeses > 0) {ArrayRespostaHTML.push(resultadoMeses)}
 if (resultadoDias > 0) {ArrayRespostaHTML.push(resultadoDias)} */
 

  document.getElementById(
    "Resultado"
  ).innerHTML = RespostaV2;
  // ).innerHTML = respostaHTML;
}


