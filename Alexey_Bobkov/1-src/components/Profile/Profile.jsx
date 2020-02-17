import React from 'react';
import './Profile.sass';



export const Profile = ({ profile }) => {

    return (

        (<div className='Profile'>
            <div className='Profile-header'>
                <h1>{profile.name}</h1>
            </div>
            <div className='Profile-description'>
                <h2>Профиль</h2>
                <ul>
                    <li>Имя: {profile.name}</li>
                    <li>Описание: {profile.Description}</li>
                </ul>

            </div>
        </div>)
    );
}