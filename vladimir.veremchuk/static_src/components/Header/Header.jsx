import React from "react";
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
    <div className="Header">
        СУПЕР ЧАТ
        <Link to ="/profile">Профиль</Link>
    </div>);
}
