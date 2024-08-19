import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectList } from "@/app/types/type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/components/ui/tooltip";
import { useState } from "react";
import Image from "next/image";

export function ProjectCard(props: { data: ProjectList }) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { data } = props;

	const [activeNoteId, setActiveNoteId] = useState<number[]>([]);

	const progress =
		data.progress == 100
			? "text-sm font-medium text-green"
			: data.progress < 76
			? "text-sm font-medium text-mustard"
			: "text-sm font-medium";
	const modifiedUrl = data.url.replace(/^https:\/\//, "");
	const modifiedGithub = data.github.replace(/^https:\/\/github.com\//, "");
	function handleClose() {
		router.push("/projects");
	}
	function handleTechClick(tech: string) {
		router.push(`/projects?tech=${tech}`);
	}
	const pathname = usePathname();
	const handleIconClick = (id: number) => {
		setActiveNoteId((prevActiveNoteId) => {
			if (prevActiveNoteId.includes(id)) {
				// If the id is already in the array, remove it
				return prevActiveNoteId.filter((noteId) => noteId !== id);
			} else {
				// If the id is not in the array, add it
				return [...prevActiveNoteId, id];
			}
		});
	};

	return (
		<Card className='relative w-full max-w-md animate-fade-in'>
			<Button
				variant='ghost'
				size='icon'
				className='absolute top-4 right-4'
				onClick={handleClose}
			>
				<XIcon className='w-4 h-4' />
			</Button>
			<CardHeader className='flex items-center gap-4'>
				<Image
					src='/placeholder.svg'
					alt='App Icon'
					width='48'
					height='48'
					className='rounded-full'
					style={{ aspectRatio: "48/48", objectFit: "cover" }}
				/>
				<div className='space-y-1'>
					<CardTitle>{data.name}</CardTitle>
					<CardDescription>{data.description}</CardDescription>
				</div>
			</CardHeader>

			<CardContent className='grid gap-4'>
				<div className='flex items-center justify-between text-red-400'>
					{data.functioning ? (
						<div className='flex items-center gap-2'>
							<CircleCheckIcon className='w-5 h-5 text-green' />
							<span className='text-sm font-medium text-green'>Live</span>
						</div>
					) : (
						<div className='flex items-center gap-2 '>
							<CircleOffIcon className='w-5 h-5 ' />
							<span className='!important text-sm font-medium text-red '>
								Down
							</span>
						</div>
					)}
					<div className='flex items-center gap-2'>
						<CalendarDaysIcon className='w-5 h-5 text-muted-foreground' />
						<span className='text-sm text-muted-foreground'>
							Last updated: June 15, 2023
						</span>
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Progress</span>
						<span className={progress}>{data.progress}%</span>
					</div>
					<Progress value={data.progress} className='h-2 rounded-full' />
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Description</span>
					</div>
					<p className='text-sm text-muted-foreground'>{data.description}</p>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Live App</span>
						<Link
							href={data.url}
							className='text-sm text-primary underline'
							prefetch={false}
							target='_blank'
							rel='noopener noreferrer'
						>
							{modifiedUrl}
						</Link>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>GitHub</span>
						<Link
							href={data.github}
							className='text-sm text-primary underline'
							prefetch={false}
							target='_blank'
							rel='noopener noreferrer'
						>
							{modifiedGithub}
						</Link>
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Technologies</span>
					</div>
					<div className='flex flex-wrap gap-2'>
						{data.tech.map((tech, id) => (
							<Badge
								className='cursor-pointer'
								onClick={() => {
									handleTechClick(tech);
								}}
								key={id + tech}
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Timeline</span>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>Start Date</span>
							<span className='text-sm'>{data.started}</span>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>
								Completion Date
							</span>
							<span className='text-sm'>{data.completed}</span>
						</div>
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Screenshot</span>
					</div>
					<Image
						src={data.screenshot}
						alt='App Screenshot'
						width='400'
						height='200'
						className='rounded-md'
						style={{ aspectRatio: "400/200", objectFit: "cover" }}
					/>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Notes</span>
					</div>
					<div className='flex flex-col gap-1'>
						{/* Row of icons */}
						<div className='flex gap-2'>
							{data.note?.map((note, id) => (
								<TooltipProvider key={note.id}>
									<Tooltip>
										<TooltipTrigger
											onClick={() => handleIconClick(note.id)}
											className='relative cursor-pointer'
										>
											<InfoIcon className='w-4 h-4' />
											<TooltipContent className='absolute top-0 left-full ml-2'>
												<span className='font-bold'>{note.title}</span>
												<br />
												<span>{note.date}</span>
											</TooltipContent>
										</TooltipTrigger>
									</Tooltip>
								</TooltipProvider>
							))}
						</div>

						{/* Display the active note */}

						{data.note
							?.filter((note) => activeNoteId.includes(note.id))
							.map((note, id) => (
								<div key={id} className='flex flex-col gap-1'>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium'>{note.title}</span>
										<span className='text-sm text-muted-foreground'>
											{!!note.date ? `(@${note.date})` : ""}
										</span>
									</div>
									<div className='text-sm'>{note.text}</div>
								</div>
							))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='M8 2v4' />
			<path d='M16 2v4' />
			<rect width='18' height='18' x='3' y='4' rx='2' />
			<path d='M3 10h18' />
			<path d='M8 14h.01' />
			<path d='M12 14h.01' />
			<path d='M16 14h.01' />
			<path d='M8 18h.01' />
			<path d='M12 18h.01' />
			<path d='M16 18h.01' />
		</svg>
	);
}

function CircleCheckIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='#00FF00'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='10' />
			<path d='m9 12 2 2 4-4' />
		</svg>
	);
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<circle cx='12' cy='12' r='10' />
			<path d='M12 16v-4' />
			<path d='M12 8h.01' />
		</svg>
	);
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='M18 6 6 18' />
			<path d='m6 6 12 12' />
		</svg>
	);
}
function CircleOffIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='red'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path d='m2 2 20 20' />
			<path d='M8.35 2.69A10 10 0 0 1 21.3 15.65' />
			<path d='M19.08 19.08A10 10 0 1 1 4.92 4.92' />
		</svg>
	);
}
