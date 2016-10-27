import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/app';
import HomeIndex from './components/index_home';
import UserRegister from './components/user/register';
import UserLogin from './components/user/login';
import UserLogout from './components/user/logout';
import UserProfile from './components/user/profile';
import ResetPassword from './components/user/reset_password';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeIndex} />
		<Route path="/register" component={UserRegister}  />
		<Route path="/login" component={UserLogin} />
		<Route path="/reset" components={ResetPassword}/>
		<Route path="/logout" component={UserLogout} />
		<Route path="/profile" component={UserProfile} />
	</Route>

);