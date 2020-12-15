import React from 'react';
import Waves from './images/wave.svg';

const Main = () => {
    return (
        <div className ='log-in-page-wrapper'>
            <div className='log-in-page'>
                <nav className='nav'>
                    <p className="portal-name">Usos Portal</p>
                    <button className="log log-in">Zaloguj się</button>
                </nav>

                <div className="log-in-content">
                    <p className="lyrics">Studiuj i nie przejmuj się zbytnio. Pamiętaj, że przyda ci się w życiu tylko to, czego nie zrozumiesz.<br/>
                    Eduardo Mendoza
                    </p>

                    <p className="hello-text">Pytaj, komentuj, pomagaj<br/>połączmy się</p>
                </div>
                <img src={Waves} alt="" className='main-waves'/>
            </div>
        </div>
    );
};

export default Main;