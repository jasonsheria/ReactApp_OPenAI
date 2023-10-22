import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import { useState } from 'react';
import './index.css'
const Header = () => {
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
      }, []);
    
      function stickNavbar () {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          // window height changed for the demo
          windowHeight >25 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
      };
    return (
        <div>
            <nav class={` ${stickyClass} navbars navbar-expand-lg navbar-dark bg-dark px-0  `}>
                <div class="container-xl" style={{display : 'flex'}}>

                    <Link class="navbar-brand" href="#">
                        <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" class="h-8" alt="..."/>
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">

                        <div class="navbar-nav mx-lg-auto">
                            <Link class="nav-item nav-link active" to="/" aria-current="page">Home</Link>
                            <Link class="nav-item nav-link" to="/tranduction">Tranduction</Link>
                            <Link class="nav-item nav-link" to="/about">about</Link>
                            <Link class="nav-item nav-link" to="/contact">contact</Link>
                            <Link class="nav-item nav-link" to="/chat">forum</Link>
                        </div>

                        <div class="navbar-nav ms-lg-4">
                            <Link class="nav-item nav-link" to="/login">Sign in</Link>
                        </div>

                        <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                            <Link to="/register" class="btn btn-sm btn-primary w-full w-lg-auto">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            
        </div>
    );
};
export default Header;