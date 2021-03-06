import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logoutUser, fetchUser} from '../actions/firebase_actions';

class App extends Component {

	constructor(props){
		super(props);
		this.props.fetchUser();
		// console.log(props);

		this.logOut = this.logOut.bind(this);
	}

	logOut(){
		this.props.logoutUser().then(data => {
			
		});
	}

	renderUserMenu(currentUser){
		if(currentUser && currentUser.uid) {
			return(
			<li className="dropdown">
				<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
				aria-haspopup="true" aria-expanded="false"
				>
					{currentUser.email}
					<span className="caret"></span>
				</a>
				<ul className="dropdown-menu">
					<li><Link to="/profile">Profile</Link>
					</li>
					<li role="separator" className="divider">
					</li>
					<li><Link to="/play-nine">Play Nine</Link>
					</li>
					<li role="separator" className="divider">
					</li>
					<li><Link to="/logout" onClick={this.logOut}>Logout</Link>
					</li>
				</ul>
			</li>
			)
		} else {
			return [
				<li key={1}><Link to="/login">Login</Link></li>,
				<li key={2}><Link to="/register">Register</Link></li>
			]

		}

	}

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
						<ul className="nav navbar-nav navbar-right">
							{this.renderUserMenu(this.props.currentUser)}
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

function mapStateToProps(state){
	return {
		currentUser: state.currentUser
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		logoutUser,
		fetchUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);