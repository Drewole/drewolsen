import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
	<ul className="social">
		<li>
			<a className="twitter" rel="noopener" href="https://twitter.com/drewole">
				<AiOutlineTwitter />
			</a>
		</li>
		<li>
			<a className="instagram" rel="noopener" href="https://instagram.com/drewole">
				<AiFillInstagram />
			</a>
		</li>
		{/* <li>
			<a className="github" rel="noopener" href="https://github.com/drewole">
				<AiOutlineGithub />
			</a>
		</li> */}
	</ul>
);

export default SocialLinks;
