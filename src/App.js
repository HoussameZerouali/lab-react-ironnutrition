import React, {Component} from 'react';
import logo from './logo.svg';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import TodaysFood from './components/TodaysFood';
import 'bulma/css/bulma.css';
import './App.css';



class App extends React.Component {
  state = {
    food: foods,
    searchValue: "",
  }


  handleChange = (event) => {
    
    this.setState({
      searchValue: event.target.value,
    })
    
  }

  addFood = (food) => {
    this.setState({
      food: [food, ...this.state.food]
    })
  }

  render(){
    const filteredFood = this.state.food.filter((food) => {
      return food.name.startsWith(this.state.searchValue);
    })
    return (
        <div className="App">
          <FoodForm onSubmit={this.addFood}/>
          
          Search Food :
          <SearchBar value={this.state.searchValue} onChange={this.handleChange}/>
          <div className = "Main-div">
            
            <div>
            {filteredFood.map((food) => {
              return (
                <FoodBox food={food} />
              )
            })}
            </div>
            <div>
            <TodaysFood className="Search-div"/>
            </div>
            

          </div>
          
          
        </div>
      );
    }
  }
  

export default App;

class SearchBar extends React.Component {
  render() {
    return <input value={this.props.value} onChange={this.props.onChange} />
  }
}