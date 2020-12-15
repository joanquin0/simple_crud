import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Adduser} from './Components/Adduser';
import {Home} from './Components/Home';
import {Edituser} from './Components/Edituser';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
        <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path="/add" component={Adduser}/>
      <Route path="/edit" component={Edituser}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
