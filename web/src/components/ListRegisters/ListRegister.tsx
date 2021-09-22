import { useQuery } from '@apollo/client';
import { Button, List, ListItem, Paper, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { Waypoint } from "react-waypoint";

import { LIST_REGISTERS, SOME_REGISTERS } from '../../services/queries';
import RegisterCard from "../RegisterCard";

export default function ListRegisters() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery(LIST_REGISTERS, {
    onError: (error) => console.log("Error to load data", error),
    onCompleted: (res) => {
      console.log('Result:',res)
    },
    // variables: {
    //   offset: 0,
    //   limit: 2
    // },
  });

  // const [offset, setOffset] = useState(2);

  // const { data, fetchMore, error } = useQuery(SOME_REGISTERS, {
  //   variables: {
  //     offset: 0,
  //     limit: 2
  //   },
  //   // onCompleted: (_data) => {
  //   //   console.log('Result', _data);
  //   // },
  //   notifyOnNetworkStatusChange: true,
  // });

  // const handleMore = () => {
  //   const nextOffset = offset + 2;
  //   setOffset(nextOffset);

  //   fetchMore({
  //     variables: {
  //       offset,
  //       limit: 2
  //     },
      // This part makes the same of the configures in services.ts
      // -->
      // updateQuery: (prevResult, { fetchMoreResult }) => {
      //   if (!fetchMoreResult) { 
      //     return prevResult; 
      //   }
      //   return {
      //     // ...prevResult,
      //     someKbRegisters: [
      //       ...prevResult.someKbRegisters,
      //       ...fetchMoreResult.someKbRegisters,
      //     ]
      //   }
      // },
      // <--
  //   });
  // };

  if (error) return (<>{`Error! ${error.message}`}</>);

  // Very important, do not use loading, because it will load the entire list again.
  if (loading) return (<>Loading...</>);
  // if (!data) {
  //   return <CircularProgress />;
  // }
  if(!data) return (<>not found</>);

  return(
    <>
      {data.kbRegisters.map((register: any) => {
        return <RegisterCard key={register.id} register={register} />
      })}
        {/* <Button 
          type="button"
          onClick={() => handleMore()}
          variant="contained" >
          Carregar mais
        </Button> */}
    </>
  );
}