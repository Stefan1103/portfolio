import { sidebarItems } from '../../data';

const MenuItem = ({ menuOpen, setMenuOpen }) => {
	return sidebarItems.map((item) => {
		const { name, url, id } = item;
		return (
			<li
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
				key={id}
			>
				<a href={url}>{name}</a>
			</li>
		);
	});
};

export default MenuItem;
