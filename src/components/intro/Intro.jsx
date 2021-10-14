import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Intro() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, { showCursor: true, backDelay: 1200, backSpeed: 50, strings: [ 'Developer!', 'Designer!' ] });
	}, []);
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/stefan_0.png" alt="#" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi there! I'm</h2>
					<h1>Stefan Stevanovski</h1>
					<h3>
						Front-end <h3 ref={textRef} />
					</h3>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="#" />
				</a>
			</div>
		</div>
	);
}
