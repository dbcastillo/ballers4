import React, { Component } from "react";
import LuxuryCard from "../components/LuxuryCard"


class LuxuryContainer extends Component {

  showItems = () => {
    return this.props.items.map(item => {
      return <LuxuryCard itemInfo={item} key={item.id}/>
    })
  }

  render(){
    return(
      <div>
        {this.showItems()}
      </div>
    )
  }
}

export default LuxuryContainer