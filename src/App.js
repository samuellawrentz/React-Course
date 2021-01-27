import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Component } from 'react';
import Main from "./components/MainComponent";

class App extends Component {
  render(){ 
    return (
    <div className="App">
      <Main />
    </div>
  );
}
}

export default App;
