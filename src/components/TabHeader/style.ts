import { makeStyles } from '@material-ui/core';

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

export { useStyles };
