import React from "react";
import Data from '../../FakeData/data.json'
import { FaAws,FaYoutube,FaAddressCard } from "react-icons/fa";
import { BsFillBadgeAdFill } from "react-icons/bs";

const date = new Date;
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
 const fullDate = day + ' ' + month + ' ' + year;

function Card(props) {
    const {cardTitle} = props;
    const {name , about , location , address} = props.userProfil ;
    // console.log(props);
    return(
        <div className='card'>
            <h2 className='card_title'><BsFillBadgeAdFill/> {cardTitle}</h2>            
            <h3><FaAws/>{name}</h3>
            <p>{about}</p>
            <address><FaAddressCard/>{address}</address>
            <h4>{location.lat}</h4>
            <p className='Date'>{fullDate}</p>
       </div>
    )
};

export default Card