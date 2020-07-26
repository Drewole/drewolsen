import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { siteMetadata } from '../../gatsby-config';

import profilePic from '../images/profilepic.jpg';

const availabilityText = siteMetadata.available === true ? 'available!' : 'unavailable :(';
const available = siteMetadata.available === true ? 'available' : '';
const About = () => (
	<section id="about">
		<div className="row">
			<div className="three columns pic">
				<img className="profile-pic" src={profilePic} alt="Portrait illustration of Drew Olsen" />
				<p className={available}>
					Have work? I'm <span>{availabilityText}</span>
				</p>
			</div>
			<div className="nine columns main-col">
				<h2>About Me</h2>
				<p>
					I am a Front-End Web Developer with around ten years of experience. Some might consider me a
					Designer that can Code. I have an eye for design but also understand, can implement, and explain the
					technical side of Front End Website Development.
				</p>
				<p>
					My start in Web Development began ten years ago and I have strived to be on the cutting edge of the
					new web technologies ever since. I am always trying to increase the quality of work I can provide my
					clients, and ensure I am using the most appropriate technology for their project.
				</p>
				<p>
					Have a project you might want my help with?{' '}
					<a className="form-link" href="https://forms.gle/s9VwLkV3KA4xjcmk6">
						Let's chat.
					</a>
				</p>

				<h3>My skills include but are not limited to:</h3>
				<p className="small">
					HTML5, SCSS, Responsive Design, JS, React, Gatsby, Sketch, Figma, Adobe Suite, Netlify, Webpack,
					Docker, Git, Gulp, PHP and Wordpress(From-scratch themes and plugins).
				</p>
				<div className="row">
					<div className="columns contact-details">
						<h2>Contact Details</h2>
						<h4>Drew Olsen</h4>
						<p className="address">
							<span>
								11432 Zion Cir
								<br /> Bloomington, MN 55437
							</span>
						</p>
						<p className="contact-info">
							<a href="tel:952.381.5559">
								<span>
									<FaPhone />
								</span>
								952.381.5559
							</a>
							<a className="form-link" href="https://forms.gle/s9VwLkV3KA4xjcmk6">
								<span>
									<FaEnvelope />
								</span>
								Contact Me
							</a>
						</p>
					</div>
					<div className="columns download">
						<a
							href="https://drive.google.com/file/d/1i8chX2JYvaPvsJd__pZwLBONGygN0sDs/view?usp=sharing"
							className="button"
						>
							<span>
								<MdDescription />
							</span>
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
