function Navbar() {
    return (
        <div className="navbar"> 
           <nav>
                <ul className="navbarElem">
                    <li className="logo-elem"><img src="logo.png"></img></li>
                    <li className="elem"><a href="">Home</a></li>
                    <li className="elem"><a href="">Product</a></li>
                    <li className="elem"><a href="">About</a></li>
                    <li className="elem"><a href="">Contact</a></li>
                    <li className="user-elem"><a href="">User</a></li>
                </ul>
            </nav> 
        </div>
  );
}

export default Navbar;
