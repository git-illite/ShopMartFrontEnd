import React from 'react';
import { Link } from "react-router-dom";

const RestortItem = ({id,title,image,price}) => {

  return  (
    <div className="resort-card">
      <Link to = {`/resorts/${id}`}> 
          <img src={image} alt=""/>   
      </Link> 
      <div className="resortContent">
          <h3>{title}</h3>
          <p>${price} per night</p>
      </div>
  </div>

  );
}

export default RestortItem