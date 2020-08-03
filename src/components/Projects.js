import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './Project';

const Projects = () => {
	const data = useStaticQuery(graphql`
		{
			allProjectsJson {
				edges {
					node {
						type
						tags
						slug
						name
						year
						id
						hasSite
						extSite
						description
						squareImg {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
						frontImg {
							childImageSharp {
								fluid(maxHeight: 700, maxWidth: 1050, cropFocus: NORTH) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	`);
	const projects = data.allProjectsJson.edges;

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Some of My Work.</h1>
					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						{projects.map(({ node: project }) => {
							const title = project.name;
							const description = project.description;
							const id = project.id;
							const hasSite = project.hasSite;
							const tags = project.tags;
							const type = project.type;
							const year = project.year;
							const extSite = project.extSite;
							const slug = project.slug;
							const squareImg = project.squareImg.childImageSharp.fluid;
							const frontImg = project.frontImg.childImageSharp.fluid;
							return (
								<Project
									id={id}
									title={title}
									hasSite={hasSite}
									year={year}
									extSite={extSite}
									description={description}
									tags={tags}
									type={type}
									slug={slug}
									squareImg={squareImg}
									frontImg={frontImg}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Projects;
