import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logoutUser} from '../actions/firebase_actions';

class App extends Component {

	constructor(props){
		super(props);

		this.logOut = this.logOut.bind(this);
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
				<ul>
					<Link to="/login">Login</Link>
					<br/>
					<Link to="/register">Register</Link>
					<br />
					<Link to="/logout" 
							onClick={this.logOut}>
							logout
					</Link>
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
		logoutUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);