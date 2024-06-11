import React from "react";
import { Link } from 'react-router-dom'; 
import { Title } from "./Title";


export const Card = ({item}) => {
  return (
    <article className="card">
      <Link className="wrapper" to={`../pages/${item.id}`}>
        <img src={item.cover} alt={item.title} />
        <p><Title item={item} naming={item.title} /></p>
      </Link>
    </article>
  );
};
