import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../../images/walljpg.jpg";
import config from "../config";

export default function UserDetails() {
  const id = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    userdetails();
  }, []);

  const userdetails = () => {
    console.log("user id", id);
    const url = config.serverURL + `/user/${id}`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log("result", result);
      setUser(result);
    });
  };

  const update = () => {
    navigate("/updateuser/" + user?.id);
  };
  const order = () => {
    navigate("/custorder/" + user?.id);
  };
  


  return (
    <div style={styles.container}>
      <div className="row">
      <div className="col" style={{ ...styles.userInfoContainer, width: "500px" }}>
          <h1 style={styles.heading}>Hello, <span style={{color:"#39ff14"}}>{user?.firstName}!</span></h1>

          <div style={styles.details}>
            <h4 style={styles.headings}>Personal Details</h4>
            <h5>
              <label style={{fontWeight:"bold",marginRight: "20px"}}>Name:  </label><span>{user?.firstName}&nbsp;{user?.lastName}</span><br />
              <label style={{fontWeight:"bold",marginRight: "24px"}}>Email: </label><span>{user?.email}</span><br />
              <label style={{fontWeight:"bold",marginRight: "17px"}}>Phone: </label><span>{user?.phone}</span><br />
            </h5>
          </div>

          <div style={styles.details}>
            <h4 style={styles.headings}>Address</h4>
            <h5>
              <label style={{fontWeight:"bold",marginRight: "20px"}}>House No: </label><span>{user?.houseNo}</span><br />
              <label style={{fontWeight:"bold",marginRight: "57px"}}>Street: </label><span>{user?.street}</span><br />
              <label style={{fontWeight:"bold",marginRight: "74px"}}>City: </label><span>{user?.city}</span><br />
              <label style={{fontWeight:"bold",marginRight: "36px"}}>Pincode:</label><span>{user?.pincode}</span><br />
              <label style={{fontWeight:"bold",marginRight: "62px"}}>State: </label><span>{user?.state}</span><br />
            </h5>
          </div>

          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={update}>
              Update
            </button>
            <button style={styles.button} onClick={order}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },


  userInfoContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "left",
  },

  heading: {
    color: "navy",
    marginTop: 10,
    textAlign: "center"
  },

  details: {
    marginTop: 20,
    marginBottom: 20,
  },
  headings:{
    textAlign: "center",
    color: "red"
  },
  buttonContainer: {
    marginTop: 30,
    display: "flex",
    gap: 20,
    justifyContent: "center",
  },

  button: {
    width: 100,
    height: 40,
    backgroundColor: "navy",
    color: "white",
    borderRadius: 5,
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
