import './style.css'
import ICON from './icon.png'
import DATA from './data.xml'

function component() {
  const element = document.createElement("div");
  element.innerHTML = `hello webpack !`;
  element.classList.add('hello');
  const image = new Image()
  image.src = ICON
  element.appendChild(image)
  console.log(DATA);
  return element;
}
document.body.appendChild(component());