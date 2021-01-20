import React, { Component } from "react";
import LuxuryContainer from "./LuxuryContainer"
import YourLuxuryItems from "./YourLuxuryItems"


class LuxuryPage extends Component {
  state = {
    items: [],
    cart: []
  }

  handleDelete = (id) => {
    const updatedCart = this.state.cart.filter(item => {
      return item.id !== id
    })

    return this.setState({cart: updatedCart})
  }

  handleClick = (id) => {
    return this.state.items.filter(item => {
      if(item.id === id){
        this.setState({cart: [...this.state.cart, item]})
      }
    })
  }

  componentDidMount(){
    fetch("http://localhost:3001/luxuries")
    .then(resp => resp.json())
    .then(luxuries => this.setState({items: luxuries}))
  }

  render(){
    return(
      <React.Fragment>
        <div className="luxuryDiv">
          <div className="luxuryContainerDiv">
            <h1 className="containerHeader">Luxury items here</h1>
            <LuxuryContainer items={this.state.items} handleClick= {this.handleClick}/>
          </div>
          <div>
            <h1 className="cartHeader">Your Shopping Cart</h1>
            <YourLuxuryItems cart={this.state.cart} handleDelete={this.handleDelete}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LuxuryPage