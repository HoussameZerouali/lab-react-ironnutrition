import React, { Component } from "react";

class FoodForm extends React.Component {
    state = {
        name: '',
        image: '',
        calories:0,
        quantity:0,
    }

    handleChange = (event) => {
       const {name, value} = event.target;
       this.setState({
           [name]: value,
       })

    } 

    handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(this.state);
    
        const food = {
          name: this.state.name,
          image: this.state.image,
          calories: this.state.calories,
          quantity: this.state.quantity,
        };
    
        this.props.onSubmit(food);
        console.log(this.state)
        
      };

    //   showForm = (event) => {
    //       event.preventDefault();
    //       return
    //   }

      render() {
          return (
              <div>
                <form onSubmit={this.handleSubmit} className="Form">
                  <h2 className="Form_title">Create Food</h2>
                  <div className='Form_field'>
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                  </div>
                  <div className='Form_field'>
                  <label htmlFor="image">Image Link</label>
                  <input 
                    type="text" 
                    name="image" 
                    id="image" 
                    onChange={this.handleChange}
                    value={this.state.image}
                  />
                  </div>
                  <div className='Form_field'>
                  <label htmlFor="calories">Calories</label>
                  <input 
                    type="number" 
                    name="calories" 
                    id="calories" 
                    onChange={this.handleChange}
                    value={this.state.calories}
                  />
                  </div>
                  <div className='Form_field'>
                  <label htmlFor="quantity">Quantity</label>
                  <input 
                    type="number" 
                    name="quantity" 
                    id="quantity" 
                    onChange={this.handleChange}
                    value={this.state.quantity}
                  />
                  </div>


                <button>Submit</button>
              </form>
              </div>
              
          )
      }
}

export default FoodForm;