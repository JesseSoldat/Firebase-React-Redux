import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/app';
import HomeIndex from './components/index_home';
import UserRegister from './components/user/register';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeIndex} />
		<Route path="/register" component={UserRegister} />
	</Route>

);