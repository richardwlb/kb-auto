import { makeStyles } from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      // marginLeft: '0rem',
      height: '100%',
    },
    editButton: {
      backgroundColor: theme.palette.background.default,
      margin: '5px',
      width: '50vw',
      '@media (min-width: 800px)': {
        maxWidth: '150px'
      }
    },
    actionsContainer: {
      marginTop: '0.5rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: theme.palette.primary.main,
    }
  })
);

export default useStyles;