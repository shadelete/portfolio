import React from 'react';
import {BsCodeSlash} from "react-icons/bs";

const TabsSkills = () => {

	const aboutDB:any = {
		skills: [
			{
				lang: 'HTML',
				sub: ''
			},
			{
				lang: 'JS',
				sub: 'ES6'
			},
			{
				lang: 'CSS',
				sub: 'SASS, SCSS, Tailwind, Grid/Flexbox'
			},
			{
				lang: 'React',
				sub: ''
			},
			{
				lang: 'Redux',
				sub: null
			}
		],
		abilities: [
			'Git', 'OOP', 'Design Patterns', 'Linux/Bash', 'Adobe Photoshop', 'npm', 'Flux'
		]
	}

	return (
		<div className="py-5">
			<div className="container container mx-auto 2xl max-w-2xl">

				<div className="px-1 flex flex-col justify-center items-center gap-3">
					<div className="p-3 rounded-full border-[.4rem] border-[#2B3C4B]">
						<span className="text-[2rem] text-prim"><BsCodeSlash/></span>
					</div>
					<h1 className="text-[2rem] font-medium text-[#B8BEC3]">Skills</h1>
					<hr className="rounded-md border-[#2B3C4B] border-t-8 min-w-[10rem]"/>

					<div className="flex flex-rows flex-wrap justify-center gap-5 items-start min-w-[80%] pt-5">
						{aboutDB.skills.map((el:any,i:number)=> {
							return (
								<div key={el.i} className='inline-flex gap-2 p-3 bg-[#2B3C4B] rounded-3xl items-center cursor-pointer hover:shadow-lg'>
									<span key={el.i} className="text-prim font-md text-[1rem]">{el.lang}</span>
									{el.sub ? <p key={el.i} className="text-[#B8BEC3]">{el.sub}</p> : ''}
								</div>
							)
						})}
					</div>
				</div>

				<div className="px-1 pt-5 flex flex-col justify-center items-center gap-3">
					<h1 className="text-[1.5rem] font-medium text-[#B8BEC3]">Additional abilities</h1>
					<hr className="rounded-md border-[#2B3C4B] border-t-[5px] min-w-[10rem]"/>

					<div className="flex flex-rows flex-wrap justify-center gap-5 items-center min-w-[80%] pt-5">
						{aboutDB.abilities.map((el:any)=> {
							return (
								<div key={el.id} className='inline-flex gap-2 p-3 bg-[#2B3C4B] rounded-3xl items-center cursor-pointer hover:shadow-lg'>
									<span key={el.id} className="text-[#B8BEC3]">{el}</span>
								</div>
							)
						})}
					</div>
				</div>

			</div>
		</div>
	);
};

export default TabsSkills;
