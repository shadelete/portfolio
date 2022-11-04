import React from 'react';

const TabsPortfolio = () => {

	const conImgUrl = (image:string) => {
		return `url('${process.env.PUBLIC_URL}/assets/img/${image}')`
	}

	const worksDB:any = [
		{
			name: 'EHB INTERNATIONAL HORSE TRANSPORT',
			stack: 'WordPress',
			urlImage: conImgUrl('ehb.jpg'),
			url: 'https://ehbinternational.co.uk/'
		}
	]

	return (
		<div className="py-5">
			<div className="container container mx-auto 2xl max-w-2xl grid grid-cols-1 ">

				{worksDB.map((el:any)=> {
					return (
						<a href={el.url} target="_blank">
							<div
								style={{backgroundImage: el.urlImage}}
								className="portfolio relative bg-cover min-h-[20rem] items-center justify-end cursor-pointer rounded-3xl flex flex-col"
							>
								<div className="portfolio-item">
									<h1 className="text-prim">{el.name}</h1>
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
