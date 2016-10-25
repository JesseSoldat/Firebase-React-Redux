import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../../actions/firebase_actions';


class UserRegister extends Component {
	constructor(props){
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);

		this.state = {
			message: ''
		};
	}

	onFormSubmit(e){
		e.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;

		this.props.registerUser({email, password}).then( (data) => {
			if (data.payload.errorCode){
				this.setState({
					message: data.payload.errorMessage
				});
			}	else {
					browserHistory.push('/');
				}
		})

	}

	render(){
		return(
		<div className="col-md-8">
			<form id="frmRegister" role="form" onSubmit={this.onFormSubmit}>
				<p>{this.state.message}</p>
				<h2>Register</h2>
				<div className="form-group">
					<label htmlFor="txtRegEmail">
						Email Address
					</label>
					<input type="email" className="form-control" ref="email" id="txtEmail" placeholder="Enter Email" name="email"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="texRegEmail">
						Password
					</label>
					<input type="text" className="form-control" ref="password" id="txtPass" placeholder="Password" name="password"
					/>
				</div>
				<button type="submit" className="btn btn-default">
					Register
				</button>
				<br/><br/>
			</form>
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
		registerUser,
	}, dispatch);
}

// export default UserRegister;
export default connect(
	mapStateToProps, mapDispatchToProps)(UserRegister);