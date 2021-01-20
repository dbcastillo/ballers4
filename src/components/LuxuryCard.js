import React, { Component } from "react";

const LuxuryCard = (props) => {
  return(
    <div>
      <h1>Brand: {props.itemInfo.brand}</h1>
      <h3>Item: {props.itemInfo.item}</h3>
      <h3>Price: {props.itemInfo.price}</h3>
    </div>
  )
}

export default LuxuryCard