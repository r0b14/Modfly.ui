import Quote from "./assets/quote.png";

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
			className={fullScreen ? "sm:w-full mb-10" : "sm:w-4/5 mb-10"}
		>
			<div
				className={`flex sm:flex-row flex-col content-center items-${quoteAlign} gap-5`}
			>
				<div className="min-w-[100px] w-full max-h-[75px] flex justify-center">
				<center>

					<img src={Quote} alt="" />
				</center>
				</div>
				<div>
					<p className="text-reference-normal max-sm:mt-5" id={specText}>
						{children}
					</p>
				</div>
			</div>
		</div>
	);
};

interface QuoteTextProps {
	specText?: string;
	quoteAlign?: string;
	children: React.ReactNode;
	fullScreen?: boolean;
}
