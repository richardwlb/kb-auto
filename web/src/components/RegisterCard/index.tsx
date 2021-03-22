import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    backgroundColor: 'white',
    // padding: '2px',
    margin: '10px',
  },
  cardDetails: {
    // minWidth: '120px',
  },
  textNormal: {
    fontSize: '13px',
  },
  textTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  cardButton: {
    // justifyContent: 'flex-center',
    // display: 'flex',
    margin: 'auto',
    width: '100vw',
    marginLeft: '10px',
    '@media (min-width: 800px)': {
      width: '100px',
    }
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
}));

export default function RegisterCard() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card color="secondary" className={classes.root} >
      <CardContent className={classes.cardDetails}>
        <Typography className={classes.textTitle} >
          Ignição BMW
        </Typography >
        <Typography className={classes.textNormal} >
          Peugeot
        </Typography>
        <Typography className={classes.textNormal} >
          206 - flex
        </Typography>
        <Typography className={classes.textNormal} >
          2008
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.textNormal} >
        sAqui texto grande ara sdjiajdia simcaksd sd soa sa
        Aqui texto grande ara sdjiajdia simcaksd sd soa sa
        Aqui texto grande ara sdjiajdia simcaksd sd soa 
        </Typography>
      </CardContent>

      
        <div className={classes.actionsContainer} >
          <CardActions  >
            <Button 
              className={classes.cardButton}
              size="small"
              color="primary"
              variant="contained"
            >
              detalhes
            </Button>
          </CardActions>
        </div>
      
    </Card>


  );
}