import React from 'react'
import logo from '../assets/image/logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <ul class="navbar-nav">
                        <li className='nav-item'>
                            <Link to='home'>
                                <img src={logo} style={{ width: "100px" }} />
                            </Link>
                        </li>
                        <li>
                            <Link to='beranda' className='nav-link'>Beranda</Link>
                        </li>
                        <li>
                            <Link to='/manajemenbuku' className='nav-link'>Buku</Link>
                        </li>
                        <li>
                            <Link to='/articel' className='nav-link'>Articel</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar