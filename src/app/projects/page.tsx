// import { useSearchParams } from "next/navigation";
import { projectList } from "../.data/projectList";
import ProjectURLSelector from "../../components/client/ProjectURLSelector";
import { SummaryFilterNav } from "@/components/navbars/SummaryFilterNav";
import { Suspense } from "react";

export default function Projects() {
	// const searchParams = useSearchParams();
	// console.log(searchParams.get("project"));
	const projects = projectList;
	return (
		<Suspense fallback={<h3>loading url selector</h3>}>
			<ProjectURLSelector />
		</Suspense>
	);
}
