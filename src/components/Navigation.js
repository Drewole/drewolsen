import React from 'react';
import { MdFace, MdCardTravel, MdDescription } from 'react-icons/md';

import SiteLogo from './SiteLogo';

//Lets add the class to add shading to the nav when scrolling
if (typeof window !== `undefined`) {
	window.addEventListener('scroll', addNavBkg);
}

function addNavBkg(ev) {
	const navBar = document.getElementById('nav-wrap');
	let windowWidth = window.innerWidth;
	let scrollFromTop = window.scrollY;
	if (windowWidth >= 768 && scrollFromTop >= 130) {
		navBar.classList.add('scroll');
	}
	else {
		if (navBar.classList.contains('scroll')) {
			navBar.classList.remove('scroll');
		}
	}
}

const isCurrent = (anchor, pathname) => (pathname.endsWith(anchor) ? 'current' : '');

class Navigation extends React.Component {
	state = {
		pathname : '#home'
	};
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({ pathname: window.location.href });
		});
	}
	render() {
		const { pathname = '' } = this.state;
		return (
			<nav id="nav-wrap">
				<SiteLogo />
				<ul id="nav" className="nav">
					<li className={isCurrent('#about', pathname)}>
						<a className="about" href="#about">
							<span>
								<MdFace />
							</span>
							About
						</a>
					</li>
					<li className={isCurrent('#portfolio', pathname)}>
						<a href="#portfolio" className="portfolio">
							<span>
								<MdCardTravel />
							</span>
							Portfolio
						</a>
					</li>
					<li className={isCurrent('#resume', pathname)}>
						<a
							className="resume"
							rel="noopener"
							href="https://drive.google.com/file/d/1i8chX2JYvaPvsJd__pZwLBONGygN0sDs/view?usp=sharing"
						>
							<span>
								<MdDescription />
							</span>
							Resumé
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;
