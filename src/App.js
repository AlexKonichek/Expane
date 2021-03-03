import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import AddUserScreen from './Screens/AddNewUserScreen';
import EditUserScreen from './Screens/EditUserScreen';


function App() {
  return (
      <Router>
        <Navbar/>
        
      <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/add">
            <AddUserScreen />
          </Route>
          <Route path="/edit/:id">
            <EditUserScreen />
          </Route>
      </Switch>
      </Router>
    
  )
  
  }

export default App;
