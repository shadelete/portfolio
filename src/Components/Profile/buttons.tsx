import React from 'react';
import {BsDownload} from "react-icons/bs";

const btn = 'bg-[#FFE071] py-4 px-8 rounded-[2rem] flex items-center ' +
	'gap-2 min-w-[50%] sm:min-w-[40%] text-center justify-center text-[#3D3D3D] font-medium ' +
	'tracking-[0.2px] hover:bg-[#FFC90F] transition-all duration-400 text-[.6rem] sm:text-[.8rem]'

const ProfileButtons = () => {
	return (
		<section className="py-6">
			<div className="
			container mx-auto 2xl max-w-2xl flex flex-row justify-around gap-5 text-xs
			">
				<button className={btn}>Download CV
					<a>
						<span className="inline-block ">
							<BsDownload/>
						</span>
					</a>
				</button>
				<button className={`${btn} bg-[#2B3C4B] text-[#FFE071] hover:text-[#3D3D3D]`}><a>Contact me</a></button>
			</div>
		</section>
	);
};

export default ProfileButtons;
