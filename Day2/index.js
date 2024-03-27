(function counter() {
  const buttons = document.querySelectorAll('.btn-counter');
  let count = 0;

  buttons.forEach(function(button){
    button.addEventListener('click', function() {
      if (button.classList.contains('decrease')){
        count--;
      } else if (button.classList.contains('increase')){
        count++;
      }
      const counter = document.querySelector('.counter')
      counter.textContent = count;
    })
  })
})()