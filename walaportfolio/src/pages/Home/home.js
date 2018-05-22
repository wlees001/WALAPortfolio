import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export class Home extends Component {
    render() {
       return (
        <nav id="nav">
        <ul>
          <li className="opener" style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap'}}>
            <a>Dropdown</a>
            <ul className style={{userSelect: 'none', display: 'none', position: 'absolute'}}>
              <li style={{whiteSpace: 'nowrap'}}><a style={{display: 'block'}}>Lorem ipsum dolor</a></li>
              <li style={{whiteSpace: 'nowrap'}}><a style={{display: 'block'}}>Magna phasellus</a></li>
              <li style={{whiteSpace: 'nowrap'}}><a style={{display: 'block'}}>Etiam dolore nisl</a></li>
              <li className="opener" style={{userSelect: 'none', cursor: 'pointer', whiteSpace: 'nowrap'}}>
                <a  style={{display: 'block'}}>Phasellus consequat</a>
                <ul style={{userSelect: 'none', display: 'none', position: 'absolute'}} className="dropotron">
                  <li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Lorem ipsum dolor</a></li>
                  <li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Phasellus consequat</a></li>
                  <li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Magna phasellus</a></li>
                  <li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Etiam dolore nisl</a></li>
                </ul>
              </li>
              <li style={{whiteSpace: 'nowrap'}}><a href="#" style={{display: 'block'}}>Veroeros feugiat</a></li>
            </ul></li>
          <li style={{whiteSpace: 'nowrap'}}><a href="left-sidebar.html">Left Sidebar</a></li>
          <li className="break" style={{whiteSpace: 'nowrap'}}><a href="right-sidebar.html">Right Sidebar</a></li>
          <li style={{whiteSpace: 'nowrap'}}><a href="no-sidebar.html">No Sidebar</a></li>
        </ul>
      </nav>
       )
    }
}

export default Home;