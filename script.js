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

function fadeCard() {
  $('main').style.animation = 'hidden 1s forwards';
  $('card').style.animation = 'fade 1s forwards';
}

function createCard(e) {
  e.preventDefault();

  const card = $('card-content');
  const data = new FormData(this);

  [...data].forEach((element) => {
    const li = document.createElement('li');

    li.innerText = `${element[0]}: ${element[1]}`;
    card.appendChild(li);
  });
  fadeCard();
}

window.onload = () => {
  $('login').onclick = validateLogin;
  $('agreement').onchange = toggleButton;
  $('textarea').oninput = updateRemainingCharacters;
  $('evaluation-form').onsubmit = createCard;
};
