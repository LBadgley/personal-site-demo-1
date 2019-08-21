import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
        text: 'Check out my projects below',
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
                <Link className="nav-Link" to="/">Home</Link>
                <Link className="nav-Link" to="/about">About</Link>
                <Link className="nav-Link" to="/contact">Contact</Link>

              </Nav>
            </NavBar.Collapse>
          </NavBar>
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} />}  subTitle={this.state.home.subTitle} text={this.state.home.text} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
