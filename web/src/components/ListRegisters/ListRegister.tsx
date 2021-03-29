import { useQuery } from '@apollo/client';

import { LIST_REGISTERS } from '../../services';
import RegisterCard from "../RegisterCard";

export default function ListRegisters() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery(LIST_REGISTERS, {
    onError: (error) => console.log("Error to load data", error),
    onCompleted: (res) => {
      // console.log('Result:',res)
    }
  });

  if (loading) return (<>Loading...</>);
  if (error) return (<>{`Error! ${error.message}`}</>);

  return(
    data.kbRegisters.map((register: any) => {
      return <RegisterCard key={register.id} register={register} />
    })
  );
}