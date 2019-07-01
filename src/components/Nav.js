import React from 'react';
import {Link} from 'react-router-dom'
import path from '../paths';

const Nav = ()=>{

    return(
        <nav className='navbar navbar-expand-lg navbar-info bg-info'>
            <ion-icon name='paw' ios="ios-paw" size="large"></ion-icon>
                <Link to={path.home} > <button className='btn btn-primary btn-info'>Home</button></Link>
                <Link to={path.getRooms}> <button className='btn btn-primary btn-info'>Rooms</button></Link>
                <Link to={path.getEmployees}> <button className='btn btn-primary btn-info'>Employees</button></Link>
        </nav>
    );
};
export default Nav;