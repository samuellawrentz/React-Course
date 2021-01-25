import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import { Menu } from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import {  DishDetail } from "./DishDetailComponent";

class Main extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null
  }

      // Event handler for Dish Select
      onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

  render(){ 
    return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
        <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishSelect(dishId) }}></Menu>
        <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
        </div>
    </div>
  );
}
}

export default Main;