import { Button } from "@/components/ui/button";
import { SummaryCard } from "../cards/SummaryCard";
import { projectList } from "@/app/.data/projectList";
import { SummaryFilterNav } from "../navbars/SummaryFilterNav";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
export function SummaryLayout() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const calculateDateRange = (filter: string) => {
		const now = new Date();
		let start, end;

		switch (filter) {
			case "Week":
				start = new Date(now.setDate(now.getDate() - 7));
				break;
			case "Month":
				start = new Date(now.setMonth(now.getMonth() - 1));
				break;
			case "Year":
				start = new Date(now.setFullYear(now.getFullYear() - 1));
				break;
			case "Recent":
				return { recent: true };
			default:
				start = new Date(0); // Set to epoch for no filtering.
		}
		end = new Date(); // Now
		return { start, end };
	};
	function applyFilters() {
		let filteredProjects = projectList;

		if (searchParams.get("completed") === "true") {
			filteredProjects = filteredProjects.filter(
				(project) => String(project.completed) === searchParams.get("completed")
			);
		}

		if (searchParams.get("live") === "true") {
			filteredProjects = filteredProjects.filter(
				(project) => String(project.functioning) === searchParams.get("live")
			);
		}

		if (searchParams.has("tech")) {
			const techFilters = searchParams.getAll("tech");
			filteredProjects = filteredProjects.filter((project) =>
				techFilters.every((tech) => project.tech.includes(tech))
			);
		}

		if (searchParams.has("type")) {
			const typeFilters = searchParams.getAll("type");
			filteredProjects = filteredProjects.filter((project) =>
				typeFilters.every((type) => project.type.includes(type))
			);
		}

		if (searchParams.has("progress")) {
			const progressFilter = searchParams.get("progress");
			filteredProjects = filteredProjects.filter(
				(project) =>
					progressFilter &&
					project.progress >= parseInt(progressFilter.split("-")[0]) &&
					project.progress <= parseInt(progressFilter.split("-")[1])
			);
		}

		if (searchParams.has("update")) {
			const updateFilter = searchParams.get("update");
			if (updateFilter === "Recent") {
				filteredProjects = filteredProjects.sort(
					(a, b) =>
						new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
				);
				filteredProjects = filteredProjects.slice(0, 1);
			} else {
				const dateRange = updateFilter
					? calculateDateRange(updateFilter)
					: null;
				filteredProjects = filteredProjects.filter(
					(project) =>
						dateRange &&
						new Date(project.lastUpdate) >= (dateRange.start || new Date(0)) &&
						new Date(project.lastUpdate) <= (dateRange?.end || new Date())
				);
			}
		}

		return filteredProjects;
	}

	function sortProjects(projects: any[]) {
		const sortParam = searchParams.get("sort");
		return projects.sort((a, b) => {
			if (sortParam === "asc") {
				return new Date(a.update).getTime() - new Date(b.update).getTime();
			} else if (sortParam === "desc") {
				return new Date(b.update).getTime() - new Date(a.update).getTime();
			}
			return 0; // Default, no sorting
		});
	}

	function SummaryFilterNavFallback() {
		return <h3>loading FilterNav</h3>;
	}
	const filteredAndSortedProjects = sortProjects(applyFilters());
	const data = projectList;
	return (
		<>
			<Suspense fallback={<SummaryFilterNavFallback />}>
				<SummaryFilterNav />
			</Suspense>
			<main className='flex min-h-screen flex-col items-center  p-4'>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{filteredAndSortedProjects.map((project) => (
						<Link
							key={project.id}
							href={{
								pathname: "/projects",
								query: { project: project.queryParam },
							}}
						>
							<SummaryCard project={project} />
						</Link>
					))}
					<div className='bg-background rounded-lg shadow-md p-6'>
						<h3 className='text-lg font-semibold mb-2'>Card 3</h3>
						<p className='text-muted-foreground mb-4'>
							This is a third summary card with a title, description, and a
							button.
						</p>
						<Button size='sm'>Learn More</Button>
					</div>
					<div className='bg-background rounded-lg shadow-md p-6'>
						<h3 className='text-lg font-semibold mb-2'>Card 4</h3>
						<p className='text-muted-foreground mb-4'>
							This is a fourth summary card with a title, description, and a
							button.
						</p>
						<Button size='sm'>Learn More</Button>
					</div>
				</div>
			</main>
		</>
	);
}
