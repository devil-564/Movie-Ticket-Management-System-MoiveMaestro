import React, { useState } from 'react'
import eContext from './eContext'
import { useLocalStorage } from '@uidotdev/usehooks'

const estate = (props) => {
  const host = "http://localhost:3000"
  const [availableMovie, setavailableMovie] = useState([])
  const [index, setIndex] = useState(0)
  const [ticketPrice, setTicketPrice] = useState(0)
  const [selectedSeatRecord, setSelectedSeatRecord] = useState([])
  const [userTickets, setuserTickets] = useState([])
  const [navIconBeeping, setNavIconBeeping] = useLocalStorage('beep', false);
  const [time, setTime] = useState(0)
  const [date, setDate] = useState(0)
  const [pageSwapCount, setpageSwapCount] = useState(0)

  const [userDetails, setUserDetails] = useState({
    user_name: "",
    user_email: ""
  })

  const [individualAvailableMovie, setIndividualAvailableMovie] = useState({
    title: "Spider-Man: No Way Home",
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    rating: 8.2,
    genre: ["Action", "Adventure", "Fantasy"],
    image: ["https://wallpaperaccess.com/full/7826169.jpg", "https://wallpaperaccess.com/full/6790602.png"]
  })

const [adminName, setadminName] = useState("")

  // const [allotedSeatsLocation, setallotedSeatsLocation] = useState({
  //   seat_location : []
  // })
  const [seat_l, setseat_l] = useState([])

  // Ticket Details 
  const [ticketDetails, setTicketDetails] = useState({
    user_name: "",
    movie_name: "",
    movie_image: "",
    show_date: "",
    show_time: "",
    ticket_price: "",
  })

  const generateTicket = async (user_name, movie_name, movie_image, seat_location, show_date, show_time, ticket_price) => {
    const response = await fetch(`${host}/api/movie/generateticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ user_name, movie_name, movie_image, seat_location, show_date, show_time, ticket_price })
    })

    const res_json = await response.json()
    // console.log(res_json)

  }

  // ----

  // User Details
  const getuserDetails = async () => {
    const response = await fetch(`${host}/api/auth/getuserdetails`, {
      method: "GET",
      headers: {
        'Content_Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })

    const data = await response.json();
    setUserDetails({ user_name: data.name, user_email: data.email })
  }

  // User Tickets
  const getuserTickets = async () => {
    const response = await fetch(`${host}/api/movie/getusertickets`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })

    const data = await response.json()
    setuserTickets(data);
    // console.log(data)
    // console.log(userTickets)
  }

  // Seat Details

  const allotPurchasedSeats = async (movie_name, seat_location) => {
    const response = await fetch(`${host}/api/seat/allotpurchasedseat`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ movie_name, seat_location })
    })

    const data = await response.json();

    if (data.success) {
      setseat_l(data.data.seat_location)
    }
  }

  const getallotPurchasedSeats = async (movie_name) => {
    const response = await fetch(`${host}/api/seat/getallotedseat`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movie_name })
    })

    const data = await response.json();
    // console.log(data)
    // return data.data
    // setallotedSeatsLocation({seat_location : data.data})
    // console.log(allotedSeatsLocation)
    setseat_l(data.data)
    console.log(seat_l);
  }

  // Admin Side Work

  const getAdminDetails = async () => {
    const response = await fetch(`${host}/api/admin/getadmindetails`, {
      method: "GET",
      headers: {
        'Content_Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })

    const data = await response.json();
    setadminName(data.name)
  }

  const deleteMovie = async (title) => {
    const response = await fetch(`${host}/api/movie/deletemovie`, {
      method : "POST",
      headers : {
        'Content-Type' : "application/json"
      },
      body : JSON.stringify({title})
    })

    console.log("Estate - " + title)
    const data = await response.json();
    return data.success;
  }

  return (
    <eContext.Provider value={{
      availableMovie,
      setavailableMovie,
      index,
      setIndex,
      individualAvailableMovie,
      setIndividualAvailableMovie,
      ticketPrice,
      setTicketPrice,
      selectedSeatRecord,
      setSelectedSeatRecord,
      ticketDetails,
      setTicketDetails,
      generateTicket,
      userDetails,
      setUserDetails,
      getuserDetails,
      setuserTickets,
      userTickets,
      getuserTickets,
      navIconBeeping,
      setNavIconBeeping,
      time,
      setTime,
      date,
      setDate,
      allotPurchasedSeats,
      getallotPurchasedSeats,
      seat_l,
      pageSwapCount,
      setpageSwapCount,
      adminName,
      getAdminDetails,
      deleteMovie
    }}>
      {props.children}
    </eContext.Provider>
  )
}

export default estate
