const logo = document.getElementById('logo_espe');
let rotation = 0;

function rotateLogo() {
  rotation += 1;
  logo.style.transform = `rotateY(${rotation}deg)`;

  if (rotation < 360) {
    requestAnimationFrame(rotateLogo);
  }
}

logo.addEventListener('click', () => {
  rotateLogo();
});
