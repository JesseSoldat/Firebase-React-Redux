import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/app';
import HomeIndex from './components/index_home';
import UserRegister from './components/user/register';
import UserLogin from './components/user/login';
import UserLogout from './components/user/logout';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeIndex} />
		<Route path="/register" component={UserRegister}  />
		<Route path="/login" component={UserLogin} />
		<Route path="/logout" component={UserLogout} />

	</Route>

);