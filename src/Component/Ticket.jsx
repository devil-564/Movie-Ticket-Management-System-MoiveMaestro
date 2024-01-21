import React, { useContext, useEffect, useState } from 'react';
import '../Css/Ticket.css';
import EContext from '../context/everything_context/eContext';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Ticket = () => {
  const context = useContext(EContext);
  const navigate = useNavigate()
  const { userDetails, getuserDetails, getuserTickets, userTickets } = context;
  // const [loaderCheck, setloaderCheck] = useState(false)


  useEffect(() => {
    getuserDetails();
    getuserTickets();


    // setTimeout(() => {
    //   setloaderCheck(true)
    // }, 3000);

    // return () => {

    // }
  }, []);

  const handleClick = (e) => {
    navigate(e)
  }

  return (
    <>
    {userTickets.length > 0 ? (userTickets.length > 0 && (
        <div id='ticket-main-container'>
          <div id='user-container'>
            <span>
              <h1>{userDetails.user_name}</h1>
            </span>
            <span>
              <h1>Tickets Area</h1>
            </span>
          </div>


          <div id='ticket-container'>
            {userTickets.map((e) => (
              <div id='ticket'>
                <span id='ticket-section1'>
                  <img src={e.movie_image} alt='movie_image' />
                  <h1>{e.movie_name}</h1>
                </span>

                <h1 id='ticket-section-seat-list'>
                  Booked Seats : {e.seat_location.toString()}
                </h1>

                <span id='ticket-section2'>
                  <h1>Date : {e.show_date}</h1>
                  <h1>Time : {e.show_time}</h1>
                </span>
              </div>
            ))}

          </div>
          <h1 id='logout-button' onClick={() => { handleClick('/') }}>LOGOUT</h1>
          {/* <Loader loaderCheck = {loaderCheck}/> */}
        </div>
      )) : (<marquee scrollamount = {30} id="alert-no-ticket-found">No Tickets Found</marquee>)}
    </>
  );
};

export default Ticket;
