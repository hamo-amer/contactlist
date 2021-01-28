import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './App.css';

function App() {

  return ( 
    <Router>
    <div className="App">
   <Switch>
     <Route path='/home' render={()=><h1>Home Page</h1>} />
     <Route path='/dashbord' render={()=><h1>Dashbord Page</h1>} />
   </Switch>
    </div>
    </Router>
  );
}

export default App;
