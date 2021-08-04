import { portfolioListItems, contentPortfolio, webbAppPortfolio, designPortfolio, mobileAppPortfolio, brandingPortfolio } from '../../data';

import { useState, useEffect } from 'react';
import { PortfolioList } from './portfolioList/PortfolioList';

export default function Portfolio() {
	const [ selected, setSelected ] = useState(1);
	const [ selectedPortfolio, setSelectedPortfolio ] = useState(webbAppPortfolio);

	useEffect(
		() => {
			switch (selected) {
				case 1:
					setSelectedPortfolio(webbAppPortfolio);
					break;
				case 2:
					setSelectedPortfolio(mobileAppPortfolio);
					break;
				case 3:
					setSelectedPortfolio(designPortfolio);
					break;
				case 4:
					setSelectedPortfolio(brandingPortfolio);
					break;
				case 5:
					setSelectedPortfolio(contentPortfolio);
					break;

				default:
					setSelectedPortfolio(webbAppPortfolio);
					break;
			}
		},
		[ selected ],
	);

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				<PortfolioList portfolioListItems={portfolioListItems} selected={selected} setSelected={setSelected} />
			</ul>
			<div className="container">
				{selectedPortfolio.map((item) => {
					const { id, title, img } = item;
					return (
						<div key={id} className="item">
							<img src={img} />
							<h3>{title}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
}
