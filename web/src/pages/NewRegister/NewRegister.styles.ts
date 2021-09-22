import { makeStyles } from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginLeft: '0rem',
    }
  })
);

export default useStyles;