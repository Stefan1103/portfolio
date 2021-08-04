import MenuItem from './Menuitem';

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<div className={`menu ${menuOpen && 'active'}`}>
			<ul>
				<MenuItem menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			</ul>
		</div>
	);
}
