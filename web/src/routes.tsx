import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from './services/client';

import Home from './pages/Home';
import NewRegister from './pages/NewRegister';
import EditRegister from './pages/EditRegister';
import Test from './components/Test';

const Routes = () => {
  
  return(
    <BrowserRouter>
      <Switch >
        <ApolloProvider client={client} >
          <Route component={Home} path="/" exact />
          <Route path="/test" exact component={Test} />
          <Route path="/new" component={NewRegister} />
          <Route path="/register/:id" component={EditRegister} />
        </ApolloProvider>
      </Switch>      
    </BrowserRouter>
  );
};

export default Routes;