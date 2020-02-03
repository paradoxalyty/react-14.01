import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    render() {
        return (
            <div className='layout'>
                <h1>Profile</h1>
                <Link to='/' className='backLink'> ← Назад</Link>
            </div>
        )
    }
 }