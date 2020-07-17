import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { MdCardTravel } from 'react-icons/md';

import SocialLinks from './SocialLinks';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className }) => (
	<StaticQuery
		query={graphql`
			{
				file(relativePath: { eq: "pineTreesBkg.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 2400) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={(data) => {
			// Set ImageData.
			const imageData = data.childImageSharp.fluid;
			return (
				<BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`#2f2b41`}>
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

const BannerImage = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default BannerImage;
