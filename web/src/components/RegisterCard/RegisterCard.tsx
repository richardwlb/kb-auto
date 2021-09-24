import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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
    position: 'relative',
    // margin: 'auto',
    width: '100vw',
    marginLeft: '100px',
    '@media (min-width: 800px)': {
      width: '100px',
    }
  },
  actionsContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: '20px'
  }
}));

export interface Register {
  id: number;
  title: string;
  car_brand: string;
  car_model: string;
  car_year: number;
  desc_problem: string;
  desc_solution: string;
}

interface RegisterProps {
  register: Register;
}

// export default function RegisterCard({ register }) {
const RegisterCard: React.FC<RegisterProps> = ({ register }) => {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card color="secondary" className={classes.root} >
      <CardContent className={classes.cardDetails}>
        <Typography className={classes.textTitle} >
          {register.id}
        </Typography >
        <Typography className={classes.textTitle} >
          {register.title}
        </Typography >
        <Typography className={classes.textNormal} >
          {register.car_brand}
        </Typography>
        <Typography className={classes.textNormal} >
          {register.car_model}
        </Typography>
        <Typography className={classes.textNormal} >
          {register.car_year}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.textNormal} >
          {register.desc_problem} 
        </Typography>
        <Typography className={classes.textNormal} >
          {register.desc_solution} 
        </Typography>
      </CardContent>
        <div className={classes.actionsContainer} >
          <CardActions >
            <Link to={`/register/${register.id}`} >
              <Button 
                className={classes.cardButton}
                size="small"
                color="primary"
                variant="contained"
              >
                detalhes
              </Button>
            </Link>
          </CardActions>
        </div>
    </Card>
  );
};

export default RegisterCard;