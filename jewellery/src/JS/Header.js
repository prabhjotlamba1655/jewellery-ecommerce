import React from 'react'
import logo from '../Media/logo.png';
import '../CSS/Header.css';
import Navbar from 'react-bootstrap/Navbar'


function Header() {
    return (
        <header className="header">



            <nav className="navbar__abc">
                <div className="nav__abc">
                    <img src={logo} className="brand-logo" alt="" />
                    <div className="nav-items">
                        <div className="search">
                            <input type="text" class="search-box" placeholder="search product" />
                            <button className="search-btn">search</button>
                        </div>
                        <a href="#"><img src="img/user.png" alt="" /></a>
                        <a href="#"><img src="img/cart.png" alt="" /></a>
                        <div class="dropdown">
                            <button class="dropbtn">More</button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="links-container">
                    <li class="link-item"><a href="#" class="link">home</a></li>
                    <li class="link-item"><a href="#" class="link">Rings</a></li>
                    <li class="link-item"><a href="#" class="link">Ear-rings</a></li>
                    <li class="link-item"><a href="#" class="link">Necklace</a></li>
                </ul>
            </nav>

        </header>







    )
}

export default Header
