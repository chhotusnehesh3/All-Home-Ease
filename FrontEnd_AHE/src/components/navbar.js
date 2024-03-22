import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../Reducers/authSlice';
import { Dropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Avatars from "../components/avatar";
import logo from "../images/logo_new.jpg";

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const signinStatus = useSelector((state) => state.authSlice.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav style={{ backgroundColor: "navy", position: "sticky", top: 0, zIndex: 1000, }} className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="Logo" width="50" height="50"/>&nbsp;&nbsp;&nbsp;
          AllHomeEase
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/available-services">
                Available Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/upcoming-services"
              >
                Upcoming Services
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav navbar-right">

            {signinStatus ? (
              <div>
                <Button variant="danger" className='btn btn-danger' aria-current='page' onClick={() => {
                  sessionStorage.clear();
                  dispatch(signout());
                  navigate('/signin');
                }}>Logout</Button>&nbsp;&nbsp;&nbsp;
              </div>
            ) : (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  SignIn/SignUp
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <LinkContainer to="/signup">
                    <Dropdown.Item>SignUp</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/signin">
                    <Dropdown.Item>SignIn</Dropdown.Item>
                  </LinkContainer>
                  
                </Dropdown.Menu>
              </Dropdown>
            )}
          </ul>

          <Avatars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;