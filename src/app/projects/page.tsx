// import { useSearchParams } from "next/navigation";
import { projectList } from "../data/projectList";

export default function Projects() {
	// const searchParams = useSearchParams();
	// console.log(searchParams.get("project"));
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>Projects</h1>
			<section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{projectList.map((project) => (
					<div key={project.id}>{project.name}</div>
				))}
			</section>
		</main>
	);
}
