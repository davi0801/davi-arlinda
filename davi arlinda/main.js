const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}




const contadores = document.querySelectorAll(".contador");
const tempoOobjetivo1 = new date (" 25-10-05t00:00:00");
contadores[0].textContent = calculatempo (tempoOobjetivo1);

function calculatempo(tempoOobjetivo1);
let tempoatual1 = new date();
let tempofinal = tempoOobjetivo1 - tempoatual1;
    let segundos = math.floor(tempofinal/1000);
let minutos = math.floor (segundos\60);
let horas = math.floor (minutos/60);
let dias = math.floor ( horas/24);

segundos % = 60;
minutos % = 60;
horas % = 24;
