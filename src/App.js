import './components/Sass/global.scss';

import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Description from './components/description/Description';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useState } from 'react';

function App() {
	const [ menuOpen, setMenuOpen ] = useState(false);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
						<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
						<div className="sections">
							<Intro />
							<Portfolio />
							<Works />
							<Contact />
						</div>
					</Route>
					<Route exact path="/description/:clickedId">
						<Description />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
