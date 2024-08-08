import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectList } from "@/app/types/type";

export function ProjectCard(props: { data: ProjectList }) {
	const { data } = props;

	return (
		<Card className='w-full max-w-md animate-fade-in'>
			<CardHeader className='flex items-center gap-4'>
				<img
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
				<div className='flex items-center justify-between'>
					{data.functioning ? (
						<div className='flex items-center gap-2'>
							<CircleCheckIcon className='w-5 h-5 green-500' />
							<span className='text-sm font-medium'>Live</span>
						</div>
					) : (
						<div className='flex items-center gap-2'>
							<MinusIcon className='w-5 h-5 green-500' />
							<span className='text-sm font-medium'>Down</span>
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
						<span className='text-sm font-medium'>85%</span>
					</div>
					<Progress value={85} className='h-2 rounded-full' />
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Description</span>
					</div>
					<p className='text-sm text-muted-foreground'>
						This is a social media app that allows users to connect with
						friends, share updates, and engage with content.
					</p>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Live App</span>
						<Link
							href='#'
							className='text-sm text-primary underline'
							prefetch={false}
						>
							example.com
						</Link>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>GitHub</span>
						<Link
							href='#'
							className='text-sm text-primary underline'
							prefetch={false}
						>
							example/app
						</Link>
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Technologies</span>
					</div>
					<div className='flex flex-wrap gap-2'>
						<Badge>React</Badge>
						<Badge>Node.js</Badge>
						<Badge>MongoDB</Badge>
						<Badge>GraphQL</Badge>
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Timeline</span>
					</div>
					<div className='flex flex-col gap-1'>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>Start Date</span>
							<span className='text-sm'>January 1, 2023</span>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>
								Completion Date
							</span>
							<span className='text-sm'>June 30, 2023</span>
						</div>
					</div>
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Screenshot</span>
					</div>
					<img
						src='/placeholder.svg'
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
						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>Note 1</span>
							<Button variant='ghost' size='icon'>
								<InfoIcon className='w-4 h-4' />
							</Button>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>Note 2</span>
							<Button variant='ghost' size='icon'>
								<InfoIcon className='w-4 h-4' />
							</Button>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>Note 3</span>
							<Button variant='ghost' size='icon'>
								<InfoIcon className='w-4 h-4' />
							</Button>
						</div>
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

function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='red'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M5 12h14' />
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
