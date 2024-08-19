function dateText() {
        if (searchParams.has("update")) {
                if (searchParams.getAll("update").includes("Recent")) {
                        return "Most Recent";
                }
                return `This ${searchParams.get("update")}`;
        }
        return "Update";
}
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
                        // For the "Recent" case, we do not need a date range.
                        // We'll handle this directly in the filtering logic.
                        return { recent: true };
                default:
                        start = new Date(0); // Set to epoch for no filtering.
        }
        end = new Date(); // Now
        return { start, end };
};
function applyFilters()  {
        let filteredProjects = projectList;

        if (searchParams.has("completed")) {
                filteredProjects = filteredProjects.filter(
                        (project) => String(project.completed) === searchParams.get("completed")
                );
        }

        if (searchParams.has("live")) {
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
                        const dateRange = updateFilter ? calculateDateRange(updateFilter) : null;
                        filteredProjects = filteredProjects.filter(
                          (project) =>
                                dateRange &&
                                new Date(project.lastUpdate) >= (dateRange.start || new Date(0)) &&
                                new Date(project.lastUpdate) <= (dateRange?.end || new Date())
                        );
                }
        }

        return filteredProjects;
};

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
};

const filteredAndSortedProjects = sortProjects(applyFilters());