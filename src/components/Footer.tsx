import LOGO from "../assets/trendsAf_logo.png"

const Footer = () => {
	return (
		<div className="flex flex-col items-center border-t justify-center space-y-2 bg-[#f4f9fa] py-4 ">
			<a href="https://trendsaf.co/" target="_blank">
				<img src={LOGO} alt="trendsAf" className="w-[6rem]" />
			</a>
			<p className="font-body text-center text-[#1E1E1E]">
				Modern data infrastructure for emerging economies
			</p>
			<span className="font-body text-[#1E1E1E] text-sm">
				© {new Date(). getFullYear()} All Rights Reserved.
			</span>
		</div>
	);
};

export default Footer;
