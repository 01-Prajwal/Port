import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="wrap">
                <Link to='/' className='link'>
                    <h1 className='name'>Unleash</h1>

                    {/* <h1>Unleash </h1> */}
                </Link>
                <div className="name-n">
                    <Link className='link' to='/contact'>Contact Me</Link>

                </div>
                <div className="name-n">

                    <Link className='link' to='/projects'>projects </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar