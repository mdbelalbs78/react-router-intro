import React from "react";
import './FriendT.css'
import { Link } from "react-router-dom";

const FriendT = ({ friend }) => {
//   console.log(friend);
  const {id, name,email,phone} = friend;
  return <div className="friend">
         <h2>{name}</h2>
         <p>Email: {email}</p>
         <p>phone: {phone}</p>
         <p><Link to={`/friend/${id}`}>show more details</Link></p>
  </div>;
};

export default FriendT;
