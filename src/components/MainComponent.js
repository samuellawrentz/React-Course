import { Component } from 'react';
import  Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  state = {
    dishes: DISHES,
  }

  render(){ 
    const Homepage = (props) =>{
      return (
        <div>
          <Home></Home>
        </div>
      )
    }
    return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
    </div>
  );
}
}

export default Main;
