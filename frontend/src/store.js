import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	userLoginReducer,
	userRegisterReducer,
	//userViewReducer,
	//userUpdateReducer,
} from "./reducers/userReducers";
import {innovationListReducer,innovationOneReducer} from './reducers/innovationReducers';




const reducer = combineReducers({
	user_Login: userLoginReducer,
	userRegistration: userRegisterReducer,
	innovationList: innovationListReducer,
	innovationOne: innovationOneReducer

	
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
//console.log(userInfoFromStorage);


const initialState = {
	user_Login: { userInfo: userInfoFromStorage },
	
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;