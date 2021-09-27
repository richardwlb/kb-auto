import { Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import FormRegister from "../../components/FormRegister";
import useStyles from './NewRegister.styles';
import { NEW_REGISTER } from '../../services/mutations';
import { getFormData } from '../../utils/form';
import TopBarRegister from '../../components/TopBarRegister';

export default function NewRegister() {
  const classes = useStyles();
  const history = useHistory();
  const [new_register, { loading, error}] = useMutation(NEW_REGISTER, );

  const HandleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formData = getFormData(e);

    await new_register({ variables: formData }); // TO DO - try catch

    history.push('/');
  };

  return (
    <div className={classes.wrapper} >
      <form onSubmit={HandleSubmit} >
        <TopBarRegister to="/" text='Novo registro' />
        <FormRegister/>
        {loading ?
          <h4>salvando</h4>
        : 
          <div className={classes.actionsContainer}>
            <Button variant="contained" type='submit' >Adicionar</Button>
          </div>}
        {error && <h4>`Erro ao salvar ${error}`</h4>}
      </form>
    </div>
  )
}