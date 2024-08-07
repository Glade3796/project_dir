import { ProjectList } from "../types/type";

export const projectList: ProjectList[] = [
	{
		id: 1,
		queryParam: "yet-another-social-media-app",
		name: "Yet Another Social Media App",
		description:
			"Social media app that allows users to post, like, and comment on posts.",
		functioning: false,
		note: "Vercel down",
		progress: 100,
		image: "Project Image",
		url: "https://yet-another-social-media-app.vercel.app/",
		github: "https://github.com/Glade3796/yet-another-social-media-app",
		tech: ["Next.JS", "Clerk", "Radix", "React", "postgreSQL"],
		lastUpdate: "2021-09-01",
		started: "2021-08-01",
		completed: "2021-09-01",
		screenshot: "https://i.imgur.com/1Q5Z2Zz.png",
	},
	{
		id: 2,
		queryParam: "l-lorum",
		name: "L'forum",
		description:
			"Full Stack react app that allows users to post, like, and comment on posts.",
		functioning: false,
		note: "Vercel down",
		progress: 100,
		image: "Project Image",
		url: "https://lforum.onrender.com/",
		github: "https://github.com/Glade3796/l-lorum",
		tech: ["Vite", "React", "Express", "postgreSQL"],
		lastUpdate: "2021-09-01",
		started: "2021-08-01",
		completed: "2021-09-01",
		screenshot: "https://i.imgur.com/1Q5Z2Zz.png",
	},
];
