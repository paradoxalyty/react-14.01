import React from "react";
import "./Profile.css";

export const Profile = ({ user }) => {
  return (
    <div className="Profile">
      <h1>Моя страница</h1>
      <div>Имя пользователя: {user.userName}</div>
    </div>
  );
};
