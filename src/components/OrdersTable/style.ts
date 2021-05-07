import { makeStyles } from '@material-ui/core';

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

export { useStyles };
