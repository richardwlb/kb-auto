import {
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    borderStyle: 'solid',
    borderColor: '#263238',

    height: '80vh',
    width: '60vw',
    padding: '10px',
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  button: {
    // position: 'relative',
    // left: '10px',
    // margin: '10px'
  }
}));

export default function Test() {
  const classes = useStyles();

  return(
    <section className={classes.section}>
      <Button 
        size="small"
        className={classes.button}
        // color="primary"
      >
        Botão
      </Button>
      <Button 
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Botão
      </Button>
    </section>
  )
}