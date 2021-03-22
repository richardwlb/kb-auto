import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Test from './components/Test';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/test" exact component={Test} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
