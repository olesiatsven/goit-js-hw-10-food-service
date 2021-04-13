const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggle = document.querySelector('.theme-switch__toggle');
const savedInLocalStorage = localStorage.getItem('theme');
const bodyRef = document.querySelector('body');

bodyRef.classList.add(Theme.LIGHT);

if (savedInLocalStorage === Theme.DARK) {
  bodyRef.classList.replace(Theme.LIGHT,Theme.DARK)
  themeToggle.setAttribute('checked', 'checked');
};

themeToggle.addEventListener('click', changeTheme);
function changeTheme() {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)
    localStorage.setItem('theme', bodyRef.getAttribute('class'))
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT)
    localStorage.setItem('theme', bodyRef.getAttribute('class'))
  }
}

