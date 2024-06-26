import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    static defaultProps = {
        logo: 'logo.svg'
    }
    static propTypes = {
        logo: PropTypes.string
    }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">DiabetesPredictor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/predict">Predict</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/profile">View Profile</Link></li>
                        <li><Link className="dropdown-item" to="/edit-profile">Edit Profile</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/register">Register/Login</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
