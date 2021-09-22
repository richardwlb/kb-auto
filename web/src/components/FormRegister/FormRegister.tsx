import { TextField, Button, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useState } from 'react';

import useStyles from './FormRegisters.styles';

interface FormRegisterProps {
  action: Function;
}

const FormRegister: React.FC<FormRegisterProps> = ( props ) => {
  const [title, setTitle] = useState<String>('');
  const [brand, setBrand] = useState<any>('');
  const [model, setModel] = useState<any>('');
  const [year, setYear] = useState<any>();
  const [problem, setProblem] = useState<String>('');
  const [solution, setSolution] = useState<String>('');

  

  const classes = useStyles();

  return (
    <div>
      <h3>form</h3>
      <div className={classes.formWrapper}>
        {/* <form className={classes.formWrapper} onSubmit={props.action}> */}
          <TextField 
            style={{ marginBottom:'2rem' }}
            fullWidth 
            id='car-title'  
            label='Título' 
            variant='outlined'
            value={title}
            onChange={ e => setTitle(e.target.value)}
          />

          <InputLabel id="car-brand-label">Marca</InputLabel>
          <Select
            style={{ marginBottom:'2rem', maxWidth: '15rem' }}
            labelId="car-brand-label"
            id="car-brand"
            name="car-brand"
            variant='outlined'
            required
            value={brand}
            label="Marca"
            onChange={ e => setBrand(e.target.value)}
          >
            <MenuItem value='Honda'>Honda</MenuItem>
            <MenuItem value='Ford'>Ford</MenuItem>
            <MenuItem value='Chevrolet'>Chevrolet</MenuItem>
          </Select>

          <InputLabel id="car-model-label">Modelo</InputLabel>
          <Select
            style={{ marginBottom:'2rem', maxWidth: '15rem' }}
            labelId="car-model-label"
            id="car-model"
            name="car-model"
            variant='outlined'
            required
            value={model}
            label="Marca"
            onChange={ e => setModel(e.target.value)}
          >
            <MenuItem value='Civic'>Civic</MenuItem>
            <MenuItem value='Fit'>Fit</MenuItem>
            <MenuItem value='HRV'>HRV</MenuItem>
          </Select>

          <TextField 
            style={{ marginBottom:'2rem', maxWidth: '10rem' }}
            id='car-year' 
            label='Ano' 
            variant='outlined'
            value={year}
            onChange={ e => setYear(e.target.value)}
          />

          <TextField 
            style={{ marginBottom:'2rem'}}
            id='car-problem' 
            label='Problema' 
            variant='outlined'
            multiline
            rows={4}
            value={problem}
            onChange={ e => setProblem(e.target.value)}
          />
          
          <TextField 
            style={{ marginBottom:'2rem'}}
            id='car-solution' 
            label='Solução' 
            variant='outlined'
            multiline
            rows={4}
            value={solution}
            onChange={ e => setSolution(e.target.value)}
          />

          {/* <Button type='submit' >Enviar</Button> */}
        {/* </form> */}
        
      </div>
    </div>
    )
}

export default FormRegister;