const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SEC_KEY = "MOVIE_TICKET_MANAGEMENT_WEBAPPLICATION_111223";
const availableMovie = require('../models/availableMovie');
const ticket = require('../models/ticket')
const middleware = require('../middleware');
const Ticket = require("../models/ticket");

router.get('/getavailablemovies', async (req, res) => {
    const data = await availableMovie.find({});
    res.json(data);
})

router.post('/generateticket', middleware, [
    body('user_name', 'Enter user name').notEmpty(),
    body('movie_name', 'Enter movie name').notEmpty(),
    body('movie_image'),
    // body('seat_location').isArray(),
    body('show_date').notEmpty(),
    body('show_time').notEmpty(),
    body('ticket_price').notEmpty()
], async (req, res) => {

    try {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: success, errors: errors.array() })
        }

        const { user_name, movie_name, movie_image, seat_location, show_date, show_time, ticket_price } = req.body;

        // if a user already purchased the ticket then if user again makes a purchase of same movie 
        // const isMovie = await ticket.findOne({ movie_name: movie_name })

        console.log(user_name, movie_name, movie_image, seat_location, show_date, show_time, ticket_price)
        const ticket_in_db = await ticket.create({
            user_id: req.ticket.id,
            user_name: user_name,
            movie_name: movie_name,
            movie_image: movie_image,
            seat_location: seat_location,
            show_date: show_date,
            show_time: show_time,
            ticket_price: ticket_price
        })
        // console.log("hello")

        res.json(ticket_in_db)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error occured")
    }
})


router.get('/getusertickets', middleware, async (req, res) => {
    try {
        var success = false
        const userTicket = await Ticket.find({ user_id: req.ticket.id })

        if(userTicket)
            success = true;

        res.json(userTicket)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error occured")
    }

})

module.exports = router; 