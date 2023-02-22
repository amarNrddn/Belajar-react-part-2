import Logo from '../assets/image/logo-2.png'
import React from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className='container-home'>
            <div className='description-home'>
                <h1>Membaca dengan</h1>
                <p>kajsdhjshdshdsdiejhdshiudsi</p>
            </div>
            <div className='container-logo'>
                <img className='logo-home' src={Logo} />
            </div>
            <div>

            <Button variant="primary">Primary</Button>{' '}
            </div>
        </div>
    )
}

export default Home