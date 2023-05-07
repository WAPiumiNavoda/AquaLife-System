import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  //userViewReducer,
  //userUpdateReducer,
} from "./reducers/userReducers";


import {articleCreateReducer, articleListReducer, articleOneReducer}  from './reducers/articleReducers';
import {InnovationCreateReducer,
	 innovationListReducer,
	 innovationOneReducer,
	 InnovationAcceptReducer, 
	  InnovationApproveListReducer,
	 InnovationDenyReducer} from './reducers/innovationReducers';
import { InnovationSupportCreateReducer,
	     InnovationSupportListReducer,
		
		 } from "./reducers/innovationSupportReducers";
import { ProjectCreateReducer, ProjectListReducer } from "./reducers/projectReducers";


import {
  InnovationSupportCreateReducer,
  InnovationSupportListReducer,
} from "./reducers/innovationSupportReducers";
import { ProjectCreateReducer } from "./reducers/projectReducers";
import { qualityListReducer } from "./reducers/qualityTestReducers";

const reducer = combineReducers({
  user_Login: userLoginReducer,
  userRegistration: userRegisterReducer,
  innovationList: innovationListReducer,
  innovationOne: innovationOneReducer,
  articleList: articleListReducer,
  innovationCreate: InnovationCreateReducer,
  innovationSupportCreate: InnovationSupportCreateReducer,
  innovationSupportList: InnovationSupportListReducer,
  projectCreate: ProjectCreateReducer,
  innovationApprove: InnovationAcceptReducer,
  innovationDeny: InnovationDenyReducer,
  innovationSet: InnovationApproveListReducer,
  qualityList: qualityListReducer,

});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
//console.log(userInfoFromStorage);

const initialState = {
  user_Login: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
