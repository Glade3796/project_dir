export interface ProjectList {
	id: number;
	name: string;
	description: string;
	functioning: boolean; // Consider using a more specific type if possible
	note: string;
	progress: number;
	image: string;
	url: string;
	github: string;
	tech: string[];
}
