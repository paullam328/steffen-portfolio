import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarRouter from './containers/NavbarRouter'

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <NavbarRouter></NavbarRouter>
        </div>
      );
  }
}

export default App;
