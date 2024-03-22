import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import { toast } from 'react-toastify';
import config from '../config';
import Images from "../../images/image1_location.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdateUser() {
  const params = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate();

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
  const [role, setRole] = useState("");

  useEffect(() => {
    userdetails();
  }, []);

  const userdetails = () => {
    const url = config.serverURL + `/user/${params.id}`;
    axios.get(url).then(response => {
      const result = response.data;
      setUser(result);
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setEmail(result.email);
      setPhoneNumber(result.phone);
      setPassword(result.password);
      setconfirmPassword(result.password);
      setHouseNo(result.houseNo);
      setStreet(result.street);
      setCity(result.city);
      setState(result.state);
      setPincode(result.pincode);
      setRole(result.role);
    });
  };

  function update(id) {
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password should be the same");
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
        role
      };
      const url = config.serverURL + `/user/${id}`;

      axios.put(url, body).then(response => {
        const result = response.data;
        console.log("updated", result);
        if (response.status === 200) {
          toast.success("Profile Updated");
          navigate("/userdetails/" + id);
        } else {
          toast.error("Try again!!");
        }
      })
        .catch(() => {
          toast.error("Profile Not Updated");
        });
    }
  }

  return (
    <div style={styles.container1}>

      <div className="container-fluid" style={styles.container}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center" style={{ borderBottom: '2px solid black', paddingBottom: '5px', color: 'navy' }}>Update Profile</h3>

                <div className="form-group">
                  <label>First Name</label>
                  <input
                    defaultValue={user?.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    defaultValue={user?.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    defaultValue={user?.phone}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-control"
                    type="tel"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    defaultValue={user?.email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    type="email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    defaultValue={user?.password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    type="password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    defaultValue={user?.confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    className="form-control"
                    type="password"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>DOB</label>
                      <input
                        defaultValue={user?.dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>

                    <div className="form-group">
                      <label>House No</label>
                      <input
                        defaultValue={user?.houseNo}
                        onChange={(e) => setHouseNo(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>

                    <div className="form-group">
                      <label>Street</label>
                      <input
                        defaultValue={user?.street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>

                    <div className="form-group">
                      <label>City</label>
                      <input
                        defaultValue={user?.city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>

                    <div className="form-group">
                      <label>State</label>
                      <input
                        defaultValue={user?.state}
                        onChange={(e) => setState(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>

                    <div className="form-group">
                      <label>Pincode</label>
                      <input
                        defaultValue={user?.pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <Button onClick={() => update(user?.id)} title="Update" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  'form-group': {
    marginBottom: '1.5rem',
  },
  'form-control': {
    width: '100%',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
  },
  'btn': {
    width: 250,
    backgroundColor: 'navy',
    color: 'white',
  },
};
