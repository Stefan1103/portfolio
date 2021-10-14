import { sliderProjects } from '../../data';
import { useState } from 'react';

export default function Works() {
	const [ currentSlide, setCurrentSlide ] = useState(0);

	const handleSlideClick = (way) => {
		way === 'left'
			? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : sliderProjects.length - 1)
			: setCurrentSlide(currentSlide < sliderProjects.length - 1 ? currentSlide + 1 : 0);
	};

	return (
		<div className="works" id="works">
			<div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{sliderProjects.map((project) => {
					const { id, title, img, icon, shortDesc, webLink, gitLink } = project;

					return (
						<div key={id} className="container">
							<div className="item">
								<div className="left">
									<div className="leftContainer">
										<div className="imgContainer">
											<img src={icon} alt="" />
										</div>
										<h2>{title}</h2>
										<p>{shortDesc}</p>
										<div className="site-links">
											{gitLink && (
												<a href={gitLink} target="_blank">
													<span>Source code.</span>
												</a>
											)}
											{webLink && (
												<a href={webLink} target="_blank">
													<span>Go to website.</span>
												</a>
											)}
										</div>
									</div>
								</div>
								<div className="right">
									<img src={img} alt="" />
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleSlideClick('left')} />
			<img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleSlideClick()} />
		</div>
	);
}
