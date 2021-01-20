import React, { Component } from "react";
import LuxuryContainer from "./LuxuryContainer"


class LuxuryPage extends Component {
  state = {
    items: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/luxuries")
    .then(resp => resp.json())
    .then(luxuries => this.setState({items: luxuries}))
  }

  render(){
    return(
      <div>
        <h1>Luxury items here</h1>
        <LuxuryContainer items={this.state.items} />
      </div>
    )
  }
}

export default LuxuryPage