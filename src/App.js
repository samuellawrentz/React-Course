import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import { Menu } from "./components/Menu";

class App extends Component {
  render(){ 
    return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu></Menu>
    </div>
  );
}
}

export default App;
