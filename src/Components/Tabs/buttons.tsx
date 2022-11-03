import React from 'react';
import {Link, NavLink} from "react-router-dom";

const btn = 'bg-transparent text-[#FFE071] py-4 px-8 rounded-[2rem] flex items-center ' +
	'gap-2 min-w-[50%] text-center justify-center text-[#3D3D3D] font-medium' +
	'tracking-[0.2px] hover:bg-[#202f3d] transition-all duration-400 text-[.6rem] sm:text-[.8rem] '

const activeNav = (navData:any) => btn + (navData.isActive ? 'bg-[#142637]' : '');

const TabsButtons = () => {
	return (
		<section className="py-5 px-5">
			<div className="
			container mx-auto 2xl max-w-xl flex flex-row justify-around gap-5 text-xs
			bg-[#2B3C4B] rounded-[5rem] py-4 px-7
			">
				<NavLink to={`/`} className={activeNav}>
					Works
				</NavLink>

				<NavLink to={`about`} className={activeNav}>
					About
				</NavLink>

			</div>
		</section>
	);
};

export default TabsButtons;
