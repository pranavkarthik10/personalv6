import { cn } from "@/lib/utils";
import {
	AlertTriangleIcon,
	CheckCircleIcon,
	InfoIcon,
	XCircleIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type variants = "info" | "warning" | "error" | "success";

export function Callout({
	children,
	variant = "info",
}: {
	children: ReactNode;
	variant?: variants;
}) {
	const variantMap = {
		info: {
			icon: InfoIcon,
			className:
				"bg-blue-500/15 backdrop-blur border-blue-500/25 prose-h5:text-blue-500 [&_p]:text-blue-500",
			iconClassName: "text-blue-500",
		},
		warning: {
			icon: AlertTriangleIcon,
			className:
				"bg-yellow-500/15 backdrop-blur border-yellow-500/25 prose-h5:text-yellow-500  [&_p]:text-yellow-500",
			iconClassName: "text-yellow-500",
		},
		error: {
			icon: XCircleIcon,
			className:
				"bg-rose-500/15 backdrop-blur border-rose-500/25 prose-h5:text-rose-500 [&_p]:text-rose-500",
			iconClassName: "text-rose-500",
		},
		success: {
			icon: CheckCircleIcon,
			className:
				"bg-green-500/15 backdrop-blur border-green-500/25 prose-h5:text-green-500 [&_p]:text-green-500",
			iconClassName: "text-green-500",
		},
	};
	const { icon: Icon, className, iconClassName } = variantMap[variant];
	return (
		<div
			className={cn(
				"relative w-full border rounded-xl p-4 my-10 shadow",
				className,
			)}
		>
			<div className="flex gap-3">
				<Icon className={cn("h-4 w-4 flex-shrink-0", iconClassName)} />
				<div className="flex-1">{children}</div>
			</div>
		</div>
	);
}
export function CalloutTitle({ children }: { children: ReactNode }) {
	return (
		<h5 className="font-medium! leading-none tracking-tight mt-0!">
			{children}
		</h5>
	);
}
export function CalloutDescription({ children }: { children: ReactNode }) {
	return (
		<div className="text-sm [&_p]:leading-relaxed prose-p:text-rose-500">
			{children}
		</div>
	);
}