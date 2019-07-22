import "Assets/style.css";
import ICON from "Assets/icon.png";
import DATA from "Assets/data.xml";
import Util from "Util/util";
import Velocity from "velocity-animate/velocity";

function component() {
  if (process.env.NODE_ENV === "production") {
    console.log("Looks like we are in production mode!");
  } else {
    console.log("Looks like we are in development mode!");
  }

  const element = document.createElement("div");
  const image = new Image();

  element.innerHTML = `hello webpack ! I am vision !!`;
  element.classList.add("hello");
  image.src = ICON;
  element.appendChild(image);

  Velocity(
    element,
    {
      translateY: "135px",
      backgroundColor: ["#222", "#043d99"]
    },
    {
      easing: [1000, 15],
      duration: "3000"
    }
  );

  console.log(DATA, Util.isWexin());
  return element;
}

document.body.appendChild(component());
