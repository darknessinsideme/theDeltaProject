import React, { Component } from 'react';
import {Sidebar} from './components/sidebar/sidebar';
import TopNav from './components/topNavigation/topNav';
import Body from './components/body/box';
import Data from './components/body/data/cvSunmmaryInfo'
class App extends Component {
  constructor(){
    super()
    this.state= {
      cvSummerys: Data,
      sidebarItem : ['Html', 'Css', 'JavaScript','Node', 'DataBase', 'React'],
      IsLoggedIn: true,
    } 
    this.Login= this.Login.bind(this) 
  }
  Login(){
    return(<h1>Welcome to the Login page</h1>)
  }
  render() {
    return (
      <div className="App">
          <TopNav loginStatus={this.state.IsLoggedIn} key='its working'/>
          <Sidebar item={this.state.sidebarItem}/> 
          {this.state.cvSummerys.map(cvSummery =>{
            return(<Body cvSummery={cvSummery}/>)
          })}
      </div>  
    );
  }
}


export default App; 
