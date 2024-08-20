"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge, Link } from "lucide-react";
import { useState } from "react";

export default function About() {
	const [showCV, setShowCV] = useState(false);
	return (
		<div className='w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6'>
			{!showCV && (
				<div className='grid gap-8'>
					<div className='grid gap-4'>
						<div className='grid gap-2'>
							<h1 className='text-3xl font-bold'>About Me</h1>
							<p className='text-muted-foreground'>
								Hi, I'm John Doe, a passionate software engineer with a love for
								building innovative and user-friendly applications. With a
								strong background in full-stack development, I've honed my
								skills in a variety of technologies and frameworks, always
								striving to stay up-to-date with the latest industry trends.
							</p>
						</div>
						<div className='grid gap-2'>
							<h2 className='text-xl font-semibold'>Key Details</h2>
							<div className='grid sm:grid-cols-2 gap-4'>
								<div className='grid gap-1'>
									<span className='font-medium'>Location:</span>
									<span>San Francisco, CA</span>
								</div>
								<div className='grid gap-1'>
									<span className='font-medium'>Experience:</span>
									<span>5+ years</span>
								</div>
								<div className='grid gap-1'>
									<span className='font-medium'>Education:</span>
									<span>Bachelor's in Computer Science</span>
								</div>
								<div className='grid gap-1'>
									<span className='font-medium'>Interests:</span>
									<span>Hiking, reading, and learning new technologies</span>
								</div>
							</div>
						</div>
					</div>
					<Button onClick={() => setShowCV(true)}>View CV</Button>
				</div>
			)}
			{showCV && (
				<div className='grid gap-8'>
					<div className='grid gap-4'>
						<div className='grid gap-2'>
							<h1 className='text-3xl font-bold'>John Doe</h1>
							<p className='text-muted-foreground'>Software Engineer</p>
						</div>
						<div className='grid gap-4'>
							<div className='grid gap-2'>
								<h2 className='text-xl font-semibold'>Work Experience</h2>
								<div className='grid gap-4'>
									<Card>
										<CardHeader>
											<CardTitle>Software Engineer</CardTitle>
											<CardDescription>Acme Inc.</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Developed and maintained full-stack web applications
												using React, Node.js, and PostgreSQL. Collaborated with
												cross-functional teams to deliver high-quality software
												solutions.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												2020 - Present
											</span>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Intern</CardTitle>
											<CardDescription>Widgets Inc.</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Contributed to the development of a mobile app using
												React Native and Firebase. Gained experience in agile
												software development practices.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												2019 - 2020
											</span>
										</CardFooter>
									</Card>
								</div>
							</div>
							<div className='grid gap-2'>
								<h2 className='text-xl font-semibold'>Education</h2>
								<div className='grid gap-4'>
									<Card>
										<CardHeader>
											<CardTitle>Bachelor's in Computer Science</CardTitle>
											<CardDescription>
												University of California, Berkeley
											</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Graduated with a focus on software engineering and
												algorithms.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												2015 - 2019
											</span>
										</CardFooter>
									</Card>
								</div>
							</div>
							<div className='grid gap-2'>
								<h2 className='text-xl font-semibold'>Skills</h2>
								<div className='flex flex-wrap gap-2'>
									<Badge>React</Badge>
									<Badge>Node.js</Badge>
									<Badge>PostgreSQL</Badge>
									<Badge>Git</Badge>
									<Badge>Agile</Badge>
									<Badge>JavaScript</Badge>
									<Badge>TypeScript</Badge>
									<Badge>CSS</Badge>
									<Badge>HTML</Badge>
								</div>
							</div>
							<div className='grid gap-2'>
								<h2 className='text-xl font-semibold'>Projects</h2>
								<div className='grid gap-4'>
									<Card>
										<CardHeader>
											<CardTitle>Personal Portfolio</CardTitle>
											<CardDescription>
												A modern and responsive portfolio website
											</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Designed and developed a personal portfolio website
												using React, Next.js, and Tailwind CSS. Showcased my
												work and provided information about my background and
												skills.
											</p>
										</CardContent>
										<CardFooter>
											<Link href='#' className='text-primary'>
												View Project
											</Link>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Todo App</CardTitle>
											<CardDescription>
												A simple and intuitive task management application
											</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Built a Todo application using React, Redux, and
												Firebase. Implemented features like task creation,
												completion, and deletion, as well as user
												authentication.
											</p>
										</CardContent>
										<CardFooter>
											<Link href='#' className='text-primary'>
												View Project
											</Link>
										</CardFooter>
									</Card>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-between'>
						<Button variant='link' onClick={() => setShowCV(false)}>
							Back to About
						</Button>
						<Button>Simplify to One-Page CV</Button>
					</div>
				</div>
			)}
		</div>
	);
}
