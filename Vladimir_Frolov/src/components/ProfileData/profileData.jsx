import React from 'react';
import './profileData.css';

export const ProfileData =({user})=>(
    <div className="user">
        <span>{user.name}</span>
    </div>
)