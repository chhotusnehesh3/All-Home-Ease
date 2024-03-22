import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import config from '../config';
import Images from "../../images/image1_location.png";
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';

import { indianStates } from './indianStates'; // You need to create a file with the list of states


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    // Validation for firstName
    const firstNameRegex = /^[a-zA-Z]+$/;
    if (firstName.length === 0) {
      toast.error("Please enter First name");
    } else if (!firstName.match(firstNameRegex)) {
      toast.error("First name should contain only characters");
    }

    const lastNameRegex = /^[a-zA-Z]+$/;
    if (lastName.length === 0) {
      toast.error("Please enter Last name");
    } else if (!lastName.match(lastNameRegex)) {
      toast.error("Last name should contain only characters");
    }

    const phoneNumberRegex = /^[6-9]\d{9}$/;
    if (!phone.match(phoneNumberRegex)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (email.length === 0) {
      toast.error("Please enter email");
    } else if (!email.match(emailRegex)) {
      toast.error("Please enter a valid email address");
      return;
    }


    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dob.length === 0) {
      toast.error("Please enter date of birth");
    } else if (!dob.match(dobRegex)) {
      toast.error("Invalid date of birth");

    } else {
      const enteredDob = new Date(dob);
      const minDob = new Date("1970-01-01");
      const maxDob = new Date("2010-01-01");

      if (enteredDob < minDob || enteredDob > maxDob) {
        toast.error("Date of birth should be between 1970-01-01 and 2010-01-01");
        return;
      }
    }

    const pincodeRegex = /^[0-9]{6}$/;
    if (pincode.length === 0) {
      toast.error("Please enter Pincode");
    } else if (!pincode.match(pincodeRegex)) {
      toast.error("Wrong Pincode");
    }

    if (firstName.length === 0) {
      toast.error("Please enter First name");
    } else if (lastName.length === 0) {
      toast.error("Please enter Last name");
    } else if (phone.length === 0) {
      toast.error("Please enter Phone number");
    } else if (email.length === 0) {
      toast.error("Please enter email");
    } else if (password.length === 0) {
      toast.error("Please enter password");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else if (phone === 0) {
      toast.error("Please enter phone number");
    } else if (dob === 0) {
      toast.error("Please enter date of birth");
    } else if (houseNo.length === 0) {
      toast.error("Please enter houseNo");
    } else if (street.length === 0) {
      toast.error("Please enter street");
    } else if (city.length === 0) {
      toast.error("Please enter city");
    } else if (state.length === 0) {
      toast.error("Please enter state");
    } else if (pincode.length === 0) {
      toast.error("Please enter pincode");
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        phone,
        dob,
        houseNo,
        street,
        city,
        state,
        pincode,
      };

      const url = config.serverURL + `/user/signup`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (response.status === "error") {
          toast.error("Error, please try again");
        } else {
          toast.success("New user registered!");
          navigate("/signin");
        }
      });
    }
  };

  return (
    <div style={styles.container1}>
      <div className="container" style={styles.container}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center" style={{ borderBottom: '2px solid black', paddingBottom: '5px', color: "blue" }}>Signup</h3>
                <br></br>
                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>First Name</label>
                  <input onChange={(e) => setFirstName(e.target.value)} className="form-control" type="text" placeholder="Your first name"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>Last Name</label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Your last name"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>Phone Number</label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-control"
                    type="tel"
                    placeholder="Your mobile number"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    type="password"
                    placeholder="Your password"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>Confirm Password</label>
                  <input
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    className="form-control"
                    type="password"
                    placeholder="Repeat above password"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>DOB</label>
                  <input
                    onChange={(e) => setDob(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="yyyy-dd-mm"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>House No</label>
                  <input
                    onChange={(e) => setHouseNo(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Your House No."
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>Street</label>
                  <input
                    onChange={(e) => setStreet(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Your Street"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>City</label>
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Your City"
                  />
                </div>

                <br />
                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>State</label>
                  <select
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    className="form-control"
                  >
                    <option value="" disabled>
                      Select your state
                    </option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <br />

                <div className="form-group">
                  <label style={{ fontWeight: "bold" }}>Pincode</label>
                  <input
                    onChange={(e) => setPincode(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Enter PinCode"
                  />
                </div>
                <br />

                <div className="text-center">
                  <div>
                    Already have an account?{" "}
                    <Link to="/signin" className="signin-link">
                      Sign in here
                    </Link>
                  </div>
                  <br />

                  <button className="btn" style={{ width: 250, backgroundColor: "navy", color: "white" }} onClick={signup}>
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container1: {
    backgroundImage: `url(${Images})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "175vh"
  },
  container: {
    position: "relative",
    top: 100,
  },
  body: {
    color: "#ffffff",
  },
  card: {
    border: "1px solid #617488",
  },
  'btn': {
    background: "linear-gradient(to bottom, #0056b3, #004080)",
    borderColor: "#004080",
  },
  'btn:hover': {
    background: "linear-gradient(to bottom, #566778, #408edc)",
    borderColor: "#003366",
  },
  'signin-link': {
    color: "#ffffff",
  },
};

export default Signup;
