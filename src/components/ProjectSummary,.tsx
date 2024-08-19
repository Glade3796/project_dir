import { Suspense } from "react";
import { SummaryLayout } from "./layouts/SummaryLayout";
import { SummaryFilterNav } from "./navbars/SummaryFilterNav";

export default function ProjectSummary() {
	function SummaryLayoutFallback() {
		return <h3>loading summaries</h3>;
	}
	return (
		<Suspense fallback={<SummaryLayoutFallback />}>
			<SummaryLayout />
		</Suspense>
	);
}
