import { Dispatch } from 'redux';
import { getOrdersAction, OrderActionTypes } from '../store/actions';

export const getOrders = () => {
  return function (dispatch: Dispatch<OrderActionTypes>) {
    const POST_URL = 'https://gist.githubusercontent.com/ryanjn/07512cb1c008a5ec754aea6cbbf4afab/raw/eabb4d324270cf0d3d17a79ffb00ff3cfaf9acc3/orders.json';
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getOrdersAction(data));
        return data;
      });
  };
};
