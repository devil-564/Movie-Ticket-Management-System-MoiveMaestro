import React from 'react'
import "../Css/ChoosingSection.css"
import Theatre from "../assets/theatre-admin.jpg";
import Customer from "../assets/customer.jpg";
import { useNavigate } from 'react-router-dom';

const ChoosingSection = () => {
  const navigate = useNavigate();

  const handleClick = (e)=>{
    navigate(e)
  }

  return (
    <>
      <div id='main-container'>
        <div id='sub-container'>
            <div id='sub-sub-container'>
                <img src={Theatre} alt="admin" srcset="" onClick={() => {handleClick("/adminsignup")}}/>
                <h1 id='admin-text'>ADMIN</h1>
            </div>
            <div>
                <img src={Customer} alt="customer" onClick={() => {handleClick("/signup")}}/>
                <h1>CUSTOMER</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChoosingSection
