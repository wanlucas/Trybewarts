const $ = (id) => document.getElementById(id);

function validateLogin() {
  const email = $('email');
  const password = $('password');

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else window.alert('Email ou senha inválidos.');
}

function toggleButton() {
  const btn = $('submit-btn');

  if (this.checked) btn.disabled = false;
  else btn.disabled = true;
}

function updateRemainingCharacters() {
  $('counter').innerText = 500 - this.value.length;
}

window.onload = () => {
  $('login').onclick = validateLogin;
  $('agreement').onchange = toggleButton;
  $('textarea').oninput = updateRemainingCharacters;
};
