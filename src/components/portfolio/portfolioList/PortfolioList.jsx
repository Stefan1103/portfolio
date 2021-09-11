import React from 'react';

export const PortfolioList = ({ portfolioListItems, selected, setSelected }) => {
	return (
		<React.Fragment>
			{portfolioListItems.map((item) => {
				const { id, title } = item;

				return (
					<li
						className={`${selected === id ? 'portfolioList active' : 'portfolioList'}`}
						onClick={() => {
							setSelected(id);
						}}
						key={id}
					>
						{title}
					</li>
				);
			})}
		</React.Fragment>
	);
};
