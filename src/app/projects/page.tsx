// import { useSearchParams } from "next/navigation";
import { projectList } from "../.data/projectList";
import ProjectURLSelector from "../../components/client/ProjectURLSelector";

export default function Projects() {
	// const searchParams = useSearchParams();
	// console.log(searchParams.get("project"));
	const projects = projectList;
	return (
		<main className='flex min-h-screen flex-col items-center  p-4'>
			{/* <h1>Projects</h1> */}

			<ProjectURLSelector />
		</main>
	);
}
