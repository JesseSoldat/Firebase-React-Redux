import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
	render(){
		return(
		<div>
			<header className="navbar navbar-static-top navbar-inverse" role="banner">
				<div className="container">
					<div className="navbar-header">
						<button className="navbar-toggle collapsed" type="button" data-toggle="collapsed" data-target=".bs-navbar-collapse">
							<span className="sr-only">
								Toggle navigation
							</span>
							<span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
            JLab
            </Link>
					</div>
					<nav className="collapsed navbar-collapse bs-navbar-collapse" role="navigation">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
						</ul>
					</nav>
				</div>
			</header>

			<div className="container">
				{this.props.children}
			</div>

		</div>
		)
	}
}

export default App;