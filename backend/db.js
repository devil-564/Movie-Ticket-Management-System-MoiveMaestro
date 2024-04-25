const mongoose = require('mongoose')
const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect("mongodb+srv://irfan:eJrFVt4EDQ1hmj5q@cluster0.jszufzb.mongodb.net/test?retryWrites=true&w=majority");
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = connectToMongo; 