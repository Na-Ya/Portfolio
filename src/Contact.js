import React from 'react';

const Contact = () => {
	const projects = [1, 2, 3];
	return (
		<div id="contact-parent">
			<h1>Contact</h1>

			<div id="contact-icons-parent">
				<a
					className="icon-link"
					href="https://github.com/na-ya"
					target="_blank"
				>
					{' '}
					<i className="fa fa-github fa-4x" aria-hidden="true" />{' '}
				</a>
				<a
					href="https://www.linkedin.com/in/nabil-yafai/"
					className="icon-link"
					target="_blank"
				>
					<i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
				</a>
				<a
					href="mailto:nabilyafai90@gmail.com"
					className="icon-link"
					target="_blank"
				>
					<i className="fa fa-envelope fa-4x" aria-hidden="true" />{' '}
				</a>
			</div>
		</div>
	);
};
export default Contact;
