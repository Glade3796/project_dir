<Card>
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
								<CardDescription>
									A modern social media platform
								</CardDescription>
							</div>
						</CardHeader>
						<CardContent className='grid gap-4'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<MinusIcon className='w-5 h-5 text-red-500' />
									<span className='text-sm font-medium'>Down</span>
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
									<span className='text-sm font-medium'>{progress}%</span>
								</div>
								<Progress value={progress} className='h-2 rounded-full' />
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
										<span className='text-sm text-muted-foreground'>
											Start Date
										</span>
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
										<span className='text-sm text-muted-foreground'>
											Note 1
										</span>
										<Button variant='ghost' size='icon'>
											<InfoIcon className='w-4 h-4' />
										</Button>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-sm text-muted-foreground'>
											Note 2
										</span>
										<Button variant='ghost' size='icon'>
											<InfoIcon className='w-4 h-4' />
										</Button>
									</div>
									<div className='flex items-center justify-between'>
										<span className='text-sm text-muted-foreground'>
											Note 3
										</span>
										<Button variant='ghost' size='icon'>
											<InfoIcon className='w-4 h-4' />
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className='flex justify-end gap-2'>
							<Button
								variant='ghost'
								size='icon'
								className='absolute top-4 right-4'
							>
								<XIcon className='w-4 h-4' />
							</Button>
							<Button
								variant='ghost'
								size='icon'
								className='hover:bg-muted hover:text-muted-foreground rounded-full p-2 transition-colors'
							>
								<ChevronLeftIcon className='w-4 h-4' />
							</Button>
							<Button
								variant='ghost'
								size='icon'
								className='hover:bg-muted hover:text-muted-foreground rounded-full p-2 transition-colors'
							>
								<ChevronRightIcon className='w-4 h-4' />
							</Button>
						</CardFooter>
					</Card>