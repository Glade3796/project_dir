"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { technologyList, typeList } from "../../app/.data/filterItems";
import { projectList } from "@/app/.data/projectList";

export function SummaryFilterNav() {
	const [showFilters, setShowFilters] = useState(false);
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	function handleFilter(value: string, query: string) {
		const params = new URLSearchParams(searchParams.toString());
		const queryArr = params.getAll(query);

		if (queryArr.includes(value)) {
			params.delete(query);
			queryArr
				.filter((t) => t !== value)
				.forEach((t) => params.append(query, t));
		} else {
			if (query === "progress" || query === "update") {
				params.delete(query);
			}
			params.append(query, value);
		}

		router.push(pathname + "?" + params.toString());
	}

	const progressArr = ["0-25", "25-50", "50-75", "75-100"];
	const dateArr = ["Week", "Month", "Year"];
	function dateText() {
		if (searchParams.has("update")) {
			if (searchParams.getAll("update").includes("Recent")) {
				return "Most Recent";
			}
			return `This ${searchParams.get("update")}`;
		}
		return "Update";
	}
	return (
		<div className='flex flex-col gap-4 bg-card px-4 py-3 rounded-lg shadow-sm sm:flex-row sm:items-center'>
			<div className='flex flex-wrap items-center gap-2 sm:flex-1'>
				<Button
					variant={showFilters ? "primary" : "outline"}
					size='sm'
					onClick={() => setShowFilters(!showFilters)}
				>
					<FilterIcon
						className={`w-4 h-4 mr-2 ${
							showFilters ? "text-primary-foreground" : ""
						}`}
					/>
					Filters
				</Button>
				{showFilters && (
					<div className='flex flex-wrap items-center gap-2'>
						<Button
							variant={
								searchParams.get("completed") === "true" ? "primary" : "outline"
							}
							size='sm'
							onClick={() => {
								router.push(
									pathname +
										"?" +
										createQueryString(
											"completed",
											`${
												searchParams.get("completed") === "true"
													? "false"
													: "true"
											}`
										)
								);
							}}
						>
							<CheckIcon
								className={`w-4 h-4 mr-2 ${
									searchParams.get("completed") === "true"
										? "text-primary-foreground"
										: ""
								}`}
							/>
							Completed
						</Button>
						<Button
							variant={
								searchParams.get("live") === "true" ? "primary" : "outline"
							}
							size='sm'
							onClick={() => {
								router.push(
									pathname +
										"?" +
										createQueryString(
											"live",
											`${
												searchParams.get("live") === "true" ? "false" : "true"
											}`
										)
								);
							}}
						>
							<ZapIcon
								className={`w-4 h-4 mr-2 ${
									searchParams.get("live") === "true"
										? "text-primary-foreground"
										: ""
								}`}
							/>
							Live
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant={searchParams.has("tech") ? "primary" : "outline"}
									size='sm'
								>
									<CodeIcon className='w-4 h-4 mr-2' />
									Technologies
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='start' className='w-48'>
								{technologyList.map((tech, key) => (
									<DropdownMenuCheckboxItem
										key={tech + key}
										onClick={() => {
											handleFilter(tech, "tech");
										}}
										checked={searchParams.getAll("tech").includes(tech)}
									>
										{tech}
									</DropdownMenuCheckboxItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant={searchParams.has("type") ? "primary" : "outline"}
									size='sm'
								>
									<BriefcaseIcon className='w-4 h-4 mr-2' />
									Type
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='start' className='w-48'>
								{typeList.map((type, key) => (
									<DropdownMenuCheckboxItem
										key={type + key}
										onClick={() => {
											handleFilter(type, "type");
										}}
										checked={searchParams.getAll("type").includes(type)}
									>
										{type}
									</DropdownMenuCheckboxItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant={searchParams.has("progress") ? "primary" : "outline"}
									size='sm'
								>
									<PercentIcon className='w-4 h-4 mr-2' />
									{searchParams.has("progress")
										? `${searchParams.get("progress")}%`
										: "Progress"}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='start' className='w-48'>
								{progressArr.map((progress, key) => (
									<DropdownMenuCheckboxItem
										key={progress + key}
										onClick={() => {
											handleFilter(progress, "progress");
										}}
										checked={searchParams.getAll("progress").includes(progress)}
									>
										{progress}%
									</DropdownMenuCheckboxItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant={searchParams.has("update") ? "primary" : "outline"}
									size='sm'
								>
									<CalendarIcon className='w-4 h-4 mr-2' />
									{dateText()}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='start' className='w-48'>
								<DropdownMenuCheckboxItem
									onClick={() => {
										handleFilter("Recent", "update");
									}}
									checked={searchParams.getAll("update").includes("update")}
								>
									Most Recent
								</DropdownMenuCheckboxItem>
								{dateArr.map((date, key) => (
									<DropdownMenuCheckboxItem
										key={date + key}
										onClick={() => {
											handleFilter(date, "update");
										}}
										checked={searchParams.getAll("update").includes(date)}
									>
										This {date}
									</DropdownMenuCheckboxItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				)}
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant={
							searchParams.get("sort") === "asc" ||
							searchParams.get("sort") === "desc"
								? "primary"
								: "outline"
						}
						size='sm'
					>
						<ListOrderedIcon className='w-4 h-4 mr-2' />
						Sort by
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='start' className='w-48'>
					<DropdownMenuCheckboxItem
						checked={searchParams.get("sort") === "asc"}
						onClick={() => {
							router.push(pathname + "?" + createQueryString("sort", "asc"));
						}}
					>
						Newest
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={searchParams.get("sort") === "desc"}
						onClick={() => {
							router.push(pathname + "?" + createQueryString("sort", "desc"));
						}}
					>
						Oldest
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={searchParams.get("sort") === "def"}
						onClick={() => {
							router.push(pathname + "?" + createQueryString("sort", "def"));
						}}
					>
						Default
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
			<rect width='20' height='14' x='2' y='6' rx='2' />
		</svg>
	);
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
		</svg>
	);
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='M20 6 9 17l-5-5' />
		</svg>
	);
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<polyline points='16 18 22 12 16 6' />
			<polyline points='8 6 2 12 8 18' />
		</svg>
	);
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
		</svg>
	);
}

function ListOrderedIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<line x1='10' x2='21' y1='6' y2='6' />
			<line x1='10' x2='21' y1='12' y2='12' />
			<line x1='10' x2='21' y1='18' y2='18' />
			<path d='M4 6h1v4' />
			<path d='M4 10h2' />
			<path d='M6 18H4c0-1 2-2 2-3s-1-1.5-2-1' />
		</svg>
	);
}

function PercentIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<line x1='19' x2='5' y1='5' y2='19' />
			<circle cx='6.5' cy='6.5' r='2.5' />
			<circle cx='17.5' cy='17.5' r='2.5' />
		</svg>
	);
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' />
		</svg>
	);
}
