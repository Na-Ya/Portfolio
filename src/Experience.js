import React, { Component } from 'react';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0
		};
		this.resize = this.resize.bind(this);
	}
	componentDidMount() {
		this.resize();
		window.addEventListener('resize', this.resize);
		window.addEventListener('resize', () => {
			this.setState({ width: window.innerWidth });
		});
	}
	resize(e) {
		if (e) {
			e.preventDefault();
		}
		let greatestHeight = 0;
		let fronts = document.querySelectorAll('.front');
		let backs = document.querySelectorAll('.back');
		fronts.forEach(front => (front.style.height = 'auto')); //resetting heights when viewport size is changed
		backs.forEach(front => (front.style.height = 'auto'));
		for (let i = 0; i < fronts.length; i++) {
			if (fronts[i].offsetHeight > greatestHeight) {
				greatestHeight = fronts[i].offsetHeight;
			}
			if (backs[i].offsetHeight > greatestHeight) {
				greatestHeight = backs[i].offsetHeight;
			}
		}
		for (let i = 0; i < fronts.length; i++) {
			fronts[i].style.height = greatestHeight + 'px';
			backs[i].style.height = greatestHeight + 'px';
		}
	}
	render() {
		return (
			<div id="experience-parent">
				<h1>Experience</h1>
				<h4 style={{ marginTop: 0, color: 'black' }}>Tap for details</h4>
				<div id="jobs-parent">
					<div
						className="flip-container"
						onClick={e => {
							e.preventDefault();
							e.currentTarget.classList.toggle('flip');
						}}
					>
						<div className="flipper">
							<div className="job-parent front">
								<div className="job-info-parent">
									<h3 id="job-title" className="center">
										Teaching Fellow
									</h3>
									<p className="darker">Fullstack Academy of Code</p>
									<p className="darker">07/2018 - Present</p>
									<p>
										Fullstack Academy is an immersive software engineering
										coding bootcamp located in New York City and Chicago.
									</p>
								</div>
							</div>
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">Teaching Fellow</h3>
									<ul>
										<li>
											Daily mentorship of 28 students on engineering technical
											concepts, algorithms, software architecture, debugging
											strategies and writing clean code
										</li>{' '}
										<li>
											Leading bi-weekly interactive review lectures covering
											implementation of full-range of APIs and best practices of
											Fullstack's NERDS stack
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div
						className="flip-container"
						onClick={e => {
							e.preventDefault();
							e.currentTarget.classList.toggle('flip');
						}}
					>
						<div className="flipper">
							<div className="job-parent front">
								<div className="job-info-parent">
									<h3 id="job-title">Teaching Fellow</h3>
									<p className="darker">Fullstack Academy of Code</p>
									<p className="darker">07/2018 - Present</p>
									<p>
										Fullstack Academy is an immersive software engineering
										coding bootcamp located in New York City and Chicago.
									</p>
								</div>
							</div>
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">Teaching Fellow</h3>
									<ul>
										<li>
											Daily mentorship of 28 students on engineering technical
											concepts, algorithms, software architecture, debugging
											strategies and writing clean code
										</li>{' '}
										<li>
											Leading bi-weekly interactive review lectures covering
											implementation of full-range of APIs and best practices of
											Fullstack's NERDS stack
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div
						className="flip-container"
						onClick={e => {
							e.preventDefault();
							e.currentTarget.classList.toggle('flip');
						}}
					>
						<div className="flipper">
							<div className="job-parent front">
								<div className="job-info-parent">
									<h3 id="job-title">Teaching Fellow</h3>
									<p className="darker">Fullstack Academy of Code</p>
									<p className="darker">07/2018 - Present</p>
									<p>
										Fullstack Academy is an immersive software engineering
										coding bootcamp located in New York City and Chicago.
									</p>
								</div>
							</div>
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">Teaching Fellow</h3>
									<ul>
										<li>
											Daily mentorship of 28 students on engineering technical
											concepts, algorithms, software architecture, debugging
											strategies and writing clean code
										</li>{' '}
										<li>
											Leading bi-weekly interactive review lectures covering
											implementation of full-range of APIs and best practices of
											Fullstack's NERDS stack
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{window.innerWidth >= 1280 ? (
						<div className="space-holder">
							<div className="front" />
							<div className="back" />
						</div>
					) : null}
				</div>
			</div>
		);
	}
}
export default Experience;
