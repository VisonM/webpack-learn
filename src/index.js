import "Assets/style.css";
import ICON from "Assets/icon.png";
import DATA from "Assets/data.xml";
import Util from "Util/util";
// const Util = require('Util/util')
import Print from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const image = new Image();

  element.innerHTML = `hello webpack !`;
  element.classList.add("hello");

  image.src = ICON;

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = Print;

  element.appendChild(image);
  element.appendChild(btn);

  console.log(DATA, Util.isWexin());
  return element;
}
document.body.appendChild(component());
