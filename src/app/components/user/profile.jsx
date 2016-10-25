import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../../actions/firebase_actions';

class UserProfile extends Component {
	constructor(props){
		super(props);
		this.state = {
			message: ''
		}

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e){
		e.preventDefault();
	}

	render(){
		return(
		<div className="col-md-6">
			<form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
				<h2>User Profile Page</h2>
				<p>{this.state.message}</p>
				<br/>
				<div className="form-group">


				</div>
			</form>
		</div>
		)
	}
}

export default UserProfile;