import React from 'react';
import { DataGrid, GridCellParams, GridColDef, GridSortDirection } from '@material-ui/data-grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Order, ShippingAddress } from '../../interfaces/Order';
import { useStyles } from './style';

interface Props {
  orders?: Order[],
  isSortableReject?: boolean,
}

const columns: GridColDef[] = [
  {
    field: 'orderNumber',
    headerName: 'Order Number & Date',
    headerClassName: 'order-header',
    flex: 0.3,
    renderCell: (params: GridCellParams) => {
      let orderDetails: string[] = [];
      if (params.value) {
        orderDetails = params.value.toString().split(',');
      }
      const orderDate = new Date(orderDetails[1]);
      const dateToShow = `
        ${orderDate.toLocaleString('default', { month: 'short' })}. 
        ${orderDate.getDate()}, 
        ${orderDate.getFullYear()}
      `;
      return (
      <div className={'orderCell'}>
        <span className={'order-details'} data-testid="order-details"># {orderDetails[0]}</span>
        <span className={'order-date'}>Ordered: {dateToShow}</span>
      </div>
    )},
    sortComparator: (v1, v2, param1, param2) => param1.row.orderNumber[0] - param2.row.orderNumber[0],
  },
  {
    field: 'shippingStatus',
    headerName: 'Shipping Status',
    headerClassName: 'order-header',
    flex: 0.3,
    renderCell: (params: GridCellParams) => {
      let shippingStatus: string[] = [];
      if (params.value) {
        shippingStatus = params.value.toString().split(',');
      }
      const shippingDate = new Date(shippingStatus[1]);
      const dateToShow = `
        ${shippingDate.getDate()}/${shippingDate.toLocaleString('default', { month: 'short' })}/${shippingDate.getFullYear()}
      `;
      return (
        <div className={'orderCell'}>
          <span className={'shipping-status'}>{shippingStatus[0]}</span>
          <span className={'updated-status'}>Updated: {dateToShow}</span>
        </div>
      )
    },
  },
  {
    field: 'customerAddress',
    headerName: 'Customer Address',
    headerClassName: 'order-header',
    flex: 0.3,
    renderCell: (params: GridCellParams) => {
      const {line1, city, state, zip} = (params.value as ShippingAddress);
      return (
        <div className={'orderCell shipping-address'}>
          <span>{line1}</span>
          <span>{city}, {state} {zip}</span>
        </div>
      )
    }
  },
  {
    field: 'orderValue',
    headerName: 'Order Value',
    headerClassName: 'order-header',
    flex: 0.3,
    renderCell: (params: GridCellParams) => (
      <div className={'orderCell'}>
        <span>${params.value}</span>
        <span className={'updated-status'}>USD</span>
      </div>
    )
  },
  {
    field: 'options',
    headerName: 'Order',
    flex: 0.1,
    renderHeader: () => (
      <div>
        <MoreVertIcon className={'option-icon'}/>
      </div>
    ),
    renderCell: () => (
      <MoreVertIcon className={'option-icon'}/>
    )
  },
];

const getTableRows = (orders: Order[]) => {
  return orders.map((order, index) => {
    return {
      id: index,
      orderNumber: [order.order_number, order.order_details.date],
      shippingStatus: [order.status, order.shipping_details.date],
      customerAddress: order.customer.address,
      orderValue: order.order_details.value,
    }
  })
};

const sortModel = [
  {
    field: 'orderNumber',
    sort: 'asc' as GridSortDirection,
  },
];

const OrdersTable: React.FC<Props> = ({orders = [], isSortableReject = true}) => {
  const classes = useStyles();

  return (
    <div style={{ height: 265, width: '100%', maxWidth: 1100 }} className={classes.root}>
      <DataGrid
        rows={getTableRows(orders)}
        sortModel={sortModel}
        columns={columns.map((column) => ({
          ...column,
          sortable: isSortableReject,
        }))}
        checkboxSelection
      />
    </div>
  );
};
export default OrdersTable;
