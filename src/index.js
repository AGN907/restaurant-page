import './style.css';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';

function App() {
  const content = document.querySelector('#content')

  const homeBtn = document.querySelector('[data-layout="home"')
  const menuBtn = document.querySelector('[data-layout="menu"')
  const contactBtn = document.querySelector('[data-layout="contact"')

  homeBtn.addEventListener('click', changeToHome)
  menuBtn.addEventListener('click', changeToMenu)
  contactBtn.addEventListener('click', changeToContact)

  function changeToHome() {
    content.innerHTML = '';
    content.innerHTML = Home();
  }

  function changeToMenu() {
    content.innerHTML = '';
    content.append(Menu().sectionName);
    content.appendChild(Menu().sectionGrid);
  }

  function changeToContact() {
    content.innerHTML = '';
    content.appendChild(Contact().sectionName);
    content.appendChild(Contact().sectionGrid);
  }

  return { content };
}

const app = App();

app.content.innerHTML = Home()