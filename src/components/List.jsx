import React from 'react';
import jsonData from '../data/data.json';
import { Link } from 'react-router-dom'; 
import list from '../styles/list.css'
import home from '../styles/banner.css'

const List = () => {
  return (
    <div>
      <ul className="grid-container">
        {jsonData.map((item, index) => (
        <card >
          <li className='grid-item' key={index}>
            <Link className="wrapper" to={`../pages/${item.id}`}>
              <img src={item.cover} alt={item.title} />
              <p>{item.title}</p>
            </Link>
          </li>
          </card>
        ))}
      </ul>
    </div>
  );
}

export default List;
