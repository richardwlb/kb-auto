import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import ListRegister from './ListRegister';
import { LIST_REGISTERS, SOME_REGISTERS } from '../../services/queries';

const mocks = [
  {
    request: {
      query: LIST_REGISTERS,
    },
    result: {
      data: {
        kbRegisters: [{
          id: 1,
          title: "title",
          car_brand: "Honda",
          car_model: "CIVIC",
          car_year: 2010,
          desc_problem: "volante",
          desc_solution: "trocar volante",
        }]
      },
      variables: {
        offset: 0,
        limit: 2
      },
    }
  },
  {
    request: {
      query: SOME_REGISTERS,
    },
    result: {
      data: {
        kbRegisters: [{
          id: 1,
          title: "title",
          car_brand: "Honda",
          car_model: "CIVIC",
          car_year: 2010,
          desc_problem: "volante",
          desc_solution: "trocar volante",
        }]
      },
      variables: {
        offset: 0,
        limit: 2
      },
    }
  }
];

it("renders list of registers", async () => {
  const { getByText, findByText } = render(
    <MockedProvider mocks={mocks} addTypename={false} >
      <ListRegister />
    </MockedProvider>
  );
  screen.debug();
  // expect(getByText("Loading...")).toBeInTheDocument();

  // const carModel = await findByText("CIVIC");
  // expect(carModel).toBeInTheDocument();

});

