import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {resetPasswordEmail} from '../../actions/firebase_actions';

class ResetPassword extends Component {
	constructor(props) {
		super(props)
			this.state = {
				message: ''
			}
			this.onFormSubmit = this.onFormSubmit.bind(this);
		
	}

	onFormSubmit(e){
		e.preventDefault();
		let email = this.refs.email.value;
		
		this.props.resetPasswordEmail(email).then(data => {
			if(data.payload.errorCode){
				this.setState({
					message: data.payload.errorMessage
				});
			} else {
				this.setState({
					message: "Email Sent!"
				})
			}
		})
	}

	render(){
		return(
		<div className="col-md-4">
			<form role="form" onSubmit={this.onFormSubmit}>
				<h4>{this.state.message}</h4>
				<div className="form-group">
					<label htmlFor="txtEmail">
						Email Address
					</label>
					<input type="email" className="form-control" id="txtEmail" ref="email" placeholder="Enter Email" name="email"
					/>
				</div>
				<button type="submit" className="btn btn-default btn-block">Reset Password
				</button>
			</form>
		</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		resetPasswordEmail
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(ResetPassword);