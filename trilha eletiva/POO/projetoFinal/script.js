class Canvas {
    constructor() {
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.width = (this.canvas.width = window.innerWidth);
      this.height = (this.canvas.height = window.innerHeight);
    }
  
    clear() {
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(0, 0, this.width, this.height);
    }
  
    desenharCirculo(x, y, radius, fillColor) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#000";
      this.ctx.fillStyle = fillColor;
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }
  
  class BouncingBall {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = Canvas.random(150, 1800);
      this.y = Canvas.random(50, 600);
      this.radius = 140;
      this.fillColor = Canvas.randomRGB();
      this.dx = Canvas.random(-5, 5); // Velocidade horizontal
      this.dy = Canvas.random(-5, 5); // Velocidade vertical
    }
  
    colisao(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
    
        // Verificar se as bolas estão colidindo
        if (distance < this.radius + otherBall.radius) {
          // Inverter as direções das bolas
          const tempDx = this.dx;
          const tempDy = this.dy;
          this.dx = otherBall.dx;
          this.dy = otherBall.dy;
          otherBall.dx = tempDx;
          otherBall.dy = tempDy;
        }
      }
      
    update() {
      // Atualizar a posição da bola
      this.x += this.dx;
      this.y += this.dy;
  
      // Verificar colisões com as bordas do canvas
      if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
        this.dx = -this.dx;
      }
      if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
        this.dy = -this.dy;
      }
    }
  
    draw() {
      this.canvas.desenharCirculo(this.x, this.y, this.radius, this.fillColor);
    }
  }
  
  Canvas.random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  Canvas.randomRGB = function () {
    return `rgb(${Canvas.random(0, 255)},${Canvas.random(0, 255)},${Canvas.random(0, 255)})`;
  };
  
  function init() {
    const canvas = new Canvas();
    const bouncingBalls = [];
  
    for (let i = 0; i < 3; i++) {
      bouncingBalls.push(new BouncingBall(canvas));
    }
  
    function animate() {
        canvas.clear();
      
        for (let i = 0; i < bouncingBalls.length; i++) {
          const ball = bouncingBalls[i];
          ball.update();
          ball.draw();
      
          for (let j = i + 1; j < bouncingBalls.length; j++) {
            ball.colisao(bouncingBalls[j]);
          }
        }
      
        requestAnimationFrame(animate);
      }
      
    animate();
  }
  
  init();
  