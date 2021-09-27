import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

import useStyles from './TopBarRegister.styles';

interface FormRegisterProps {
  to: string;
  text: string;
}

const TopBarRegister: React.FC<FormRegisterProps> = ( props ) => {
  const classes = useStyles();

  return (
    <div className={classes.topContainer} >
      <Link className={classes.linkBack} to={props.to}>
        <ArrowBack />
      </Link>
      <h4>{props.text}</h4>
    </div>
  )
}

export default TopBarRegister;