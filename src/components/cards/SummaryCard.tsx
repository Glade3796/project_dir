// Note: Summary card component is a simplified version of the Project card component.
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { ProjectList } from "@/app/types/type";
import Image from "next/image";
interface SumamryCardProps {
	project: ProjectList;
}

export function SummaryCard(props: SumamryCardProps) {
	const { project } = props;
	function handleCardClick() {}
	return (
		<Card className='w-full max-w-md animate-fade-in cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors'>
			<CardHeader className='flex items-center gap-4'>
				<Image
					src='/placeholder.svg'
					alt='App Icon'
					width='48'
					height='48'
					className='rounded-full'
					style={{ aspectRatio: "48/48", objectFit: "cover" }}
				/>
				<div className='space-y-1 w-full text-center'>
					<CardTitle>{project.name}</CardTitle>
					<CardDescription>{project.blurb}</CardDescription>
				</div>
			</CardHeader>
			<CardContent className='grid gap-4'>
				<div className='flex items-center justify-between'>
					{project.functioning ? (
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
							{project.lastUpdate}
						</span>
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Progress</span>
						<span className='text-sm font-medium'>{project.progress}%</span>
					</div>
					<Progress value={project.progress} className='h-2 rounded-full' />
				</div>
				{/* <div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Description</span>
					</div>
					<p className='text-sm text-muted-foreground'>
						This is a social media app that allows users to connect with
						friends, share updates, and engage with content.
					</p>
				</div> */}
				{/* <div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Technologies</span>
					</div>
					<div className='flex flex-wrap gap-2'>
						<Badge>React</Badge>
						<Badge>Node.js</Badge>
						<Badge>MongoDB</Badge>
						<Badge>GraphQL</Badge>
					</div>
				</div> */}
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
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='10' />
			<path d='m9 12 2 2 4-4' />
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
