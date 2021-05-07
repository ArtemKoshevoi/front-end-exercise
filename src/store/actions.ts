import { Order } from '../interfaces/Order';

export const GET_ORDERS = 'GET_ORDERS';

export interface OrderState {
  orders: Order[];
}

export interface GetOrdersActionType {
  type: typeof GET_ORDERS;
  payload: Order[];
}

export type OrderActionTypes = GetOrdersActionType;

export const getOrdersAction = (orders: Order[]): OrderActionTypes => {
  return {
    type: GET_ORDERS,
    payload: orders
  };
};
