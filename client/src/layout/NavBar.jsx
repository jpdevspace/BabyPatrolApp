import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
    return (
        <div>
            <div>
                <h5>
                    <NavLink to="/">BabyPatrol</NavLink>
                </h5>
            </div>
            <nav>
               <NavLink to="/login">Login</NavLink>
               <NavLink to="/register">Register</NavLink>
               <NavLink to="/reports">Reports</NavLink>
            </nav>
        </div>
    )
}


export default NavBar