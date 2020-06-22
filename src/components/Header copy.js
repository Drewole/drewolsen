import React from 'react';

import Sitetitle from './Sitetitle';
import Navigation from './Navigation';
import Banner from './Banner';
import ScrollDown from './ScrollDown';

const Header = () => (
	<header id="home">
		<Sitetitle />
		<Navigation />
		<Banner />
		<ScrollDown />
	</header>
);

export default Header;
