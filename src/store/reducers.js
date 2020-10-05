import {combineReducers} from "redux";

import orderFormReducers from "pages/OrderForm/reducers";
import mainMessageReducers from "components/MainMessage/reducers";

const combine = combineReducers({
  orderForm: orderFormReducers,
  mainMessage: mainMessageReducers
});

export default combine;
