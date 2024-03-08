const mongoose = require('mongoose');
const env = require('dotenv');

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  const conn = await mongoose.connect('mongodb+srv://GouravChamaria:1234@cluster0.u5kxpmi.mongodb.net/mgmt_db?retryWrites=true&w=majority&appName=Cluster0');

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
