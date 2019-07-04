import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import routes from './routes';
import Login from './main/login.component';
import Domain from './domain/domain.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => <Route {...route} />)}
        {/* <Route path="/" component={Login}></Route>
        <Route path="/domain" component={Domain}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
