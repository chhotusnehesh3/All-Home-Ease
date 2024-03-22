import Footer from "../components/Footer";
import Slider from "../components/Slice/Slider";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../Reducers/authSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "./config";
const logo = require("../images/image2_logo.png");
const p1 = require("../images//Computer-Repairing.jpg");
const p2 = require("../images/painting.jpg");
const p3 = require("../images/House-Keeping.jpg");

const Home = () => {
  const dispatch = useDispatch();

  const signinStatus = useSelector(state => state.authSlice.status);
  useEffect(() => {
    if (sessionStorage["token"] && sessionStorage["token"].length > 0) {
      const user = {
        token: sessionStorage["token"],
        name: sessionStorage["username"]
      };
      dispatch(signin(user));
    }

    gethomes();
  }, []);
  const url = config.serverURL + `/customer/getCurrentUserDetails`;
  const gethomes = () => {
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + sessionStorage["token"] }
      })
      .then(response => {
        const result = response.data;
        console.log(result);
      });
  };
  return (
    <div className="slider">
      <div className="load">
        <center>
          {" "}<h2 style={{ color: "white" }}>Welcome to Home Services</h2>
        </center>
        <div className="content">
          <div className="principal">
            <h2 style={{ color: "white" }}>
              <strong>Extraordinary service for extraordinary customers</strong>
            </h2>

            <p style={{ color: "white", fontFamily: "Arial", fontWeight: 600, marginTop: 10, fontSize: "25px"}}
            >ONE STOP SOLUTION FOR ALL YOUR NEEDS <br /> To our detailed system of providing services
            </p>
          </div>
        </div>
        <div style={{ marginTop: -15, textAlign: "center" }}>
          <br />
          <br />
          <h3 style={{ color: "white" }}>Our Popular Home Services</h3>
          <br /> <br />
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p1}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Computer Repairing</h5>
                    <p className="card-text"> <p>{" "}₹ 500-10,500 <s>₹ 12,995.00</s></p> Computer Repairing Services
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img className="card-img-top" src={p2} alt="Card image cap" height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Painting Services</h5>
                    <p className="card-text">₹ 5000-25,000 <s>₹ 35,995.00</s><p>Painting Services</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card" style={{ marginTop: 20, border: 0 }}>
                  <img
                    className="card-img-top"
                    src={p3}
                    alt="Card image cap"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Housekeeping</h5>
                    <p className="card-text">
                      ₹ 2,500.00-5 <s>₹ 10,995.00</s>
                      <p>Housekeeping Services</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Home;

