import { Person, Mail } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={`topbar ${menuOpen && 'active'}`}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						Te.Fan.
					</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+389 71 314 011</span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>stefan.stevanovski11@gmail.com</span>
					</div>
				</div>
				<div className="right">
					<div
						className="hamburger"
						onClick={() => {
							setMenuOpen(!menuOpen);
						}}
					>
						<span className="line1" />
						<span className="line2" />
						<span className="line3" />
					</div>
				</div>
			</div>
		</div>
	);
}
