import React, { useEffect, useState } from 'react';

export default function Test() {  
    const [infos, setInfos] = useState([
        { 'info1': '', 'info2': '', 'info3': '' }
    ]);

    const vemDoBanco = [
      { 'info1': '111', 'info2': '', 'info3': 'rrr' },
      { 'info1': '222', 'info2': '555', 'info3': 'ttt' },
      { 'info1': '333', 'info2': '3', 'info3': 'yyy' }
    ];

    useEffect(() => {
      setInfos(vemDoBanco);
    }, []);
    
    function addNewInfoItem() {
        setInfos([
            ...infos,
            { 'info1': '', 'info2': '', 'info3': '' }
        ]);
    };

    function removeInfoItem(index: any) {
        const itensCopy = Array.from(infos);
        itensCopy.splice(index, 1);
        setInfos(itensCopy);
    };

    function updateInfosItem(position:number, field:string, item:string) {
    const updatedInfoItems = infos.map((standardItem, index) => {
        if (index === position) {
            return { ...standardItem, [field]: item }
        }
        return standardItem
    })
    setInfos(updatedInfoItems)
  }

  return (
    <div>
        {infos.map((item, index) => {
            return (
                <div key={index}>
                    <button onClick={e => removeInfoItem(index)}> Remover </button>
                    <input
                        required
                        type="text"
                        value={item.info1}
                        onChange={e => updateInfosItem(index, 'info1', e.target.value)}
                    />
                    <input
                        required
                        type="text"
                        value={item.info2}
                        onChange={e => updateInfosItem(index, 'info2', e.target.value)}
                    />
                    <input
                        required
                        type="text"
                        value={item.info3}
                        onChange={e => updateInfosItem(index, 'info3', e.target.value)}
                    />
                </div>
            );
        })}
        <pre> {JSON.stringify(infos, null, 4)} </pre>
        <button onClick={addNewInfoItem}> Adicionar </button> 
    </div>
  );
}