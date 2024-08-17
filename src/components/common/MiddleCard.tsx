interface MiddleCardProps {
	title: string;
	description: string;
}

const MiddleCard: React.FC<MiddleCardProps> = ({ title, description }) => {
	return (
		<div className="flex flex-col gap-4 shadow-sm rounded-lg py-10 px-8 w-full lg:h-72 2xl:h-60 bg-white ">
			<h1 className="text-[rgb(34,69,255)] text-xl md:text-4xl lg:text-2xl font-[500] font-body">
				{title}
			</h1>
			<h1 className="text-sm font-body md:text-xl pb-4 text-[#1E1E1E] lg:text-lg">
				{description}
			</h1>
		</div>
	);
};

export default MiddleCard;
