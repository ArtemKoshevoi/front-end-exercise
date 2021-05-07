import React from "react";
import ReactDOM from 'react-dom';
import OrdersTable from '../components/OrdersTable';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrdersTable />, div);
});

