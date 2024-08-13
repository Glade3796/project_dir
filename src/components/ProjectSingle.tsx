import { useSearchParams } from "next/navigation";
import { ProjectCard } from "./cards/ProjectCard";
import { projectList } from "@/app/.data/projectList";
import type { ProjectList } from "@/app/types/type";
import { ProjectCarousel } from "./ProjectCarousel";

export default function ProjectSingle() {
	const searchParams = useSearchParams();
	const url = searchParams.get("project");

	const data =
		projectList.find((project) => project.queryParam === url) || null;
	console.log("single", data);
	if (!data) {
		console.error("Project not found");
		return <div>Project not found</div>;
	}
	return <main className='flex min-h-screen flex-col items-center  p-4'>
		<ProjectCarousel setInitalSlideIndex={data.id - 1} />
	</main>;
}
