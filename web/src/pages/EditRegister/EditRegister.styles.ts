import { makeStyles } from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginLeft: '0rem',
    },
    editButton: {
      // minWidth: '90px',
      margin: '5px',
      width: '50vw',
      '@media (min-width: 800px)': {
        maxWidth: '250px'
      }
    },
    actionsContainer: {
      marginTop: '0.5rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
  })
);

export default useStyles;