import { GET_ORDERS, GetOrdersActionType, OrderState } from './actions';
import { combineReducers } from 'redux';

const initialState: OrderState = {
  orders: []
};

export const getOrderReducer = (
  state = initialState,
  action: GetOrdersActionType,
): OrderState => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  orders: getOrderReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
