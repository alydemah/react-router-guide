import React from 'react';
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Beign by rendering a route that wrap all the app components


const App = () => (
  <BrowserRouter>
  <div className="container">
    <Header />
    
    <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" render={ () => <About title={'About'}/> } />
  <Route path="/teachers" component={Teachers} />
  <Route path="/courses" component={Courses} />
  <Route component={NotFound} />
  </Switch>

  </div>
  </BrowserRouter>
);

export default App;