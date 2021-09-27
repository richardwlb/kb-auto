import { Button } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import { useParams, useHistory, Link } from 'react-router-dom';

import FormRegister from "../../components/FormRegister";
import useStyles from './EditRegister.styles';
import { GET_REGISTER } from '../../services/queries';
import { DELETE_REGISTER, UPDATE_REGISTER } from '../../services/mutations';
import { getFormData } from '../../utils/form';
import TopBarRegister from '../../components/TopBarRegister';

export default function EditRegister() {
  const classes = useStyles();
  const { id } = useParams<{id?: string}>();
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_REGISTER, {
    onError: (error) => console.log('Error to load data', error),
    variables: {
      id: id
    }
  },);

  const [update_register] = useMutation(UPDATE_REGISTER);
  const [delete_register] = useMutation(DELETE_REGISTER);
  
  const HandleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const formData = { ...getFormData(e), id};

    update_register({ variables: formData });
    history.push('/');
  };

  const handleDelete = async () => {
    console.log('aqui')
    if (window.confirm('Tem certeza que deseja deletar este registro?')) {
      await delete_register({ variables: { id } }); // TO DO - try catch
      history.push('/');
    } 
  };

  return (
    <div className={classes.wrapper} >
      <form onSubmit={HandleSubmit} >
        <TopBarRegister to="/" text="Editar registro" />
        <FormRegister register={data?.kbRegister}/>
        {loading ?
          <h4>salvando</h4>  
        : 
          <div className={classes.actionsContainer} >
            <Button variant="contained" className={classes.editButton} onClick={() => handleDelete() }>Deletar</Button>
            <Button variant="contained" className={classes.editButton} type='submit' >Atualizar</Button>
          </div>}
        {error && <h4>`Erro ao salvar ${error}`</h4>}
      </form>
    </div>
  )
}