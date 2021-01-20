import React, { Component } from "react";

const LuxuryCard = (props) => {
  const id = props.itemInfo.id
  return(
    <div className="luxuryCard" onClick={() => props.handleClick(id)}>
      <h2>Brand: {props.itemInfo.brand}</h2>
      <h3>Item: {props.itemInfo.item}</h3>
      <h3>Price: {props.itemInfo.price}</h3>
    </div>
  )
}

export default LuxuryCard