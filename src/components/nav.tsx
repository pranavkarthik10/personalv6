"use client";

import {
	House,
	Mail,
	NotebookPen,
	Newspaper,
	Zap,
	Laptop,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { cn, fetcher } from "@/lib/utils";
import { preload } from "swr";

interface Tab {
	name: string;
	icon: React.ReactNode;
	href: string;
}

const tabs: Tab[] = [
	{ name: "home", icon: <House />, href: "/" },
	{ name: "blog", icon: <NotebookPen />, href: "/blog" },
	{ name: "stack", icon: <Laptop />, href: "/stack" },
	// { name: "now", icon: <Zap />, href: "/now" },
	{ name: "press", icon: <Newspaper />, href: "/press" },
];

export default function Nav() {
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState("");
	const [hydrated, setHydrated] = useState(false);
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
	const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0 });
	const tabRefs = useRef<(HTMLElement | null)[]>([]);

	useEffect(() => {
		setHydrated(true);
	}, []);

	useEffect(() => {
    if (!pathname) return;
    const matchedTab = tabs.find((tab) => {
        if (tab.href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(tab.href);
    });
    setActiveTab(matchedTab ? matchedTab.name : "");
	}, [pathname]);

	useEffect(() => {
		const activeIndex = tabs.findIndex((tab) => tab.name === activeTab);
		const activeTabElement = tabRefs.current[activeIndex];

		if (activeTabElement) {
			const { offsetLeft, offsetWidth } = activeTabElement;
			setIndicatorStyle({
				left: offsetLeft,
				width: offsetWidth,
			});
			setHoverStyle({
				left: offsetLeft,
				width: offsetWidth,
			});
		}
	}, [activeTab, hydrated]);

	return (
		<>
			<div className="fixed left-0 bottom-0 w-full h-20 from-background via-background/75 to-transparent bg-gradient-to-t z-20" />
			{hydrated && (
				<nav className="fixed left-0 bottom-3 px-4 w-full flex justify-center z-30">
					<TooltipProvider>
						<div className="p-0.5 bg-background/75 shadow-xl rounded-lg border h-full flex justify-center max-w-xl backdrop-blur-sm">
							<div
								className="relative"
								onMouseLeave={() => {
									setHoverStyle({
										left: indicatorStyle.left,
										width: indicatorStyle.width,
									});
								}}
							>
								{/* Hover indicator */}
								<div
									className="absolute top-0 rounded-md bg-input/5 transition-all duration-150 ease-out z-0 border"
									style={{
										left: hoverStyle.left,
										width: hoverStyle.width,
										height: 36,
										opacity:
											hoverStyle.left !== indicatorStyle.left ||
											hoverStyle.width !== indicatorStyle.width
												? 1
												: 0,
									}}
								/>
								{/* Active indicator */}
								<div
									className="absolute top-0 rounded-md bg-input/50 border transition-all duration-200 ease-out z-0"
									style={{
										left: indicatorStyle.left,
										width: indicatorStyle.width,
										height: 36,
									}}
								/>
								<ul className="flex items-center gap-0.5 relative z-10">
									{tabs.map((tab, index) => (
										<li key={tab.name}>
											<Tooltip delayDuration={500}>
												<TooltipTrigger asChild>
													<Button
														size="icon"
														variant="ghost"
														asChild
														className="h-9 w-9"
														ref={(el) => {
															tabRefs.current[index] = el;
														}}
														onMouseEnter={() => {
															setHoverStyle({
																left: tabRefs.current[index]?.offsetLeft ?? 0,
																width: tabRefs.current[index]?.offsetWidth ?? 0,
															});
														}}
													>
														<Link
															href={tab.href}
															className={cn(
																"text-foreground transition-opacity duration-200",
																activeTab === tab.name
																	? "text-primary opacity-100"
																	: "opacity-35 hover:opacity-75",
															)}
														>
															{tab.icon}
														</Link>
													</Button>
												</TooltipTrigger>
												<TooltipContent className="bg-background text-foreground">
													<p>
														{tab.name.charAt(0).toUpperCase() +
															tab.name.slice(1)}
													</p>
												</TooltipContent>
											</Tooltip>
										</li>
									))}
									<Separator
										orientation="vertical"
										className="min-h-4! mx-0.5"
									/>
									<li>
										<Tooltip delayDuration={500}>
											<TooltipTrigger asChild>
												<Button
													size="icon"
													variant="ghost"
													asChild
													className="text-muted-foreground opacity-75 hover:opacity-100 h-9 w-9"
												>
													<Link href="mailto:me@pranavkarthik.com">
														<Mail />
													</Link>
												</Button>
											</TooltipTrigger>
											<TooltipContent className="bg-background text-foreground">
												<p>Email</p>
											</TooltipContent>
										</Tooltip>
									</li>
									<li>
										<Tooltip delayDuration={500}>
											<TooltipTrigger asChild>
												<Button
													size="icon"
													variant="ghost"
													asChild
													className="text-muted-foreground opacity-75 hover:opacity-100 h-9 w-9"
												>
													<Link
														href="https://www.github.com/pranavkarthik10"
														target="_blank"
													>
														<svg
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
															className="w-6 h-6"
															fill="currentColor"
														>
															<title>GitHub</title>
															<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
														</svg>
													</Link>
												</Button>
											</TooltipTrigger>
											<TooltipContent className="bg-background text-foreground">
												<p>GitHub</p>
											</TooltipContent>
										</Tooltip>
									</li>
								</ul>
							</div>
						</div>
					</TooltipProvider>
				</nav>
			)}
		</>
	);
}