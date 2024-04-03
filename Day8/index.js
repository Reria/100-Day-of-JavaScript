const words = ['seat', 'sale', 'eyes', 'mobile', 'hello', 'nunei']; // мы создаем массив слов, из которого будет складываться часть пароля

function get() {
  const chars = '0123456789!@#%^&';
  const clength = chars.length;
  let password = '';

  while (password.length < 20) {
    password += randomWord(words);
    password += chars[randomNumber(clength)];
  }

  password = password.substring(0, 16);
  document.getElementById('password').value = password;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function randomWord(wordArray) {
  const number = randomNumber(wordArray.length);
  return wordArray[number];
}
