import React, { Component } from "react";

const MyLuxuryItemsCard = (props) => {
  const id = props.cartinfo.id
  return(
    <div className="cartCard">
      <h2>Brand: {props.cartinfo.brand}</h2>
      <h3>Item: {props.cartinfo.item}</h3>
      <h3>Price: {props.cartinfo.price}</h3>
      <h3 onClick={() => props.handleDelete(id)}>click here to delete</h3>
    </div>
  )
}

export default MyLuxuryItemsCard