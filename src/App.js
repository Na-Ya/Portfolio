import React, { Component } from 'react';
import './App.css';
import { Navbar, About, Projects, Experience, Contact } from './directory';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<About />
				<Projects />
				<Experience />
				<Contact />
			</div>
		);
	}
}

export default App;
