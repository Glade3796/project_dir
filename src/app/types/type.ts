export interface ProjectList {
	id: number;
	role: string;
	contributions: string;
	queryParam: string;

	name: string;
	blurb: string;
	description: string;
	functioning: boolean; // Consider using a more specific type if possible
	note?: notes[];
	progress: number;
	image: string;
	url: string;
	github: string;
	tech: string[];
	lastUpdate: string;
	started: string;
	completed: string;
	screenshot: string;
}
type notes = { id: number; title: string; text: string; date?: string };

export interface ButtonVariantProps {
	variant:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
	size: "default" | "sm" | "lg" | "icon";
}
