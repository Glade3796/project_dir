// import { useSearchParams } from "next/navigation";
import { projectList } from "../.data/projectList";
import ProjectURLSelector from "../../components/client/ProjectURLSelector";
import { SummaryFilterNav } from "@/components/navbars/SummaryFilterNav";

export default function Projects() {
	// const searchParams = useSearchParams();
	// console.log(searchParams.get("project"));
	const projects = projectList;
	return (
		<>

			{/* <h1>Projects</h1> */}

			<ProjectURLSelector />
		</>
	);
}
