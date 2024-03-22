import React from "react";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import Images from "../../images/watercolor.jpg";
import config from '../config';

export default function BookService() {
  const [Service, SetService] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(params.id);
    servicedetails();
  
  }, []);
  
  const servicedetails = () => {
    const url = config.serverURL+`/admin/services/${params.id}`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log("result", result);
      SetService(result);
    });
  };
const bookservice=()=>{
  const custid=sessionStorage.getItem("user"); 
  const role=sessionStorage.getItem("role");
  console.log("Role",role);
  if(role==="ADMIN")
  {
    toast.error("Login as a customer/user");
  }
  else if(role==="USER")
  {
    console.log("custid",custid);
  const url = config.serverURL+`/user/${custid}/services/${params.id}/placeorder`;

  const body ={

  }
  axios.post(url,body).then(response=>{
    const result = response.data;
    console.log("result",result);
    
    if (response["status"]===200) {
      toast.success("Service Booked");
      
    } else {
      toast.error("Try Again");
    }
    
  })
  .catch(()=>
  {
    toast.error("Try Again");
  })
  }
  else {
    toast.error("Login yourself");
  }
  navigate("/available-services");
}


return (
  <div style={styles.container1}>
    <div style={{ marginTop: 0 }}>
      <div style={styles.container}>
        <div className="mb-3">
          <h2 style={{ textAlign: "center", color: "#0077b6" , fontSize:50}}>
            Book Service {Service.serviceName}
          </h2>
          <div className="col-d-lg-inline-flex">
            <div className="card-group" style={{ marginTop: 30, border: 1 }}>
              <div className="card-accordion-body">
                <h2 className="card-alert-heading" style={{color:"#03045e", marginBottom:15}}>
                  {" "}{Service.serviceName}
                </h2>
                <p className="card-accordion">
                  <h4 style={{fontSize:20}}>{Service.shortDesc}</h4>
                  <h4 >{Service.longDesc}</h4>
                  <h5 style={{fontSize:20}}> Rs. {Service.serviceCharge} {"/-"}</h5>
                </p>
                <div style={{marginLeft:280,marginTop:40}}>
                  <button  onClick={bookservice} type="button" class="btn btn-primary btn-lg btn-block"> Book Service </button>
                </div>
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
  container: {
    width: 800,
    padding: 20,
    position: "relative",
    backgroundColor: "palewhite",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#663399",
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    boxShadow: "2px 2px 20px 10px #663399"
  },

  container1: {
    backgroundImage: `url(${Images})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh"
  },

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
