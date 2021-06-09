import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from './services';

import Home from './pages/Home';
import Test from './components/Test';

const Routes = () => {
  
  return(
    <BrowserRouter>
      <Switch >
        <ApolloProvider client={client} >
          <Route component={Home} path="/" exact />
          <Route path="/test" exact component={Test} />
        </ApolloProvider>
      </Switch>      
    </BrowserRouter>
  );
};

// "wwww

export default Routes;