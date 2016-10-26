import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser, updateUser} from '../../actions/firebase_actions';

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
		let email = this.refs.email.value;
		let displayName = this.refs.displayName.value;

		this.props.updateUser({
			email: email,
			displayName: displayName
		}).then(data => {
			if(data.payload.errorCode){
				this.setState({
					message: data.payload.errorMessage
				});
			} else {
				this.setState({
					message: "Update Successful!"
				});
			}
		});

	}

	render(){
		return(
		<div className="col-md-6">
			<form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
				<h2>User Profile Page</h2>
				<p>{this.state.message}</p>
				<br/>
				<div className="form-group">
					<label htmlFor="email">
						Email:
					</label>
					<input type="text" defaultValue={this.props.currentUser.email} className="form-control" id="email" ref="email" placeholder="Email" name="email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="displayName">
						Display name:
					</label>
					<input type="text" defaultValue={this.props.currentUser.displayName} className="form-control" ref="displayName" placeholder="Display name" name="displayName"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Update
				</button>
			</form>
		</div>
		)
	}
}

function mapStateToProps(state){
	return {currentUser: state.currentUser};
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchUser,
		updateUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);