import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../../actions/firebase_actions';


class UserRegister extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
		<div className="col-md-4">
			<form id="frmRegister" role="form">
				<h2>Register</h2>
				<div className="form-group">
					<label htmlFor="txtRegEmail">
						Email Address
					</label>
					<input type="email" className="form-control" ref="email" id="txtEmail" placeholder="Enter Email" name="email"
					/>
				</div>
			</form>
		</div>
		)
	}
}