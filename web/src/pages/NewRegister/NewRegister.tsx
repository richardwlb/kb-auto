import { Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';

import FormRegister from "../../components/FormRegister";
import useStyles from './NewRegister.styles';
import { NEW_REGISTER } from '../../services/mutations';

export default function NewRegister() {
  const classes = useStyles();
  const [new_register, { loading, error}] = useMutation(NEW_REGISTER, );

  const HandleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      'car-title': { value: string };
      'car-brand': { value: string };
      'car-model': { value: string };
      'car-year': { value: string };
      'car-problem': { value: string };
      'car-solution': { value: string };
    };
    const title = target["car-title"].value; 
    const brand = target["car-brand"].value; 
    const model = target["car-model"].value; 
    const year = target["car-year"].value; 
    const problem = target["car-problem"].value; 
    const solution = target["car-solution"].value; 

    console.log('target', {
      title,
      brand,
      model,
      year,
      problem,
      solution,
    });

    new_register({
        variables: {
          title,
          brand,
          model,
          year: parseInt(year),
          problem,
          solution,
        }
    });
  };

  return (
    <div className={classes.wrapper} >
      <form onSubmit={HandleSubmit} >
        <h4>Novo Registro</h4>
        <FormRegister action={HandleSubmit}/>
        {loading ?
        <h4>salvando</h4>  
        : <Button type='submit' >Enviar</Button>}
        {error && <h4>`Erro ao salvar ${error}`</h4>}
      </form>
    </div>
  )
}