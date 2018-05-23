import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import logo from './logo.svg';

//Components
import { Navbar } from './components/Navbar/navbar';
import { Navbar2 } from './components/Navbar/navbar2';
import { Wrapper } from './components/Wrapper/wrapper';
import { Footer } from './components/Footer/footer';

//Pages
import { Home } from './pages/Home/home';
import { Contact } from './pages/Contact/contact';

//Routes
import { Port1 } from './routes/Port1/Port1'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar2/>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/Port1' component={ Port1 } />

              <Route render= {() => <p>Page Not Found 404</p>} />
          </Switch>
          <Wrapper/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
