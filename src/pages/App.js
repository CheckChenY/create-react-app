import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import '../styles/App.css';

class App extends Component {
  render() {
      const self = this.props;
      console.log(self);
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/about'>关于</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
  }
}

export default App;
