interface IOrder {
  order_number: number
  customer: {
    first_name: string,
    last_name: string,
    address: {
      line1: string,
      line2: string,
      city: string,
      state: string,
      zip: string,
    }
  },
  order_details: {
    value: number,
    date: Date,
  }
  shipping_details: {
    date: Date,
  },
  status: string,
}

type orderState = {
  orders: IOrder[];
};

type orderAction = {
  type: string;
  order: IOrder;
};
