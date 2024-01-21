const mongoose = require('mongoose')
const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect("mongodb://127.0.0.1:27017/movie_maestro");
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = connectToMongo;