import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logoutUser, fetchUser} from '../actions/firebase_actions';

class App extends Component {

	constructor(props){
		super(props);
		// console.log(props);

		this.logOut = this.logOut.bind(this);
	}

	componentWillMount() {
		this.props.fetchUser();
	}

	

	logOut(){
		this.props.logoutUser().then(data => {
			
		});

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
					</nav>
				</div>
			</header>

			<div className="container">
				<ul id="ulTemp">
					<li><Link to="/profile">Profile
						</Link>
					</li>
					<li>
						<Link to="/login">
							Login
						</Link>
					</li>
					<li>
						<Link to="/register">Register
						</Link>
					</li>
					<li>
						<Link to="/reset"> 
							Reset Pasword
						</Link>
					</li>
					<li>
						<Link to="/logout" 
							onClick={this.logOut}>
							logout
						</Link>
					</li>
				</ul>
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