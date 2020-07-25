import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { MdCardTravel } from 'react-icons/md';

import SocialLinks from './SocialLinks';
import BackgroundImage from 'gatsby-background-image';

const BannerImage = () => (
	<StaticQuery
		query={graphql`
			{
				file(relativePath: { eq: "pineTreesBkg.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1800) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={(query) => {
			// Set ImageData.
			const imageData = query.file.childImageSharp.fluid;
			return (
				<BackgroundImage Tag="section" className="hero-bkg" fluid={imageData} backgroundColor={`#2f2b41`}>
					<div className="row banner">
						<div className="banner-text">
							<h1 className="responsive-headline">A Designer That Can Code.</h1>
							<h3>
								A Multi-faceted Front-End Web Developer with a knack for effectively conceptualizing and
								delivering elegant, user-friendly solutions.
								<br />
								<a className="smoothscroll" href="#portfolio">
									View My Portfolio{' '}
									<span>
										<MdCardTravel />
									</span>
								</a>
							</h3>
							<hr />
							<SocialLinks />
						</div>
					</div>
				</BackgroundImage>
			);
		}}
	/>
);

export default BannerImage;
