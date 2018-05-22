import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import logo from './logo.svg';

//Components
import { Navbar } from './components/Navbar/navbar';

//Pages
import { Home } from './pages/Home/home';

//Routes
import { Port1 } from './routes/Port1/Port1'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/Port1' component={ Port1 } />

              <Route render= {() => <p>Page Not Found 404</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
