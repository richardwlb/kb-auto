import { makeStyles } from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.primary.main,
    alignItems: 'center',
    color: theme.palette.common.white,
    },
    linkBack: {
      margin: '0 1rem 0 1rem',
      color: theme.palette.common.white,
    }
  })
);

export default useStyles;