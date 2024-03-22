import {useNavigate } from "react-router-dom";
import authSlice from "../../Reducers/authSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Admin = () => {
  const navigate = useNavigate();
  const Employee = () => {
    navigate("/employees");
    //add and remove employees
  };
  const Services = () => {
    //add and remove Services
    navigate("/services");
  };
  const Orders = () => {
    //view and accept orders
    navigate("/showallbookedservices/");
  };
  const showallusers = () => {
   //show all feedback 
    navigate("/showallusers");
  };


  // const isLoggedIn = useSelector((state) => state.auth.status);


  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate]);
 
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy" }}>Admin Page</h1>
      <div className="row">
        <div className="card col mb-4" style={{ margin: 20, display: "inline-block", cursor: "pointer", border: 0, marginTop: 90}}>
          <img src="https://cdn3.iconfinder.com/data/icons/team-management/136/28-512.png" alt="employee image" className="rounded mx-auto d-block" style={{ height: 300, width: 300, display: "block" }} />
          <div className="card-body"><button onClick={Employee} style={styles.Button}>Employee</button></div>
        </div>
        <div
          className="card col mb-4  "
          style={{ margin: 20, display: "inline-block", cursor: "pointer", border: 0, marginTop: 90}}
        >
          <img
            src="https://images.assetsdelivery.com/compings_v2/lvnl/lvnl2102/lvnl210200039.jpg"
            alt="Services image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={Services} style={styles.Button}>
              Services
            </button>
          </div>
        </div>

        <div
          className="card col mb-4  "
          style={{ margin: 20, display: "inline-block", cursor: "pointer", border: 0, marginTop: 90
          }}
        >
          <img src="https://i.pinimg.com/564x/ec/67/0e/ec670e9c443ed73c179753a8927e2b41.jpg" alt="Orders image" className="rounded mx-auto d-block" style={{ height: 300, width: 300, display: "block"}}
          />
          <div className="card-body" width="300">
            <button onClick={Orders} style={styles.Button}>
              Orders
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{ margin: 20, display: "inline-block", cursor: "pointer", border: 0, marginTop: 90}}>
          <img
            src={require('../../images/UserList.jpg')}
            alt="User image"
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={showallusers} style={styles.Button}>
              Show Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "navy",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10
  }
};

export default Admin;
