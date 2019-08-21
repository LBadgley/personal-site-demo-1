import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Laura Badgley',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact Me', path: '/contact' }
      ],
      home: {
        title: 'Hi, I\'m Laura',
        subTitle: 'Fun projects I\'ve made',
        smallDescriptionText: 'Check out my projects below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Talk',
      }
    }
  }


  render () {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Laura Badgley</NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />

            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-Link" to="/Home">Home</Link>
                <Link className="nav-Link" to="/About">About</Link>
                <Link className="nav-Link" to="/Contact">Contact</Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
