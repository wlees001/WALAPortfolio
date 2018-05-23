import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navbar2 extends Component {
    render() {
       return (
                    <div id="header-wrapper">
                    <div id="header" className="container">
                    {/* Logo */}
                    <h1 id="logo"><a href="index.html">WALA DESIGNS</a></h1>
                    {/* Nav */}
                    <nav id="nav">
                        <ul>
                        <li>
                            <a href="#">About</a>
                            <ul>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Magna phasellus</a></li>
                            <li><a href="#">Etiam dolore nisl</a></li>
                            <li>
                                <a href="#">Phasellus consequat</a>
                                <ul>
                                <li><a href="#">Lorem ipsum dolor</a></li>
                                <li><a href="#">Phasellus consequat</a></li>
                                <li><a href="#">Magna phasellus</a></li>
                                <li><a href="#">Etiam dolore nisl</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Veroeros feugiat</a></li>
                            </ul>
                        </li>
                        <li><a href="left-sidebar.html">Left Sidebar</a></li>
                        <li className="break"><a href="right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="no-sidebar.html">Contact</a></li>
                        </ul>
                    </nav>
                    </div>
                    </div>
                );
            }
};

export default Navbar2;