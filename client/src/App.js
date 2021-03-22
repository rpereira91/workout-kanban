import BoardDisplay from './components/BoardDisplay';
import AddExercise from './components/AddExercise';
import { Provider } from 'react-redux'
import store from './redux/store';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

import './App.css';
Amplify.configure(awsmobile);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AmplifySignOut />
        <Router>
            <Switch>
              <Route exact path='/add' component={AddExercise} />
              <Route path='/' component={BoardDisplay} />
              <Route render={() => <Redirect to='/' />} />

            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default withAuthenticator(App);
