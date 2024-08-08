// MainNavbar component is a navigation bar that displays links to different pages of the application. It also contains a dropdown menu for the Projects page, which displays a list of project categories.
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { projectList } from "@/app/.data/projectList";

import { ProjectList } from "@/app/types/type";

export function MainNavbar() {
	const list: ProjectList[] = projectList;

	return (
		<header className='bg-background sticky top-0 z-40 w-full border-b'>
			<div className='container flex h-16 items-center justify-between px-4 sm:px-6 md:px-8'>
				<Link
					href='/'
					className='flex items-center gap-2 font-bold text-lg'
					prefetch={false}
				>
					{/* <BriefcaseIcon className='h-6 w-6' /> */}
					<span>Cyber_glade</span>
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' size='icon' className='md:hidden'>
							<MenuIcon className='h-6 w-6' />
							<span className='sr-only'>Toggle navigation</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						side='right'
						className='w-full max-w-xs bg-background p-6'
					>
						<div className='flex flex-col gap-6'>
							<DropdownMenuItem>
								<Link
									href='/'
									className='text-sm font-medium transition-colors hover:text-primary'
								>
									Home
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link
									href='/about'
									className='text-sm font-medium transition-colors hover:text-primary'
								>
									About
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Link
											href='/projects'
											className='text-sm font-medium transition-colors hover:text-primary flex items-center justify-between'
											prefetch={false}
										>
											Projects
											<ChevronRightIcon className='h-4 w-4' />
										</Link>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										side='right'
										className='w-full max-w-xs bg-background p-4'
									>
										<div className='flex flex-col gap-2'>
											<DropdownMenuItem>
												<Link
													href={{
														pathname: "/projects",
														query: { project: "all" },
													}}
													className='text-sm font-medium transition-colors hover:text-primary'
													prefetch={false}
												>
													- ALL PROJECTS -
												</Link>
											</DropdownMenuItem>
											{list.map((project: ProjectList) => (
												<DropdownMenuItem>
													<Link
														href={{
															pathname: "/projects",
															query: { project: project.queryParam },
														}}
														className='text-sm font-medium transition-colors hover:text-primary'
														prefetch={false}
													>
														{project.name}
													</Link>
												</DropdownMenuItem>
											))}
										</div>
									</DropdownMenuContent>
								</DropdownMenu>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link
									href='#'
									className='text-sm font-medium transition-colors hover:text-primary'
									prefetch={false}
								>
									Contact
								</Link>
							</DropdownMenuItem>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
				<nav className='hidden items-center gap-6 md:flex'>
					<Link
						href='/'
						className='text-sm font-medium transition-colors hover:text-primary'
						prefetch={false}
					>
						Home
					</Link>
					<Link
						href='/about'
						className='text-sm font-medium transition-colors hover:text-primary'
						prefetch={false}
					>
						About
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Link
								href='/projects'
								className='text-sm font-medium transition-colors hover:text-primary flex items-center gap-1'
								prefetch={false}
							>
								Projects
								<ChevronDownIcon className='h-4 w-4' />
							</Link>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							side='bottom'
							className='w-full max-w-xs bg-background p-4'
						>
							<div className='flex flex-col gap-2'>
								<DropdownMenuItem>
									<Link
										href={{
											pathname: "/projects",
											query: { project: "all" },
										}}
										className='text-sm font-medium transition-colors hover:text-primary'
										prefetch={false}
									>
										- ALL PROJECTS -
									</Link>
								</DropdownMenuItem>
								{list.map((project: ProjectList) => (
									<DropdownMenuItem>
										<Link
											href={{
												pathname: "/projects",
												query: { project: project.queryParam },
											}}
											className='text-sm font-medium transition-colors hover:text-primary'
											prefetch={false}
										>
											{project.name}
										</Link>
									</DropdownMenuItem>
								))}
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
					<Link
						href='#'
						className='text-sm font-medium transition-colors hover:text-primary'
						prefetch={false}
					>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
}

// function BriefcaseIcon(props: MainNavbarProps) {
// 	return (
//     <cyber_tree></cyber_tree>
// 		// <svg
// 		// 	{...props}
// 		// 	xmlns='http://www.w3.org/2000/svg'
// 		// 	width='24'
// 		// 	height='24'
// 		// 	viewBox='0 0 24 24'
// 		// 	fill='none'
// 		// 	stroke='currentColor'
// 		// 	strokeWidth='2'
// 		// 	strokeLinecap='round'
// 		// 	strokeLinejoin='round'
// 		// >
// 		// 	<path d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
// 		// 	<rect width='20' height='14' x='2' y='6' rx='2' />
// 		// </svg>
// 	);
// }

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m6 9 6 6 6-6' />
		</svg>
	);
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m9 18 6-6-6-6' />
		</svg>
	);
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</svg>
	);
}
