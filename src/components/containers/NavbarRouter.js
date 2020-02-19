import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Blogpost from '../pages/Blogpost'
import Gallery from '../pages/Gallery'
import Calendar from '../pages/Calendar'
import Admin from '../pages/Admin'

class NavbarRouter extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        navColor: [256, 256, 256]
      }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, true);
    }

    handleScroll = () => {

      var scrollVal = window.scrollY/window.innerWidth;

      var aboutPageVal = (Math.round(scrollVal*100) - 50) * 5;

      //lerp from white to gray:
      const wrgb = 255;
      if (aboutPageVal > -100 && aboutPageVal < 50) {
          var lerpLength = 100 - -50;
          var progress = aboutPageVal + 100; //start from 0 -150 + 150 = 0
          var proportion = progress / lerpLength;
          this.setState({navColor:[
              256 - (proportion * (256 - 205)),
              256 - (proportion * (256 - 92)),
              256 - (proportion * (256 - 92))]});
      }
    }

    resetNav=() => {
      this.setState({navColor:[256,256,256]});
    } 

    render() {
      return (
        <Router>
        <Navbar className="navbar-top-right" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Link style={{color:`rgb(${this.state.navColor[0]},
                      ${this.state.navColor[1]},
                      ${this.state.navColor[2]})`}} to="/" onClick={this.resetNav}>Home</Link>
            
              <Link style={{color:`rgb(${this.state.navColor[0]},
                      ${this.state.navColor[1]},
                      ${this.state.navColor[2]})`}} to="/Blog" onClick={this.resetNav}>Blog</Link>
              <Link style={{color:`rgb(${this.state.navColor[0]},
                      ${this.state.navColor[1]},
                      ${this.state.navColor[2]})`}} to="/Gallery" onClick={this.resetNav}>Gallery</Link>
              <Link style={{color:`rgb(${this.state.navColor[0]},
                      ${this.state.navColor[1]},
                      ${this.state.navColor[2]})`}} to="/Calendar" onClick={this.resetNav}>Calendar</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

          <Switch>
            <Route path="/Blog" component={Blog}/>
            <Route exact path="/" component={Home}/>            
            <Route path="/Gallery" component={Gallery}/>
            <Route path="/Calendar" component={Calendar}/>
            <Route path="/Admin" component={Admin}/>
            <Route path="/blogpost/:blogObj" component={Blogpost} />
          </Switch>
        </Router>
      );
  }
}

export default NavbarRouter;
