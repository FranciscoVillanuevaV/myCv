import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './styles.css';

class Ball extends React.Component {
	render() {
		return (
			<Spinner className="ball" style={{left: `${this.props.x}`, top: `${this.props.y}`}} animation="grow"/>
		)
	}
}

export default Ball;