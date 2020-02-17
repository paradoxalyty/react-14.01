import React from 'react';
//import PropTypes from 'prop-types';
import './Header.sass';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
export const Header = ({ }) => {


    return (

        (<div className='Header'>
            <h1>Header</h1>
            <h3>
                <Link to='/Profile'></Link>
            </h3>
        </div>)
    )
}
=======
export const Header = ({ chatName }) =>

    (
        <div className='Header'>
            <h1>{chatName}</h1>
            <h3><Link to='/Profile'>Profile</Link></h3>
        </div>
    );
>>>>>>> 235c223bbc3e6f655feb0dc3d383580e7d179fda
