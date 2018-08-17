import React, { Component } from 'react';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.resize = this.resize.bind(this);
	}
	componentDidMount() {}
	resize(e) {
		e.preventDefault();
		let greatestHeight = 0;
		let fronts = document.querySelectorAll('.front');
		let backs = document.querySelectorAll('.back');
		// let frontHeight = e.currentTarget.children[0].children[0].offsetHeight;
		// let backHeight = e.currentTarget.children[0].children[1].offsetHeight;
		// if (frontHeight > backHeight) {
		// 	e.currentTarget.children[0].children[1].style.height = frontHeight + 'px';
		// } else {
		// 	e.currentTarget.children[0].children[0].style.height = backHeight + 'px';
		// }
		for (let i = 0; i < fronts.length; i++) {}
		console.log('test', test[1].offsetHeight);
	}
	render() {
		const experiences = [1, 2];
		return (
			<div id="experience-parent">
				<h1>Experience</h1>
				<h4 style={{ marginTop: 0, color: 'black' }}>Tap for details</h4>
				<div id="jobs-parent">
					<div
						className="flip-container"
						onLoad={this.resize}
						onClick={e => {
							e.preventDefault();
							e.currentTarget.classList.toggle('flip');
						}}
					>
						<div className="flipper">
							<div className="job-parent front">
								<div className="job-icon-parent">
									<img
										id="job-icon"
										src="https://vignette.wikia.nocookie.net/powerlisting/images/1/18/Yin-Yang.png/revision/latest?cb=20121028014051"
									/>
								</div>
								<div className="job-info-parent">
									<h3 id="job-title">This is a job title</h3>
									<p>Company Name</p>
									<p>11-11-1111 - 11-11-1111</p>
									<p>
										Migas pitchfork banh mi master cleanse ugh. Salvia venmo
										palo santo raclette messenger bag franzen normcore jianbing.{' '}
									</p>
								</div>
							</div>
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">This is a job title</h3>
									<ul>
										<li>Keytar bitters slow-carb authentic cliche.</li>{' '}
										<li>
											Fam brunch meh, gluten-free vaporware etsy pok pok green
											juice retro craft beer.
										</li>
										<li>
											Unicorn ennui leggings skateboard pinterest. Mlkshk cred
											synth actually.
										</li>
										<li>
											Unicorn ennui leggings skateboard pinterest. Mlkshk cred
											synth actually.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div
						className="flip-container"
						onLoad={this.resize}
						onClick={e => {
							e.preventDefault();
							e.currentTarget.classList.toggle('flip');
						}}
					>
						<div className="flipper">
							<div className="job-parent front">
								<div className="job-icon-parent">
									<img
										id="job-icon"
										src="https://vignette.wikia.nocookie.net/powerlisting/images/1/18/Yin-Yang.png/revision/latest?cb=20121028014051"
									/>
								</div>
								<div className="job-info-parent">
									<h3 id="job-title">This is a job title</h3>
									<p>Company Name</p>
									<p>11-11-1111 - 11-11-1111</p>
									<p>
										Migas pitchfork banh mi master cleanse ugh. Salvia
										venNEEVVERmo palo santo raclette NEVER messenger bag franzen
										normcore jianbing.{' '}
									</p>
								</div>
							</div>
							<div className="job-parent back">
								<div className="job-info-parent-back">
									<h3 id="job-title">This is a job title</h3>
									<ul>
										<li>
											Keytar bitters slow-carb authentic cliche weird weird
											weird.
										</li>{' '}
										<li>
											Fam brunch meh, gluten-free vaporware etsy pok pok green
											juice retro craft beer.
										</li>
										<li>
											Unicorn ennui leggings skateboard pinterest. dif cred
											synth actually.
										</li>
										<li>Unicorn ennui ljknsdly.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Experience;
