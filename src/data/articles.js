import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Hi      ,I’m Charles, Front-end Developer",
		description:
			"I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.",

		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img src="" alt="random" className="randImage" />
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "",
		title: "Hi      ,I’m Charles, Front-end Developer",
		description:
			"I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, ReactNative and Flutter.",
		style: ``,

		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
