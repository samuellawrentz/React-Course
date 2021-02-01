import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Component } from 'react';
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
