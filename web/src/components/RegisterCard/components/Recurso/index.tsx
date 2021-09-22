import { ChangeEvent, useState } from 'react';

export default function Recurso (prop: { nomeRecurso: string }){
  const _nom = prop.nomeRecurso;

  const [nomeRecurso, setNomeRecurso] = useState(_nom);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNomeRecurso(event.target.value);
  }

  return(
    <div style={{ margin: '1rem' }} >
      <label>Nome recurso</label>
      <input 
        width="36px" 
        type="text" 
        value={nomeRecurso}
        onChange={ev => handleInputChange(ev)}
      />
    </div>
  )
}