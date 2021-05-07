export interface Order {
  order_number: number
  customer: Customer,
  order_details: OrderDetails,
  shipping_details: {
    date: Date,
  },
  status: string,
}

export interface ShippingAddress {
  line1: string,
  line2: string,
  city: string,
  state: string,
  zip: string,
}

interface Customer {
  first_name: string,
  last_name: string,
  address: ShippingAddress,
}

interface OrderDetails {
  value: number,
  date: Date,
}
