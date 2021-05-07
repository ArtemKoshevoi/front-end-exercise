import React from 'react';
import { useStyles } from './style';

interface Props {
  totalSum: number
}

const TabHeader: React.FC<Props> = ({totalSum}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Orders</h1>
      <div className={'table-header'}>
        <div className={'tab-title'}>
          <span className={'active-tab'}>All</span>
          <span>Shipped</span>
        </div>
        <div className={'total-orders'}>
          <span>Total Orders:</span>
          <span className={'total-sum'}>
            <strong className={'sum-count'}>${totalSum} </strong>
            USD
          </span>
        </div>
      </div>
    </div>
  );
};
export default TabHeader;
