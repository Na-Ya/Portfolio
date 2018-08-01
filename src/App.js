import React, { Component } from 'react';
import './App.css';
import image from './images/profile.png';
import { Navbar, About, Projects } from './directory';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<About />
				<Projects />
			</div>
		);
	}
}

export default App;
