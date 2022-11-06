import React from 'react';

const TabsPortfolio = () => {

	const conImgUrl = (image:string) => {
		return `url('${process.env.PUBLIC_URL}/assets/img/${image}')`
	}

	const worksDB:any = [
		{
			name: 'EHB INTERNATIONAL HORSE TRANSPORT',
			stack: 'WordPress',
			urlImage: conImgUrl('ehb-min.webp'),
			url: 'https://ehbinternational.co.uk/'
		},
		{
			name: "IXART'S BLOG",
			stack: 'React | TS | Tailwind',
			urlImage: conImgUrl('ixarts-min.webp'),
			url: 'https://demo-ixartz-blog.netlify.app/'
		},
		{
			name: 'FINDTREND LANDING PAGE',
			stack: 'SASS | Gulp',
			urlImage: conImgUrl('findtrend-min.webp'),
			url: 'https://demo-findtend.netlify.app/'
		}
	]

	return (
		<div className="py-5">
			<div className="container container mx-auto 2xl max-w-2xl grid grid-cols-1 gap-5">

				{worksDB.map((el:any)=> {
					return (
						<a href={el.url} target="_blank">
							<div
								style={{backgroundImage: el.urlImage}}
								className="portfolio relative bg-cover min-h-[10rem] sm:min-h-[20rem] items-center justify-end cursor-pointer rounded-3xl flex flex-col"
							>
								<div className="portfolio-item">
									<h1 className="text-prim text-[.8rem] md:text-[1rem]">{el.name}</h1>
									<h1>{el.stack}</h1>
								</div>
							</div>
						</a>
					)
				})}

			</div>
		</div>
	);
};

export default TabsPortfolio;
