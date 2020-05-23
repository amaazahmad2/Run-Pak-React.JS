import React from 'react';
import SideDrawer from "./components/SideDrawer/sidedrawer"
import Content from './components/MainContent/content'
import SportsIcons from './components/MainContent/Welcome/sportsIcons'
import sportsIcons from './components/MainContent/Welcome/sportsIcons';


class App extends React.Component{

   state = {
      sideDrawerVisible : false
   };

   drawerButtonToggle = () => {
      this.setState({
         sideDrawerVisible:!this.state.sideDrawerVisible
      })
   };


   render(){

      return(
         
         <div className="App">
            <SideDrawer routingClickHandler={this.drawerButtonToggle} isOpen = {this.state.sideDrawerVisible}/>
            <main style={{maxWidth:'100%'}}>
               <Content sideDrawerState={this.state.sideDrawerVisible} drawerClickHandler={this.drawerButtonToggle} />
            </main>
         </div>
         
         
      )
   }
}

export default App;
