import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    console.log('Component Constructing...')
    this.state = {
      myName: 'Dale',
      classmates: []
    }
  }

  componentDidMount(){
    console.log('Component Did Mount...')
    fetch('https://kekambas-bs.herokuapp.com/kekambas')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          class: data
        })
      })
  }

  render() {
    console.log('Component Rendering...')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName}/>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home myName={myName} updateName={this.updateName} allClassmates={this.state.classmates}/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}
