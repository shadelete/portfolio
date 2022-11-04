import React from 'react';
import {AiOutlineWhatsApp} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {CgMail} from "react-icons/cg";

const Modal = (state:any) => {
	// debugger
	return (
		<div
			onClick={()=>state.state(false)}
			className="
		h-screen w-screen bg-modal fixed top-0 left-0 flex items-center justify-center bg-[#000000a6] z-10
		">
			<div
				onClick={e=> e.stopPropagation()}
				className="flex flex-row gap-5 container container mx-auto 2xl w-[auto] bg-[#fff] rounded-xl bg-[#142637] text-prim p-5"
			>
				<a target="_blank" href="https://wa.me/+380953439787" className="text-3xl"><AiOutlineWhatsApp/></a>
				<a target="_blank" href="https://t.me/drgbk" className="text-3xl"><FaTelegramPlane/></a>
				<a target="_blank" href="mailto:drgbkbeats@gmail.com" className="text-3xl"><CgMail/></a>
			</div>
		</div>
	);
};

export default Modal;
