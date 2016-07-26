'use strict'

import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import Index from './Main/Index';

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux';

// thunk middleware
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Reducers
import loaderReducer from './Base/Reducer/loaderReducer';
import userReducer from './User/Reducer/userReducer';
import matchReducer from './Match/Reducer/matchReducer';
const appStoreReducers = combineReducers({
	loader : loaderReducer,
	user   : userReducer,
	match  : matchReducer
});

// Store
const store = createStoreWithMiddleware(appStoreReducers);

class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Index />
			</Provider>
		)
	}
}

export default App;
