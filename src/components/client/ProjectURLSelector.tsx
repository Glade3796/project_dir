"use client";

import { useSearchParams } from "next/navigation";
import ProjectSummary from "../ProjectSummary,";
import ProjectSingle from "../ProjectSingle";

export default function ProjectURLSelector() {
	const searchParams = useSearchParams();
	const url = searchParams.get("project");
	const isSingle = url === "all" || !url ? false : true;
	return <>{isSingle ? <ProjectSingle  /> : <ProjectSummary />}</>;
}
