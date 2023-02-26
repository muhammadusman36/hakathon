import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from "../../../assets/Images/logo.png"
import { useAuthContext } from '../../../context/AuthContext'
function Navbar() {
  const { isLoggedIn, SignOut } = useAuthContext()
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-body-tertiary py-3">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link active" aria-current="page" to={'trendingEvents'}>
                  Trending Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'addEvents'}>
                  Add Events                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'myEvents'}>
                  My Events                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              {
                isLoggedIn ?
                  <button className="btn btn-outline-light mx-1 px-4 py-2" onClick={SignOut}>
                    SignOut
                  </button> : <>
                    <NavLink to={'/auth/login'}>
                      <button className="btn btn-outline-light mx-1 px-4 py-2">
                        Login
                      </button>
                    </NavLink> </>

              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
