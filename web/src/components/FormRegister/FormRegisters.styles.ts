import { makeStyles } from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      background: 'white'
    }
  })
);

export default useStyles;