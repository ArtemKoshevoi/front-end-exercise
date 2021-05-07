import React from 'react';
import { DataGrid, GridCellParams, GridColDef, GridSortDirection } from '@material-ui/data-grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Order, ShippingAddress } from '../interfaces/Order';
import { makeStyles } from '@material-ui/core';

interface Props {
  orders?: Order[],
  isSortableReject?: boolean,
}

const useStyles = makeStyles({
  root: {
    '& .order-header': {
      color: '#6E6893',
      fontSize: 12,
      textTransform: 'uppercase'
    },
    '& .orderCell': {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.5,

      '& .order-date': {
        color: '#6E6893',
      },

      '& .shipping-status': {
        fontSize: 12,
        color: '#4A4AFF',
        backgroundColor: '#E6E6F2',
        textTransform: 'capitalize',
        padding: '2px 24px 2px 16px',
        fontWeight: 500,
        borderRadius: 10,
        whiteSpace: 'nowrap',

        '&::before': {
          content: '""',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#4A4AFF',
          display: 'inline-block',
          marginRight: 5,
        },
      },

      '& .shipping-status:before': {
        content: "\A",
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: '#b83b3b',
        display: 'inline-block',
      },


      '& .updated-status': {
        fontSize: 12,
        color: '#6E6893',
      }
    },
    '& .shipping-address': {
      fontSize: 12,
    },
    '& .option-icon': {
      color: '#6E6893',
    },
    '& .MuiDataGrid-footer': {
      backgroundColor: '#F4F2FF',
    },
    '& .MuiDataGrid-colCellWrapper': {
      backgroundColor: '#F4F2FF',
    },
    '& .MuiDataGrid-iconSeparator': {
      height: 0
    },
    '& .MuiDataGrid-colCellTitle': {
      fontWeight: 600,
    },

    '&::after': {
      height: 45,
      backgroundColor: 'red',
    }

  },
  divider: {
    backgroundColor: 'red'
  }
});

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
