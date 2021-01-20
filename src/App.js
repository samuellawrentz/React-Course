import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import { Menu } from "./components/Menu";
import { DISHES } from "./shared/dishes";

class App extends Component {
  state = {
    dishes: DISHES
  }

  render(){ 
    return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
    </div>
  );
}
}

export default App;
