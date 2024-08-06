import { ProjectList } from "../types/type";

export const projectList: ProjectList[] = [
	{
		id: 1,
		name: "Social Media App",
		description:
			"Social media app that allows users to post, like, and comment on posts.",
		functioning: "false",
		note: "Vercel down",
		progress: 100,
		image: "Project Image",
		url: "https://yet-another-social-media-app.vercel.app/",
		github: "https://github.com/Glade3796/yet-another-social-media-app",
		tech: ["Next.JS", "Clerk", "Radix", "React", "postgreSQL"],
	},
	{
		id: 2,
		name: "L'forum",
		description:
			"Full Stack react app that allows users to post, like, and comment on posts.",
		functioning: "false",
		note: "Vercel down",
		progress: 100,
		image: "Project Image",
		url: "https://lforum.onrender.com/",
		github: "https://github.com/Glade3796/l-lorum",
		tech: ["Vite", "React", "Express", "postgreSQL"],
	},
];
