import React, { Component } from 'react';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.resize = this.resize.bind(this);
	}
	componentDidMount() {
		this.resize();
		window.addEventListener('resize', this.resize);
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
						onClick={e => {
							e.preventDefault();
							e.currentTarget.classList.toggle('flip');
						}}
					>
						<div className="flipper">
							<div className="job-parent front">
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
