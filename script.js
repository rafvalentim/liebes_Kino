const filmes = [
    "Agente Stone - Netflix",
    "Os Suspeitos - Netflix",
    "It 2 - HBO",
    "Assassino sem rastro - HBO",
    "Louca Obsessão - Prime",
    "Um lugar secreto - Prime",
    "Silêncio dos Inocentes - Prime",
    "A tale of 2 sisters - Star+",
    "Rise of the planet of the apes - Star+",
    "Face/Off - Star+"
];

const resultado = document.getElementById("resultado");
const sortearBtn = document.getElementById("sortearBtn");

function sortearFilme() {
    // Desabilitar o botão durante a animação
    sortearBtn.disabled = true;

    // Tempo de animação em milissegundos (5 segundos)
    const tempoAnimacao = 5000;
    const intervaloTempo = 20;
    const startTime = Date.now();
    let contador = 0;

    const animacao = setInterval(() => {
        resultado.textContent = filmes[contador % filmes.length];
        contador++;

        // Parar a animação após o tempo de animação
        if (Date.now() - startTime >= tempoAnimacao) {
            clearInterval(animacao);

            // Sortear um filme após a animação
            setTimeout(() => {
                const numeroAleatorio = Math.floor(Math.random() * filmes.length);
                resultado.textContent = `Filme Sorteado: ${filmes[numeroAleatorio]}`;
                sortearBtn.disabled = false; // Habilitar o botão novamente

                // Iniciar animação dos corações
                iniciarAnimacaoCoracoes();
            }, intervaloTempo);
        }
    }, intervaloTempo);
}

function iniciarAnimacaoCoracoes() {
    const backgroundHearts = document.querySelector(".background-hearts");
    backgroundHearts.style.animation = "float 10s linear infinite";

    // Defina a opacidade inicial para tornar os corações visíveis
    setTimeout(() => {
        const hearts = document.querySelectorAll(".background-hearts::before, .background-hearts::after");
        hearts.forEach((heart) => {
            heart.style.opacity = "1";
        });
    }, 1000); // Aguarde 1 segundo para iniciar a animação dos corações
}

sortearBtn.addEventListener("click", sortearFilme);