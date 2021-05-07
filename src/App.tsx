import React, { useEffect } from 'react';
import './App.css';
import OrdersTable from './components/OrdersTable/OrdersTable';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from './effects/Orders';
import { AppState } from './store/reducers';
import { makeStyles } from '@material-ui/core';
import TabHeader from './components/TabHeader/TabHeader';

const useStyles = makeStyles({
  root: {
    margin: 50,
  },
});

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const orders = useSelector((state: AppState) => state.orders.orders);

  const totalSum: number = orders.reduce((sum, order) => {
    sum = sum + order.order_details.value;
    return sum
  }, 0);

  return (
    <div className={classes.root}>
      <TabHeader totalSum={totalSum}/>
      <OrdersTable orders={orders}/>
    </div>
  );
}

export default App;
