const $ = (id) => document.getElementById(id);

function validateLogin() {

}

function toggleButton() {

}

function updateRemainingCharacters() {
  $('counter').innerText = 500 - this.value.length;
}

window.onload = () => {
  $('login').onclick = validateLogin;
  $('agreement').onchange = toggleButton;
  $('textarea').oninput = updateRemainingCharacters;
};
