import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import AddUserScreen from './screens/AddNewUserScreen';
import EditUserScreen from './screens/EditUserScreen';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
  }

export default App;
