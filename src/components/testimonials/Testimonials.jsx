import { testemonialUsers } from '../../data';

export default function Testimonials() {
	return (
		<div className="testimonials" id="testimonials">
			<h1>Testimonials</h1>
			<div className="container">
				{testemonialUsers.map((user) => {
					const { name, img, icon, desc, title, featured } = user;
					return (
						<div className={`${featured ? 'card featured' : 'card'}`}>
							<div className="top">
								<img src="assets/right-arrow.png" className="left" />
								<img src={img} className="user" />
								<img src={icon} className="right" />
							</div>
							<div className="center">{desc}</div>
							<div className="bottom">
								<h3>{name}</h3>
								<h4>{title}</h4>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
