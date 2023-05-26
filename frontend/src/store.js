import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  //userViewReducer,
  //userUpdateReducer,
} from "./reducers/userReducers";

//Article Reducers
import {
  articleListReducer,
  articleCreateReducer,
  articleOneReducer,
  ArticleAcceptReducer,
  ArticleApproveListReducer,
  ArticleDenyReducer,
} from "./reducers/articleReducers";

import {
  InnovationCreateReducer,
  innovationListReducer,
  innovationOneReducer,
  InnovationAcceptReducer,
  InnovationApproveListReducer,
  InnovationDenyReducer,
} from "./reducers/innovationReducers";

import {
  InnovationSupportCreateReducer,
  InnovationSupportListReducer,
} from "./reducers/innovationSupportReducers";

import {
  qualityListReducer,
  qualityOneReducer,
} from "./reducers/qualityTestReducers";

import {
  ProjectCreateReducer,
  ProjectListReducer,
  ProjectUpdateReducer,
  ProjectDeleteReducer,
} from "./reducers/projectReducers";

import {
  DonateCreateReducer,
  DonateListReducer,
  DonateDeleteReducer,
  DonateUpdateReducer,
  PaymentDonateListReducer
} from "./reducers/donateReducers";

import {
  ProductCreateReducer,
  productDeleteReducer,
  productListReducer,
  productOneReducer,
  productUpdateReducer,
} from "./reducers/productReducers";


const reducer = combineReducers({
  user_Login: userLoginReducer,
  userRegistration: userRegisterReducer,
  innovationList: innovationListReducer,
  innovationOne: innovationOneReducer,
  innovationCreate: InnovationCreateReducer,
  innovationSupportCreate: InnovationSupportCreateReducer,
  innovationSupportList: InnovationSupportListReducer,
  articleList: articleListReducer,
  //articleOne :  articleOneReducer,
  articleCreate: articleCreateReducer,
  articleApproveList: ArticleApproveListReducer,
  articleAccept: ArticleAcceptReducer,
  articleDeny: ArticleDenyReducer,
  projectCreate: ProjectCreateReducer,

  projectList:ProjectListReducer,
  projectUpdate:ProjectUpdateReducer,
  projectDelete:ProjectDeleteReducer,

  innovationApprove: InnovationAcceptReducer,
  innovationDeny: InnovationDenyReducer,
  innovationSet: InnovationApproveListReducer,
  qualityList: qualityListReducer,
  qualityOne: qualityOneReducer,

  laborCreate: DonateCreateReducer,
  laborList:DonateListReducer,
  laborDelete:DonateDeleteReducer,
  laborUpdate:DonateUpdateReducer,
  paymentCreate:DonateCreateReducer,
  paymentList:PaymentDonateListReducer,
  
  
  productList: productListReducer,
  productOne: productOneReducer,
  productCreate: ProductCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
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
