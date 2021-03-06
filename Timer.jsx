import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state={
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	componentWillMount(){
		this.getTimeUntil(this.props.timeEnd);
	}

	// componentDidMount(){
	// 	setInterval( () => this.getTimeUntil(this.props.timeEnd), 1000);
	// }

	leading0(num){
		return num<10 ? '0'+ num : num;
	}

	getTimeUntil(timeEnd) {
	//	const time = new Date().getTime(timeEnd) - new Date().getTime();

	//	console.log(Date(timeEnd).getTime());
		console.log(Date.now())

		// const seconds = Math.floor((time/1000)%60);
		// const minutes = Math.floor((time/1000/60)%60);
		// const hours = Math.floor(time/(1000*60*60)%24);

		// this.setState({	hours, minutes, seconds });
	}

	render(){
		return(
			<div>
				<div className='Clock-hours'>{this.leading0(this.state.hours)} hours</div>
				<div className='Clock-minutes'>{this.leading0(this.state.minutes)} minutes</div>
				<div className='Clock-seconds'>{this.leading0(this.state.seconds)} seconds</div>
			</div>
		)
	}
}

export default Timer;