import { Component } from 'react';
import  Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishSelect(dishId) }}></Menu>
        <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
        <Footer />
    </div>
  );
}
}

export default Main;
