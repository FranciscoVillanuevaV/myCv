import Ball from './Ball';
import ReactDOM from 'react-dom';

const BallsEffectMobile = event => {
	let x = event.touches[0].pageX + "px";
  let y = event.touches[0].pageY + "px"; 
	const rootEl = document.createElement('div')
	document.body.appendChild(rootEl)
	ReactDOM.render(
		<Ball x = {x} y = {y}/>,
		rootEl
	)
	window.setTimeout(() => rootEl.remove(), 1000);
}

export default BallsEffectMobile;