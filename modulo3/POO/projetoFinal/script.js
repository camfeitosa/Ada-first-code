// - criação de uma classe para conter o canvas em si, incluindo métodos para desenhar nele
// - criação de uma classe para as bolas saltitantes, contendo atributos de posição X e Y, e velocidade X e Y, com metodos para atualizar a sua posição baseado na sua velocidade
// - deteção de colisão entre as bolas e as bordas do canvas, por exemplo verificar se a posição da bola vai alem dos limites do canvas, e nesse caso mudar a direção dela.


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
const largura = (canvas.width = window.innerWidth);
const altura = (canvas.height = window.innerHeight);

function init() {
    boucingBalls()
    setInterval(boucingBalls, 1000)
}

function boucingBalls(){
    apagar(ctx)
    desenhar(ctx, random(150, 1800), random(50, 600), 140)
    desenhar(ctx, random(150, 1800), random(50, 600), 140)
    desenhar(ctx, random(150, 1800), random(50, 600), 140)
    desenhar(ctx, random(150, 1800), random(50, 600), 140)
    desenhar(ctx, random(150, 1800), random(50, 600), 140)
    // requestAnimationFrame(boucingBalls);
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function desenhar(ctx, x, y, raio) {
    ctx.beginPath(); // inicia um "traço"
    ctx.strokeStyle = "#000"; // define a cor do traço
    ctx.fillStyle = randomRGB(); // define a cor do preenchimento
    ctx.arc(x, y, raio, 0, 2 * Math.PI); // traça um círculo na posição x e y, com um raio, com iniçio no angulo 0, e terminando no angulo 2PI, ou seja, um círculo completo
    ctx.fill(); // preenche o circulo com a nossa cor de preenchimento
}

function apagar(ctx) {
    ctx.fillStyle = "#fff"; // define a cor de preenchimento
    ctx.fillRect(0, 0, largura, altura); // preenche um retangulo começando na coordenada X = 0, e Y = 0, e terminando na coordenada X = largura e Y = altura
}

init()