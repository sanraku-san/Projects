import React from "react";
import  '../styles/login.css'
import { useState } from "react";

const LoginLogout = ()=>{

const [isModalVisible, setIsModalVisible] = useState (false)

const toggle =()=>{
     setIsModalVisible (wasModalVisible => !wasModalVisible)
}
       
    return(
            <div className="login">
                <button>Login</button>
                </div>
         
    );
}
export default LoginLogout;