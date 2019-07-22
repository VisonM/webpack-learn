import Util from "Util/util";
import Velocity from "velocity-animate";

const print = () => {
  Util.isWexin()
    ? console.log("hey! this is weixin browser")
    : console.log("hey! this isn't weixin browser");
};
const element = document.createElement("div");
function getComponent() {
  const btn = document.createElement("button");

  element.innerHTML = `hello webpack chunkName`;
  btn.innerHTML = "Click me and check the console!!!";
  btn.onclick = print;
  element.appendChild(btn);

  return import(/* webpackChunkName:"velocity-animate" */ "velocity-animate")
    .then(Velocity => {
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
    })
    .catch(error => "An error occurred while loading the component");
}
getComponent().then(component => {
  document.body.appendChild(element);
});
