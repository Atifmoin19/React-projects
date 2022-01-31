import React from 'react';
// import { NavLink } from "react-router-dom";
import './Style.css';
const Card = (props) => {
    const link="https://www.hotstar.com/in/movies/black-panther/1660010672";
    return (
        <>
           <div className='Cardcmp'>
                    <div className='image'>
                    <img src={props.src} alt='image'/>
                    </div>
        <div className='details'>
               <h2>{props.title}</h2>
               <p>{props.details}</p>
               </div>
  <a href={link} target="_blank">
               <button  > link</button>
               </a>
           </div>

            
            

        </>
    );
}

export default Card;
