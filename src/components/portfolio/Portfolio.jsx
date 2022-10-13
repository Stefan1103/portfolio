import {
  portfolioListItems,
  webbAppPortfolio,
  designPortfolio,
  mobileAppPortfolio,
} from "../../data";
import { underContst } from "../../data";
import { useState, useEffect } from "react";
import { PortfolioList } from "./portfolioList/PortfolioList";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [selected, setSelected] = useState(1);
  const [selectedPortfolio, setSelectedPortfolio] = useState(webbAppPortfolio);

  useEffect(() => {
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
      default:
        setSelectedPortfolio(webbAppPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        <PortfolioList
          portfolioListItems={portfolioListItems}
          selected={selected}
          setSelected={setSelected}
        />
      </ul>
      <div className="container">
        {selectedPortfolio.length <= 0 ? (
          <img src={underContst} alt="#" />
        ) : (
          selectedPortfolio.map((item) => {
            const { id, title, img } = item;
            return (
              <Link key={id} className="item" to={`description/${id}`}>
                <img src={img} alt="#" />

                <h3>{title}</h3>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
