const $ = (id) => document.getElementById(id);

function validateLogin() {

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
