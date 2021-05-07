export interface Order {
  order_number: number
  customer: {
    first_name: string,
    last_name: string,
    address: ShippingAddress,
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

export interface ShippingAddress {
  line1: string,
  line2: string,
  city: string,
  state: string,
  zip: string,
}
