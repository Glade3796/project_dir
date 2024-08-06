import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='flex space-x-4'>
			<Link href={`/`} className='hover:text-blue-500'>
				Home
			</Link>
			<Link href={`/about`} className='hover:text-blue-500'>
				About
			</Link>
			<Link href={`/cv`} className='hover:text-blue-500'>
				CV
			</Link>
			<Link href={`/projects`} className='hover:text-blue-500'>
				Projects
			</Link>
		</nav>
	);
}
