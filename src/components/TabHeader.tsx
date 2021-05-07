import React from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  totalSum: number
}

const useStyles = makeStyles({
  root: {
    '& h1': {
      textTransform: 'uppercase',
      fontSize: 14,
      color: '#6E6893',
      marginBottom: 20,
    },

    '& .table-header': {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: 1100,
      marginBottom: 20,
      paddingBottom: 11,
      borderBottom: '1px solid #C6C2DE',
      color: '#6E6893',

      '& .tab-title': {
        fontSize: 14,
        cursor: 'pointer',

        '& .active-tab': {
          color: '#25213B',
          paddingBottom: 14,
          marginRight: 20,
          padding: '0px 5px 11px 5px',
          borderBottom: '1px solid #25213B',
        }
      },

      '& .total-orders': {
        display: 'flex',
        alignItems: 'baseline',

        '& .total-sum': {
          fontSize: 18,
          marginLeft: 3,

          '& .sum-count': {
            color: '#6D5BD0'
          }
        }
      }
    }
  },
});

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
