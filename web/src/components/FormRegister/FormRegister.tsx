import { TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useEffect, useState } from 'react';

import { Register } from '../../types';
import useStyles from './FormRegisters.styles';

interface FormRegisterProps {
  register?: Register;
}

const FormRegister: React.FC<FormRegisterProps> = ( props ) => {
  const [title, setTitle] = useState<String>('');
  const [brand, setBrand] = useState<any>('');
  const [model, setModel] = useState<any>('');
  const [year, setYear] = useState<any>('');
  const [problem, setProblem] = useState<String>('');
  const [solution, setSolution] = useState<String>('');

  const classes = useStyles();

  useEffect(() => {
    if(props.register) {
      setTitle(props.register?.title);
      setBrand(props.register?.car_brand);
      setModel(props.register?.car_model);
      setYear(props.register?.car_year);
      setProblem(props.register?.desc_problem);
      setSolution(props.register?.desc_solution);
    }
  }, [props.register]);

  return (
    <div>
      <div className={classes.formWrapper}>
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
      </div>
    </div>
    )
}

export default FormRegister;