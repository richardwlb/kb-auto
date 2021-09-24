import { Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';

import FormRegister from "../../components/FormRegister";
import useStyles from './NewRegister.styles';
import { NEW_REGISTER } from '../../services/mutations';
import { getFormData } from '../../utils/form';

export default function NewRegister() {
  const classes = useStyles();
  const [new_register, { loading, error}] = useMutation(NEW_REGISTER, );

  const HandleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const formData = getFormData(e);

    new_register({ variables: formData });
  };

  return (
    <div className={classes.wrapper} >
      <form onSubmit={HandleSubmit} >
        <h4>Novo Registro</h4>
        <FormRegister/>
        {loading ?
        <h4>salvando</h4>  
        : <Button type='submit' >Enviar</Button>}
        {error && <h4>`Erro ao salvar ${error}`</h4>}
      </form>
    </div>
  )
}