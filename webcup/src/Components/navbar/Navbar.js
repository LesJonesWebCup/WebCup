import React from 'react';

function Navbar() {
    return (
        <div className="navbar"> 
           <nav>
                <ul className="navbarElem">
                    <li className="logo-elem"><img src="/logo_web.jpg" alt='logo'></img> <a href="#Home"></a></li>
                    <li className="elem"><a href="#Program">Programme</a></li>
                    <li className="elem"><a href="#About">À propos</a></li>
                    <li className="elem"><a href="#Try">Commencez !</a></li>
                </ul>
            </nav> 
        </div>
  );
}

export default Navbar;
