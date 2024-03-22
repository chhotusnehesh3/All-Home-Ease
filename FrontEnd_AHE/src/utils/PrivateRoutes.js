import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const Component = props.component; 

  const navigate = useNavigate(); 

  useEffect(() => {
    const isLogin = localStorage.getItem("login");

    if (!isLogin) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;