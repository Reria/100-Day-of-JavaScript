const textareas = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function count() {
  const text = textareas.value;
  const lengthText =  text.length;
  counter.innerHTML = `${lengthText}`;
}

textarea.addEventListener('keyup', count);