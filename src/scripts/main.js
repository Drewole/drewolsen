//Adds the background to the navigation bar on scroll
// Wrap the require in check for window
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
