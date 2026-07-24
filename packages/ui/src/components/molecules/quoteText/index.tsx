import React from "react";
import Quote from "./assets/quote.svg";

export interface QuoteTextProps {
	specText?: string;
	quoteAlign?: string;
	children: React.ReactNode;
	fullScreen?: boolean;
}

export const QuoteText: React.FC<QuoteTextProps> = ({
	children,
	fullScreen,
	specText,
	quoteAlign = "center",
}) => {
	return (
		<div
			style={{
				padding: "40px 32px 40px 32px",
				background: "#FFFFFF",
				boxShadow: "0px 0px 8px rgba(103, 141, 88, 0.75)",
				borderRadius: "4px",
			}}
			className={fullScreen ? "sm:w-full mb-10 mx-auto" : "sm:w-4/5 mb-10 mx-auto"}
		>
			<div
				className={`flex sm:flex-row flex-col content-center items-${quoteAlign} gap-5`}
			>
				<div className="min-w-[100px] w-full max-h-[75px] flex justify-center items-center">
					<Quote aria-hidden="true" className="w-14 h-auto opacity-50" />
				</div>
				<div className="flex-1 text-left">
					<div className="text-[#333333] sm:text-xl leading-relaxed" id={specText}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
