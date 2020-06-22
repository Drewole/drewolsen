
(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('a[href*="#"]');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

//Adds the background to the navigation bar on scroll
window.addEventListener('scroll', addNavBkg);

function addNavBkg(ev) {
	const navBar = document.getElementById('nav-wrap');
	let windowWidth = window.innerWidth;
	let scrollFromTop = window.scrollY;
	if (windowWidth >= 768 && scrollFromTop >= 130) {
		navBar.classList.add('scroll');
	} else {
		if (navBar.classList.contains('scroll')) {
			navBar.classList.remove('scroll');
		}
	}
}
