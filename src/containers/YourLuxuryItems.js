import React, { Component } from "react";
import MyLuxuryItemsCard from "../components/MyLuxuryItemsCard"

class YourLuxuryItems extends Component {
  /* shopping cart divs need classname of cartCard*/

  yourCart = () => {
    return this.props.cart.map(cartObj => {
      return <MyLuxuryItemsCard 
      cartinfo={cartObj} 
      key={cartObj.id} 
      className="luxuryCard"
      handleDelete={this.props.handleDelete}
      />
    })
  }

  render(){
    return(
      <div className="cartContainer">
          {this.yourCart()}
      </div>
    )
  }
}

export default YourLuxuryItems