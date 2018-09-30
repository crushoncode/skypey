import React from 'react';
import './User.css';

const User = ({ user }) => {
  const { name, profile_pic, status } = user;

  return (
    <div className="user">
      <img src={profile_pic} alt={name} className="User__pic" />
      <div classNAme="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
