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
		window.addEventListener('resize', this.resize);
		window.addEventListener('resize', () => {
			this.setState({ width: window.innerWidth });
		});
		this.resize();
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
			if (greatestHeight < 407) {
				greatestHeight = 407;
			}
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
									<h3 id="job-title" className="center">
										Admissions Coordinator
									</h3>
									<p className="darker">InterExchange</p>
									<p className="darker">05/2014 - 03/2018</p>
									<p>
										InterExchange manages cultural exchange programs for
										participants from more than 60 countries and for Americans
										who work and volunteer abroad.
									</p>
								</div>
							</div>
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">Admissions Coordinator</h3>
									<ul>
										<li>
											Organized all incoming documents and payment information
											for over 600 applicants per year.
										</li>
										<li>
											Created user guides, videos, and GIFs for users of our
											application platform.
										</li>
										<li>
											Assisted engineering team with testing new features for
											the application platform.
										</li>
										<li>
											Used GitHub to make edits to the InterExchange website and
											publish new content.
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
									<h3 id="job-title" className="center">
										Student Advocacy Assistant
									</h3>
									<p className="darker">NYU School of Engineering</p>
									<p className="darker">10/2013 - 05/2014</p>
									<p>
										The New York University Tandon School of Engineering is the
										engineering and applied sciences school of New York
										University.
									</p>
								</div>
							</div>
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">Student Advocacy Assistant</h3>
									<ul>
										<li>
											Developed spreadsheets, forms, brochures, and posters for
											the department.
										</li>{' '}
										<li>
											Created and organized files containing sensitive student
											documentation.
										</li>
										<li>
											Composed mass emails to students and professors on behalf
											of the department.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{window.innerWidth >= 849 ? (
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
