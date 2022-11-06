import React, {useState} from 'react';
import {BsDownload} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import Modal from "../elements/modal";
import {isBooleanObject} from "util/types";

const btn = 'bg-[#FFE071] py-4 px-8 rounded-[2rem] flex items-center ' +
	'gap-2 min-w-[50%] sm:min-w-[40%] text-center justify-center text-[#3D3D3D] font-medium ' +
	'tracking-[0.2px] hover:bg-[#FFC90F] transition-all duration-400 text-[.6rem] sm:text-[.8rem]'

const ProfileButtons = () => {

	const [modalState, setModalState] = useState(false);

	const setModal = (bool:boolean) => {
		setModalState(bool)
	}
	return (
		<section className="py-6">
			<div className="
			container mx-auto 2xl max-w-2xl flex flex-row justify-around gap-5 text-xs
			">
				<a
					className="contents"
					href={`${process.env.PUBLIC_URL}/assets/Profile.pdf`} target="_blank"
				>
					<button className={btn}>
						Download CV
						<span className="inline-block">
							<BsDownload/>
						</span>
					</button>
				</a>
				<button onClick={()=>setModalState(true)} className={`${btn} bg-[#2B3C4B] text-[#FFE071] hover:text-[#3D3D3D]`}>Contact me</button>
				{ modalState ? <Modal state={setModal}/> : ''}
			</div>
		</section>
	);
};

export default ProfileButtons;
