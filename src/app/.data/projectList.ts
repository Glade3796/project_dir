import { ProjectList } from "../types/type";

export const projectList: ProjectList[] = [
	{
		id: 1,
		queryParam: "yet-another-social-media-app",
		name: "Yet Another Social Media App",
		description:
			"Social media app that allows users to post, like, and comment on posts.",
		functioning: true,
		note: [{ id: 1, title: "Vercel down", text: "Vercel down" }],
		progress: 50,
		image: "Project Image",
		url: "https://yet-another-social-media-app.vercel.app/",
		github: "https://github.com/Glade3796/yet-another-social-media-app",
		tech: ["Next.JS", "Clerk", "Radix", "React", "postgreSQL"],
		lastUpdate: "2021-09-01",
		started: "2021-08-01",
		completed: "2021-09-01",
		screenshot: "/placeholder.svg",
	},
	{
		id: 2,
		queryParam: "l-lorum",
		name: "L'forum",
		description:
			"Full Stack react app that allows users to post, like, and comment on posts.",
		functioning: false,
		note: [
			{ id: 1, title: "Vercel down", text: "Vercel down" },
			{ id: 2, title: "issues", text: "issues" },
		],
		progress: 100,
		image: "Project Image",
		url: "https://lforum.onrender.com/",
		github: "https://github.com/Glade3796/l-lorum",
		tech: ["Vite", "React", "Express", "postgreSQL"],
		lastUpdate: "2021-09-01",
		started: "2021-08-01",
		completed: "2021-09-01",
		screenshot: "/placeholder.svg",
	},
];
