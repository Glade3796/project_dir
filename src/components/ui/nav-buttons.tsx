
import { Button } from "@/components/ui/button";

export function NavButtons() {
	return (
		<div className='flex items-center justify-between'>
			<Button variant='ghost' className='rounded-full p-2'>
				<ArrowLeftIcon className='h-5 w-5' />
			</Button>
			<Button variant='ghost' className='rounded-full p-2'>
				<ArrowRightIcon className='h-5 w-5' />
			</Button>
			<Button variant='ghost' className='rounded-full p-2'>
				<XIcon className='h-5 w-5' />
			</Button>
		</div>
	);
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='m12 19-7-7 7-7' />
			<path d='M19 12H5' />
		</svg>
	);
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='M5 12h14' />
			<path d='m12 5 7 7-7 7' />
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
