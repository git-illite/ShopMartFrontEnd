import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
            <div className="container">
                    <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>

                            </li>

                            <li>
                            <Link to="/about">About</Link>

                            </li>

                            <li>
                                <Link to="/resorts">Resort Listing</Link>

                            </li>

                            <li>
                            <Link to="/login">Login</Link>
                            </li>
                            <li>
                            <Link to="/register">Registration</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </header>
  )
}

export default Header