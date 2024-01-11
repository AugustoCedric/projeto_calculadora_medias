const form = document.getElementById("form-atividade");
const imgAprovado =
  '<img src="./img/aprovado.png" alt="Emoji Celebrando"></img>';
const imgReprovado =
  '<img src="./img/reprovado.png" alt="Emoji decepcionado"></img>';

const atividades = [];
const notas = [];

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  autalizarTabela();
  autalizarMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtidade = document.getElementById("nome-atividade");
  const inputNotaAtidade = document.getElementById("nota-atividade");

  if (atividades.includes(inputNomeAtidade.value)) {
    alert(`A atividade ${inputNomeAtidade.value} já foi inserida`);
  } else {
    atividades.push(inputNomeAtidade.value);
    notas.push(parseFloat(inputNotaAtidade.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeAtidade.value}</td>`;
    linha += `<td>${inputNotaAtidade.value}</td>`;
    linha += `<td>${
      inputNotaAtidade.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeAtidade.value = "";
  inputNotaAtidade.value = "";
}

function autalizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function autalizarMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
