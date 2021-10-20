import { Link } from "react-scroll";
import React from 'react';

export default function Navbar(){

    return(
        <>
        <i className="bi bi-list mobile-nav-toggle d-xl-none" ></i>
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li>
                        <Link  style={{ textDecoration: 'none' }}
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}                         
                            duration={500}
                            >
                            <i className="bx bx-home"></i> <span>Home</span>
                        </Link>                 
                    </li>
                    <li>
                        <Link  style={{ textDecoration: 'none' }}
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}                   
                            duration={500}
                            >
                            <i class="bx bx-user"></i> <span>About</span>
                        </Link>                 
                    </li>
                    <li>
                        <Link  style={{ textDecoration: 'none' }}
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            <i class="bx bx-bar-chart-alt-2"></i> <span>Skill</span>
                        </Link>                 
                    </li>
                    <li>
                        <Link  style={{ textDecoration: 'none' }}
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            <i class="bx bx-file-blank"></i> <span>Resume</span>
                        </Link>                 
                    </li>
                    <li>
                        <Link  style={{ textDecoration: 'none' }}
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            <i class="bx bx-book-content"></i> <span>Portfolio</span>
                        </Link>                 
                    </li>    
                    <li>
                        <Link  style={{ textDecoration: 'none' }}
                            activeClass="active"
                            to="section6"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >
                            <i class="bx bx-server"></i> <span>Services</span>
                        </Link>                 
                    </li>  
                </ul>
            </nav>
        </header>
        </>
    );
}