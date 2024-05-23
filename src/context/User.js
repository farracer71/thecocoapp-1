import React, { createContext, useState, useEffect, useContext } from "react";
import Axios from "axios";
import ApiConfig from "src/config/APICongig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function AuthProvider(props) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  const getViewMyProfile = async (values) => {
    const token = localStorage.getItem("token");

    try {
      const res = await Axios({
        method: "GET",
        url: ApiConfig.viewMyProfile,
        headers: { Authorization: `Token  ${token}` },
      });

      if (res.status === 200 || res.status === 201) {
        setProfile(res.data);
      } else {
        toast.error(res.data.responseMessage);
      }
    } catch (error) {
      if(error?.response?.data?.detail == "Invalid token."){
        toast.error('The session has expired. Please login again.');
        navigate("/login");
        localStorage.clear();
        sessionStorage.clear();
      }else{
        console.log(error.response);
      }
      
    }
  };
  useEffect(() => {
    if (window.localStorage.getItem("token") && window.location.pathname !== "/") {
      getViewMyProfile();
    }
  }, [window.location.pathname]);

  let data = {
    profile,
    getViewMyProfile: () => getViewMyProfile(),
  };

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
