import Ball from "./Ball";
import ReactDOM from "react-dom";

const BallsEffectDesktop = (event) => {
  let x = event.pageX + "px";
  let y = event.pageY + "px";
  const rootEl = document.createElement("div");
  document.body.appendChild(rootEl);
  ReactDOM.render(<Ball x={x} y={y} />, rootEl);
  window.setTimeout(() => rootEl.remove(), 1000);
};

export default BallsEffectDesktop;