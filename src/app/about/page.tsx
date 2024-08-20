"use client";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";

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
								Hi, I'm Aisling (Ash-ling), a versatile and highly motivated
								Full Stack Developer with a background in the British Army. I'm
								passionate about delivering high-quality web applications and
								always strive for perfection in my work. My expertise includes
								Next.js, React, Express.js, and more.
							</p>
						</div>
						<div className='grid gap-2'>
							<h2 className='text-xl font-semibold'>Key Details</h2>
							<div className='grid sm:grid-cols-2 gap-4'>
								<div className='grid gap-1'>
									<span className='font-medium'>Location:</span>
									<span>Cambridge, United Kingdom</span>
								</div>
								<div className='grid gap-1'>
									<span className='font-medium'>Experience:</span>
									<span>Freelance Tech Dev: 3+ years</span>
								</div>
								<div className='grid gap-1'>
									<span className='font-medium'>Education:</span>
									<span>
										<ul>
											<li>- TechEducators</li>
											<li>- Anglia Ruskin University</li>
											<li>- British Army</li>
										</ul>
									</span>
								</div>
								<div className='grid gap-1'>
									<span className='font-medium'>Interests:</span>
									<ul>
										<li>- Outdoor Activities</li>
										<li>- Technology</li>
										<li>- Mental Heallth Advocacy</li>
									</ul>
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
							<h1 className='text-3xl font-bold'>Aisling Hemlock</h1>
							<p className='text-muted-foreground'>Full Stack Developer</p>
						</div>
						<div className='grid gap-4'>
							<div className='grid gap-2'>
								<h2 className='text-xl font-semibold'>Work Experience</h2>
								<div className='grid gap-4'>
									<Card>
										<CardHeader>
											<CardTitle>Freelance Full-Stack Developer</CardTitle>
											<CardDescription>Cyber_glade</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Designed and implemented dynamic web applications using
												Next.js, React, Node.js, and Express.js. Managed full
												lifecycle projects, ensuring high-quality, maintainable,
												and scalable code.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												Dec 2023 – Present
											</span>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Camp Leader</CardTitle>
											<CardDescription>The Bushcraft Company</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Delivered wilderness courses. Managed a team delivering
												high quality outdoor education to under 18&apos;s.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												May 2019 – Aug 2021
											</span>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Student Nurse</CardTitle>
											<CardDescription>
												Anglia Ruskin University
											</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Completed academic studies and placements, managing
												complex information to create care plans and referrals
												while maintaining high standards.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												May 2017 – Sep 2020
											</span>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>
												Bank Healthcare Assistant & Assistant Pharmacy Technical
												Officer
											</CardTitle>
											<CardDescription>
												Cambridge University Hospitals NHS Trust, Ipswich
												Hospital NHS Trust
											</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Flexible healthcare roles in diverse settings, including
												emergency departments and critical care, while managing
												pharmaceutical interventions and verifying medications.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												Sep 2006 – Sep 2020
											</span>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Junior Manager (JNCO)</CardTitle>
											<CardDescription>British Army</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												Managed teams in challenging environments, deployed
												sophisticated technology, and completed two operational
												tours as an Intelligence, Surveillance, and Target
												Acquisition commander.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												Sep 2006 – Sep 2012
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
											<CardTitle>Software Development</CardTitle>
											<CardDescription>TechEducators</CardDescription>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												An intensive professional-level software development
												course focusing on server and client-side scripting for
												dynamic web applications.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												Sep 2023 – Feb 2024
											</span>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>
												Understanding Mental Health First Aid and Mental Health
												Advocacy
											</CardTitle>
											<CardDescription></CardDescription>
										</CardHeader>

										<CardContent>
											<p className='text-muted-foreground'>
												Developing and deploying tactics to support mental
												health in the workplace and community.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												2022
											</span>
										</CardFooter>
									</Card>

									<Card>
										<CardHeader>
											<CardTitle>
												BTEC Level 3 in Professional Competence for IT and
												Telecoms Professionals
											</CardTitle>
											<CardDescription></CardDescription>
										</CardHeader>

										<CardContent>
											<p className='text-muted-foreground'>
												Obtained in 2011, this qualification is focused on IT
												and telecoms professional competencies.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												2011
											</span>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>
												BTEC Level 3 in Professional Competence for IT and
												Telecoms Professionals
											</CardTitle>
											<CardDescription></CardDescription>
										</CardHeader>

										<CardContent>
											<p className='text-muted-foreground'>
												Obtained in 2011, this qualification is focused on IT
												and telecoms professional competencies.
											</p>
										</CardContent>
										<CardFooter>
											<span className='text-xs text-muted-foreground'>
												2011
											</span>
										</CardFooter>
									</Card>
								</div>
							</div>
							<div className='grid gap-2'>
								<h2 className='text-xl font-semibold'>Skills</h2>
								<div className='flex flex-wrap gap-2'>
									<Badge>Next.js</Badge>
									<Badge>React</Badge>
									<Badge>Express.js</Badge>
									<Badge>Node.js</Badge>
									<Badge>JavaScript</Badge>
									<Badge>TypeScript</Badge>
									<Badge>Git</Badge>
									<Badge>SQL</Badge>
									<Badge>PRISMA</Badge>
									<Badge>PG</Badge>
									<Badge>Docker</Badge>
									<Badge>AGILE/SCRUM</Badge>
									<Badge>Project Management</Badge>
									<Badge>Relationship-Building</Badge>
								</div>
							</div>
							<div className='grid gap-2'>
								<Link href={"/projects"}>
									<h2 className='text-xl font-semibold'>Projects</h2>
								</Link>
								<div className='grid gap-4'>
									<Card>
										<CardHeader>
											<CardTitle>
												Next.js Application: Social Media App
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												A dynamic social media application built using Next.js,
												demonstrating my expertise in creating SSR and SPA
												applications.
											</p>
										</CardContent>
										<CardFooter>
											<Link href='#' className='text-primary' prefetch={false}>
												View Project
											</Link>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>Full-stack React Application: Forum</CardTitle>
										</CardHeader>
										<CardContent>
											<p className='text-muted-foreground'>
												An interactive forum application built with React,
												showcasing my full-stack development skills.
											</p>
										</CardContent>
										<CardFooter>
											<Link href='#' className='text-primary' prefetch={false}>
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
						{/* <Button>Simplify to One-Page CV</Button> */}
					</div>
				</div>
			)}
		</div>
	);
}
