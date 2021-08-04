import { useState } from 'react';

export default function Contact() {
	const [ message, setMessage ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/shake.svg" />
			</div>
			<div className="right">
				<h2>Contact.</h2>
				<form onSubmit={handleSubmit}>
					<input required type="email" placeholder="Email" />
					<textarea required placeholder="Message" />
					<button type="submit">Send</button>
					{message && <span>Thanks for the message, i will reply asap !</span>}
				</form>
			</div>
		</div>
	);
}
