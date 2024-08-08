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

export function SummaryCard() {
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
					<CardTitle>Social Media App</CardTitle>
					<CardDescription>A modern social media platform</CardDescription>
				</div>
			</CardHeader>
			<CardContent className='grid gap-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<CircleCheckIcon className='w-5 h-5 text-green-500' />
						<span className='text-sm font-medium'>Live</span>
					</div>
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
						<span className='text-sm font-medium'>Technologies</span>
					</div>
					<div className='flex flex-wrap gap-2'>
						<Badge>React</Badge>
						<Badge>Node.js</Badge>
						<Badge>MongoDB</Badge>
						<Badge>GraphQL</Badge>
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
