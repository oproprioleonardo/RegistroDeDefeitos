var nseries = [];
var tproblemas = [];
var aparelhos = [];
var relatorios = [];

function cadastrar() {
	let nserie = document.getElementById("nserie").value;
	let tproblema = document.getElementById("pb").value;
	let aparelho = document.getElementById("ap").value;
	let relatorio = document.getElementById("rel").value;

	if (nserie == "" || rel == "") return;

	let posicao = nseries.length;

	nseries[posicao] = nserie;
	tproblemas[posicao] = tproblema;
	aparelhos[posicao] = aparelho;
	relatorios[posicao] = relatorio;

	let elemento = document.createElement("div");
	elemento.id = "registro";
	elemento.innerHTML = `
	
	<h3>Registro nº${posicao+1}</h3>
	<h5>Número de série:</h5> ${nserie} 
	<h5>Tipo do problema:</h5> ${tproblema} 
	<h5>Aparelho:</h5> ${aparelho} 
	<h5>Relatório:</h5> ${relatorio} 

	`

	document.getElementById("listaRg").insertAdjacentElement('beforeend', elemento);
}

function limpar() {
	document.querySelector(".cadastro").reset();
}