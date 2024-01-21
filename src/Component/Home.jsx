import React from 'react'
import "../Css/Home.css";
import image from "../assets/image.jpg";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/choosingsection')
  }

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])
  return (
    <>
      <div>
        <span id='upper-container'>
          <h1>Welcome to Movie Maestro</h1>
          <p>Experience the magic of cinema with just a few clicks.</p>
          <button onClick={handleClick}>
              Book Movies
            <span class="first"></span>
            <span class="second"></span>
            <span class="third"></span>
            <span class="fourth"></span>
          </button>
        </span>
        <img src={image} alt="" id='image'/>
      </div>
    </>
  )
}

export default Home
