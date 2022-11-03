import {BsLinkedin,BsGithub} from "react-icons/bs";

const ProfileInfo = () => {
	return (
		<section className="profile-info pop-bold mt-10 text-[#A3ABB2]">
			<div className="container mx-auto 2xl max-w-2xl">
				<div className="profile-info__wrapper grid sm:grid-cols-[1fr_1fr] grid-cols-1 gap-2 sm:gap-0 items-center">
					<div className="flex justify-center profile-info__photo">
						<img className="border-[#FFE071] border-8 rounded-full max-w-[70%]" src="./photo.png" alt="photo"/>
					</div>
					<div className="flex flex-col items-center gap-3 profile-info__text-block font-medium">
						<h1 className="text-[#fff] text-center font-medium text-3xl">Alexander <br/>Bondarenko</h1>
						<p className="font-medium">Frontend developer</p>
						<ul className="flex flex-row gap-3 text-2xl text-prim">
							<li><a className="hover:text-prim" href="https://github.com/shadelete" rel="noreferrer" target='_blank'><BsGithub/></a></li>
							<li><a className="hover:text-prim" href="https://www.linkedin.com/in/shadelete/" rel="noreferrer" target='_blank'><BsLinkedin/></a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfileInfo;