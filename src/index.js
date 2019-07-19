import "Assets/style.css";
import ICON from "Assets/icon.png";
import DATA from "Assets/data.xml";
import Util from "Util/util";
// const Util = require('Util/util')
import { print } from "./print";

function component() {
  if (process.env.NODE_ENV === "production") {
    console.log("Looks like we are in production mode!");
  } else {
    console.log("Looks like we are in development mode!");
  }

  const element = document.createElement("div");
  const btn = document.createElement("button");
  const image = new Image();

  element.innerHTML = `hello webpack ! I am vision !!`;
  element.classList.add("hello");

  image.src = ICON;

  btn.innerHTML = "Click me and check the console!!!";
  btn.onclick = print;

  element.appendChild(image);
  element.appendChild(btn);

  console.log(DATA, Util.isWexin());
  return element;
}
document.body.appendChild(component());
