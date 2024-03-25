const button = document.querySelector('button');
const body = document.querySelector('body');
const color = ['blue', 'red', 'pink', 'orange', 'yellow', 'green', 'grey', 'violet'];

function clr() {
  const index = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[index]
}

button.addEventListener('click', clr);