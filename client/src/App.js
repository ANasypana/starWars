import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import {Provider} from 'react-redux';
import store from './store';

//Components
import {Navbar} from './components/layout/Navbar';
import {Landing} from './components/layout/Landing';
import {Planets} from './components/planet/Planets';
import {Planet} from './components/planet/Plenet';
import {Person} from './components/people/Person';
import {Alert} from './components/layout/Alert';
import {NotFound} from './components/layout/NotFound';


export const App = () => {
  return(
      <Provider store={store}>
          <Router>
              <>
                  <Navbar/>
                  <section className="container">
                      <Alert />
                      <Switch>
                          <Route exact path="/" component={Landing}/>
                          <Route exact path="/planets" component={Planets}/>
                          <Route exact path="/planets/:id" component={Planet}/>
                          <Route exact path="/people/:id" component={Person}/>
                          <Route component={NotFound}/>
                      </Switch>
                  </section>
              </>
          </Router>
      </Provider>
  )
}